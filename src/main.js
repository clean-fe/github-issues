import { navigate } from './navigate';
import { $ } from './utils';
import { ROUTER_PATH } from './constants';

navigate(ROUTER_PATH.ROOT);

$('#label-btn').addEventListener('click', () => {
  navigate(ROUTER_PATH.LABEL);
});

$('#issue-btn').addEventListener('click', () => {
  navigate(ROUTER_PATH.ISSUE);
});
