export const request = async ({
  url,
  method = 'GET',
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  data,
  ...options
}) => {
  try {
    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
      ...options,
    });
    if (!res.ok) throw new Error(String(res.status));
    return res.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error('Aborted: ', err);
      return;
    }
    console.error(err);
    alert(getErrorMessage(+err.message));
  }
};

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 400:
      return '입력이 잘못됐어요.';
    case 401:
      return '권한이 없으시네요. 로그인을 다시 해보시겠어요?';
    case 404:
      return '이 페이지는 존재하지 않습니다. 다른 페이지는 어떠신가요?';
    case 500:
      return '저희 서버 개발자 전화번호는 ...';
    default:
      return '무언가 잘못됐어요. 지속적인 에러가 발생할 경우 죄송하게 됐습니다.';
  }
};
