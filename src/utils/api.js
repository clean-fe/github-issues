export const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};
