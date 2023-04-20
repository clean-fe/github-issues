const getRequest = async (url) => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (err) {
    alert('GET 요청 중 오류가 발생했습니다.');
  }
};

const fetchLabels = async () => {
  return await getRequest('/labels');
};

export { fetchLabels };
