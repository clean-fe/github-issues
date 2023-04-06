import {getIssueItemTpl} from "../../tpl";

import {clearBeforeRender, renderBeforeEnd} from "../../util/UI/ManagingDOM";
import {pipe} from "../../util/FP";

const issueUl = document.getElementById('issue-wrapper__ul')

const findStatusTabDom = () => {
  const statusTab = document.getElementsByClassName('statusTab')[0];
  const statusOpen = statusTab.getElementsByClassName('open-count')[0];
  const statusClosed = statusTab.getElementsByClassName('close-count')[0];
  return {statusTab, statusOpen, statusClosed}
}

// MARK: render issue functions
const createIssueHtml = list => list.map(issue => getIssueItemTpl(issue))
const renderIssue = el => html => renderBeforeEnd(el)(html)
const renderIssueAtUl = renderIssue(issueUl)
const clearIssueBeforeRender = clearBeforeRender(issueUl)
const renderIssueList = pipe(
    createIssueHtml,
    renderIssueAtUl
)

const statusFilter = status => list => list.filter(issue => status === issue.status)

export {
  findStatusTabDom,
  clearIssueBeforeRender,
  renderIssueList,
  statusFilter,
}
