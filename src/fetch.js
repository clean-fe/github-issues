const fetchData = async (url) => {
  const response = await fetch(url)
  return response.json()
}

const fetchIssues = () => fetchData('/data-sources/issues.json')
const fetchLabels = () => fetchData('/data-sources/labels.json')

export { fetchIssues, fetchLabels }
