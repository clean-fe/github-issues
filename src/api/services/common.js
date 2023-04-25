import { ApiError } from '../errors.js';

const apiErrorHandler = async (api) => {
  try {
    return await api();
  } catch (err) {
    if (err instanceof ApiError) {
      console.error(err.message);
      console.error('에러 코드 : ', err.statusCode);
      console.error('에러 상세 : ', err.details);
    } else {
      console.error('알 수 없는 에러가 발생했습니다');
    }
    return null;
  }
};

export { apiErrorHandler };
