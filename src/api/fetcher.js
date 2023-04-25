import { ApiError } from './errors';

const get = async (url, errorMessage = 'GET 요청에서 에러가 발생했습니다.') => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    throw new ApiError(errorMessage, err.status, err.message);
  }
};

const post = async (url, body = {}, errorMessage = 'POST 요청에서 에러가 발생했습니다.') => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(errorMessage, {
        cause: {
          statusCode: res.status,
          details: res.statusText,
        },
      });
    }
    return res.json();
  } catch (e) {
    const { statusCode, details } = e.cause;
    throw new ApiError(e.message, statusCode, details);
  }
};

export { get, post };
