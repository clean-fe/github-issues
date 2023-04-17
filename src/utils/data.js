import { pipe } from './fn';

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export const getData = async (url, ...mappers) => await pipe(request, ...mappers)(url);

export const postData = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.statusText);

    return true;
  } catch (e) {
    console.error(e);
  }
};
