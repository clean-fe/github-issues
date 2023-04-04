export const api = async function ({ url, method, params }) {
  try {
    const response = await fetch(url, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        (method || '').match(/POST/) && params ? JSON.stringify(params) : null,
      credentials: 'omit'
    });

    const { ok } = response;

    if (ok) {
      return response.json();
    } else {
      throw response.json();
    }
  } catch (e) {}
  throw error;
};
