import { api } from '../utils/api';

export const getLabels = () =>
  api({
    url: 'data-sources/labels.json',
    method: 'GET'
  });
