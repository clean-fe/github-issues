import { ApiError } from './errors';

const request = async ({ url, errorMessage = '요청에서 에러가 발생했습니다.', options = {} }) => {
  try {
    const res = await fetch(url, {
      ...options,
    });

    if (!res.ok) {
      throw new Error(errorMessage, {
        statusCode: res.status ?? 500,
        details: res.statusText,
      });
    }
    return res.json();
  } catch (err) {
    const { status, statusText } = err;
    throw new ApiError(err.message, status ?? 400, statusText ?? '요청 중 에러가 발생했습니다.');
  }
};

export { request };
