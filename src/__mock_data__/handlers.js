import { rest } from 'msw';
import { API_URL } from '../constants';
import { getResponseOfApi } from './helpers';
import { MOCK_LABELS, MOCK_ERROR } from './data';

const HANDLER_LABELS = {
  getSuccess: rest.get(API_URL.LABEL, getResponseOfApi(200)(MOCK_LABELS)),
  postSuccess: rest.post(API_URL.LABEL, getResponseOfApi(200)(MOCK_LABELS)),
  postFail: rest.post(API_URL.LABEL, getResponseOfApi(500)(MOCK_ERROR)),
  delaySuccess: rest.get(API_URL.LABEL_DELAY, getResponseOfApi(200)(MOCK_LABELS, 5000)),
};

export const handlers = [HANDLER_LABELS.getSuccess, HANDLER_LABELS.postFail];
