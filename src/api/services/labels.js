import { get, post } from '../fetcher.js';
import { apiErrorHandler } from './common.js';

const fetchLabels = async () => {
  return apiErrorHandler(() => get('/labels'));
};

const postLabel = async ({ name, description, color }) => {
  return apiErrorHandler(() =>
    post('/labels', {
      name,
      description,
      color,
    })
  );
};

let abortController = null;

const updateLabels = async () => {
  if (abortController) {
    abortController.abort();
    abortController = null;
    return;
  }

  abortController = new AbortController();
  return apiErrorHandler(() =>
    get('/labels-delay', 'label 업데이트 중 에러 발생', {
      signal: abortController.signal,
    })
  );
};

export { fetchLabels, postLabel, updateLabels };
