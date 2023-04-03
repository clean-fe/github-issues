import { getIssueTpl } from './tpl';
import { setIssueOnDocument } from './issue';

const $app = document.querySelector('#app');
$app.innerHTML = getIssueTpl();
setIssueOnDocument('#issues');
