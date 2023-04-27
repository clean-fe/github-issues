import fetch from 'cross-fetch';
import { getLocalStorage, saveLocalStorage } from '../db';
import { pipe } from './fn';

const requestDefault = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw Error('서버에서 데이터를 가져오는데 실패했습니다.');
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

const requestLabels = async (url) => {
  const labels = getLocalStorage('labels');
  return labels ?? (await requestDefault(url));
};

const request = (url) => {
  // TODO: IndexedDB 사용법 익힌 후 수정할 것
  const result = url === '/labels' ? requestLabels(url) : requestDefault(url);
  return result;
};

export const getData = async (url, ...mappers) => await pipe(request, ...mappers)(url);

let controller;
export const postData = async ({
  url,
  bodyData,
  onSuccess = (response) => {},
  onError = (response) => {},
  onSettled = (response) => {},
}) => {
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();
  const { signal } = controller;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
      signal,
    });

    onSettled(res);

    if (res.ok) {
      onSuccess(res);
      // TODO: IndexedDB 사용법 익힌 후 수정할 것
      saveLocalStorage('labels', bodyData);
      return;
    }

    onError(res);
  } catch (error) {
    error.name === 'AbortError'
      ? console.log(`[controller]: 요청이 취소되었습니다; ${error.message}`)
      : console.error(`[controller]: 알 수 없는 오류 발생; ${error}`);
  }
};
