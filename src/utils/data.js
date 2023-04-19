import { pipe } from './fn';

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
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
      return;
    }

    onError(res);
  } catch (error) {
    error.name === 'AbortError'
      ? console.log(`[controller]: 요청이 취소되었습니다; ${error.message}`)
      : console.error(`[controller]: 알 수 없는 오류 발생; ${error}`);
  }
};
