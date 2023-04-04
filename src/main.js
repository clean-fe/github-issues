import { getIssueTpl } from './tpl';
import './issue';

const $app = document.querySelector('#app');
$app.innerHTML = getIssueTpl();
setIssueOnDocument('#issues');
