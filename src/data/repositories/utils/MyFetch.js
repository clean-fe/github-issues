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
    Object.assign(options, {body: JSON.stringify(body)})
  }
  return options
}

const getOptions = createOptions('GET')
const postOptions = createOptions('POST')
const putOptions = createOptions('PUT')
const deleteOptions = createOptions('DELETE')
const customFetch = options => async url => {
  if (!url) return null
  try {
    const response = await fetch(url, options)
    if (!response.ok) throw new HTTPError(response.status, response.statusText)

    return response.json()  // COMMENT: Promise 를 반환하므로 await 없어도 됨. 상위 호출자가 resolve 상태가 필요할 경우 알아서 async await 처리
  } catch (error) {
    if (error instanceof HTTPError) {
      console.error('HTTP Error occurred: ', error)
      throw error
    } else {
      console.error('Non-HTTP Error occurred: ', error)
      throw error
    }
  }
}

class HTTPError extends Error {
  constructor(status, statusText) {
    super(`HTTP Error ${status}: ${statusText}`)
    this.status = status
    this.statusText = statusText
  }
}


export {
  getOptions,
  postOptions,
  putOptions,
  deleteOptions,
  customFetch
}
