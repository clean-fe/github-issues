const ISSUES_URL = "../data-sources/issues.json";

async function fetchData(url) {
  const res = await fetch(url);
  return res.json();
}

export async function fetchIssues() {
  return fetchData(ISSUES_URL);
}
