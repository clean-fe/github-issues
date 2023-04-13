import { api } from '../utils/api';

export const getIssues = () =>
  api({
    url: 'data-sources/issues.json',
    method: 'GET'
  }).then(data => data);
