import { navigate } from './navigate';
import { $ } from './utils';
import { ROUTER_PATH } from './constants';
import { worker } from './__mock_data__/browser';

worker.start();

navigate(ROUTER_PATH.ROOT);

$('#label-btn').addEventListener('click', () => {
  navigate(ROUTER_PATH.LABEL);
});

$('#issue-btn').addEventListener('click', () => {
  navigate(ROUTER_PATH.ISSUE);
});
