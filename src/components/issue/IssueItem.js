import {getIssue} from "../../util/APIs/Issue";
import {getIssueItemTpl} from "../../tpl";
import {clearBeforeRender, renderAfterBegin, renderBeforeEnd} from "../../util/UI/ManagingDOM";
import {pipe} from "../../util/FP.js";

const ul = document.querySelector("#issues-wrapper > div.issue-list.flex.ml-auto > ul")

const findStatusTabDom = () => {
  const statusTab = document.getElementsByClassName('statusTab')[0];
  const statusOpen = statusTab.getElementsByClassName('open-count')[0];
  const statusClosed = statusTab.getElementsByClassName('close-count')[0];
  return {statusTab, statusOpen, statusClosed}
}

// MARK: render issue functions
const createIssueHtml = list => list.map(issue => getIssueItemTpl(issue))
const renderIssue = el => html => renderBeforeEnd(el)(html)
const renderIssueAtUl = renderIssue(ul)
const clearIssueBeforeRender = clearBeforeRender(ul)
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
