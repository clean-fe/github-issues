const fetchData = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  return await json
}

const fetchIssues = () => fetchData('/data-sources/issues.json')
const fetchLabels = () => fetchData('/data-sources/labels.json')

export { fetchIssues, fetchLabels }
