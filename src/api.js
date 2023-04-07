export const ISSUE_URL = "/data-sources/issues.json"

export const fetchData = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
