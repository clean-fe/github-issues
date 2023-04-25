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

export { fetchLabels, postLabel };
