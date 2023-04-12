const createOptions = method => (body = null) => {
  const options = {
    method: method,
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer'
  }
  if (body) {
    Object.assign(options, {body: body})
  }
  return options
}

const getOptions = createOptions('GET')
const postOptions = createOptions('POST')
const putOptions = createOptions('PUT')
const deleteOptions = createOptions('DELETE')
const customFetch = options => url => {
  return async () => {
    if (url) {
      const response = await fetch(url, options)
      return response.json()
    } else {
      return null
    }
  }
}

export {
  getOptions,
  postOptions,
  putOptions,
  deleteOptions,
  customFetch
}
