const fetchLabels = async () => {
  return await fetch('/labels').then((response) => response.json());
};

export { fetchLabels };
