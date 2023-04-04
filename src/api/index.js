const BASE_URL = 'http://localhost:5173'

const request = (url, method = 'GET', options) => {
  return fetch(`${BASE_URL}${url}`, { ...options, method })
}

export const http = {
  get: (url) => request(url).then((data) => data.json()),
}

export const getIssuesData = () => http.get('/data-sources/issues.json')
