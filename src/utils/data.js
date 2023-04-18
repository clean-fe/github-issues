import { pipe } from './fn';

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export const getData = async (url, ...mappers) => await pipe(request, ...mappers)(url);

export const postData = async ({
  url,
  bodyData,
  onSuccess = (response) => {},
  onError = (response) => {},
  onSettled = (response) => {},
}) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  onSettled(res);

  if (!res.ok) {
    onError(res);
    return;
  }

  onSuccess(res);
};
