import { ApiError } from './errors';

const get = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    throw new ApiError('GET 요청에서 에러가 발생했습니다.', err.status, err.message);
  }
};

const post = async (url) => {};

export { get, post };
