import {getIssueItemTpl} from "../tpl.js";
import {renderAfterBegin} from "../util/UI/ManagingDOM.js";

const findStatusTabDom = () => {
  const statusTab = document.getElementsByClassName('statusTab')[0];
  const statusOpen = statusTab.getElementsByClassName('open-count')[0];
  const statusClosed = statusTab.getElementsByClassName('close-count')[0];
  return {statusTab, statusOpen, statusClosed}
}

const status = Object.freeze({
  open: 'open',
  close: 'close'
})

// create html
const createIssueHtml = list => list.map(issue => getIssueItemTpl(issue))

// render html
const renderIssue = el => html => renderAfterBegin(el)(html)

// status filter
const statusFilter = status => list => list.filter(issue => status === issue.status)

export {
  findStatusTabDom,
  createIssueHtml,
  renderIssue,
  statusFilter,
  status
}
