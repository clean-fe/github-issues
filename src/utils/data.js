import { saveLocalStorage } from '../db';
import { pipe } from './fn';

const requestDefault = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const requestLabels = async (url) => {
  const labels = localStorage.getItem('labels');
  return Boolean(labels) ? JSON.parse(labels) : requestDefault(url);
};

const request = async (url) => {
  // TODO: IndexedDB 사용법 익힌 후 수정할 것
  return url === '/labels' ? requestLabels(url) : requestDefault(url);
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
      saveLocalStorage(bodyData);
      return;
    }

    onError(res);
  } catch (error) {
    error.name === 'AbortError'
      ? console.log(`[controller]: 요청이 취소되었습니다; ${error.message}`)
      : console.error(`[controller]: 알 수 없는 오류 발생; ${error}`);
  }
};
