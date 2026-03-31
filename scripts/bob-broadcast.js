#!/usr/bin/env node

const NOTION_TOKEN = process.env.NOTION_API_KEY;
const PARENT_PAGE_ID = process.env.NOTION_BROADCAST_PARENT_ID || "3347e8aabbb480908aa2dfc2fd478ff9";
const JIRA_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_BASE_URL = process.env.JIRA_BASE_URL || "https://curaden.atlassian.net/rest/api/3";
const JIRA_PROJECT_KEY = "BOB";

const today = new Date().toISOString().split('T')[0];

async function queryJira(jql) {
  const url = `${JIRA_BASE_URL}/search?jql=${encodeURIComponent(jql)}&maxResults=50&fields=key,summary,status,priority,assignee`;
  const response = await fetch(url, {
    headers: {
      "Authorization": `Basic ${Buffer.from(JIRA_TOKEN).toString('base64')}`,
      "Accept": "application/json"
    }
  });
  const data = await response.json();
  return data.issues || [];
}

async function createNotionPage(title, children) {
  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      parent: { page_id: PARENT_PAGE_ID },
      properties: {
        title: {
          title: [{ text: { content: title } }]
        }
      },
      children: children
    })
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Notion API error: ${error}`);
  }
  
  return await response.json();
}

function formatIssue(issue) {
  const key = issue.key;
  const summary = issue.fields.summary;
  const status = issue.fields.status?.name || "Unknown";
  const priority = issue.fields.priority?.name || "";
  const assignee = issue.fields.assignee?.displayName || "Unassigned";
  return { key, summary, status, priority, assignee };
}

async function main() {
  console.log("BOB Weekly Broadcast starting...\n");
  
  if (!NOTION_TOKEN) {
    console.error("ERROR: NOTION_API_KEY not set");
    process.exit(1);
  }
  
  if (!JIRA_TOKEN) {
    console.error("ERROR: JIRA_API_TOKEN not set");
    process.exit(1);
  }
  
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  console.log("Fetching Jira data...");
  
  const [doneIssues, inProgressIssues, blockers] = await Promise.all([
    queryJira(`project = ${JIRA_PROJECT_KEY} AND statusCategory = Done AND updated >= "${sevenDaysAgo}" ORDER BY updated DESC`),
    queryJira(`project = ${JIRA_PROJECT_KEY} AND status in ("In Progress", "In Review") ORDER BY priority DESC`),
    queryJira(`project = ${JIRA_PROJECT_KEY} AND statusCategory != Done AND (labels = "blocked" OR priority in ("Highest", "High")) ORDER BY priority DESC`)
  ]);
  
  console.log(`Done: ${doneIssues.length}, In Progress: ${inProgressIssues.length}, Blockers: ${blockers.length}`);
  
  const formatSection = (title, issues) => {
    const blocks = [
      { object: "heading_2", heading_2: { rich_text: [{ text: { content: title } }] } }
    ];
    
    if (issues.length === 0) {
      blocks.push({ object: "paragraph", paragraph: { rich_text: [{ text: { content: "None this week." }, annotations: { italic: true } }] } });
    } else {
      issues.forEach(issue => {
        const { key, summary, priority, assignee } = formatIssue(issue);
        let text = `**${key}** — ${summary}`;
        if (title.includes("Progress")) text += ` _( ${assignee}_ )`;
        if (title.includes("Blockers")) text += ` ⚠️ ${priority}`;
        blocks.push({ object: "paragraph", paragraph: { rich_text: [{ text: { content: text } }] } });
      });
    }
    
    blocks.push({ object: "divider", divider: {} });
    return blocks;
  };
  
  const children = [
    { object: "paragraph", paragraph: { rich_text: [{ text: { content: `**Generated:** ${today}` } }] } },
    { object: "divider", divider: {} },
    ...formatSection("Done This Week", doneIssues),
    ...formatSection("In Progress", inProgressIssues),
    ...formatSection("Blockers / Watch", blockers)
  ];
  
  const title = `BOB Weekly Broadcast — ${today}`;
  console.log(`Creating Notion page: ${title}...`);
  
  const page = await createNotionPage(title, children);
  const pageUrl = page.url || `https://www.notion.so/${page.id?.replace(/-/g, '')}`;
  
  console.log("\n✅ Broadcast created successfully!");
  console.log(`📄 Page URL: ${pageUrl}`);
  console.log(`\nSummary: ${doneIssues.length} done, ${inProgressIssues.length} in progress, ${blockers.length} blockers`);
}

main().catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
