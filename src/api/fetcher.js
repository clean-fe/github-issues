const fetchLabels = async () => {
  return await fetch('/data-sources/labels.json').then((response) => response.json());
};

export { fetchLabels };
