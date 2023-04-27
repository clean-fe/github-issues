import { request } from '../fetcher.js';
import { apiErrorHandler } from './common.js';

const fetchLabels = async () => {
  return apiErrorHandler(() => request({ url: '/labels' }));
};

const postLabel = async ({ name, description, color }) => {
  return apiErrorHandler(() =>
    request({
      url: '/labels',
      options: {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
          color,
        }),
      },
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
    request({
      url: '/labels-delay',
      options: {
        signal: abortController.signal,
      },
    })
  );
};

export { fetchLabels, postLabel, updateLabels };
