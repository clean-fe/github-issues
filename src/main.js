import {getIssueTpl, getIssueItemTpl, getLabelItemTpl, getLabelTpl} from "./tpl";
import {getIssue} from "./util/APIs/Issue";
import {insertHtmlAfterBegin, insertHtmlBeforeEnd} from "./util/UI/ManagingDOM"
import {pipe} from "./util/FP";

const app = document.getElementById('app');
let issueList = [];

// MARK: page init
// init
;(() => {
  const mainViewComponent = getIssueTpl()
  insertHtmlAfterBegin(app)(mainViewComponent)
})()

const nonFilteredIssueList = await getIssue()
issueList = nonFilteredIssueList.filter(issue => 'open' === issue.status)

// MARK: issue list
const ul = document.querySelector("#issues-wrapper > div.issue-list.flex.ml-auto > ul")
const createIssueHtml = list => list.map(issue => getIssueItemTpl(issue))
const clearBeforeRender = el => () => el.innerHTML = ''
const clearIssueBeforeRender = clearBeforeRender(ul)
const renderIssue = el => html => insertHtmlBeforeEnd(el)(html)
const renderIssueAtUl = renderIssue(ul)

const renderIssueList = pipe(
    createIssueHtml,
    renderIssueAtUl
)

// MARK: counter label
const findStatusTabDom = () => {
  const statusTab = document.getElementsByClassName('statusTab')[0];
  const statusOpen = statusTab.getElementsByClassName('open-count')[0];
  const statusClosed = statusTab.getElementsByClassName('close-count')[0];
  return {statusTab, statusOpen, statusClosed}
}

const {statusTab, statusOpen, statusClosed} = findStatusTabDom()

const status = Object.freeze({
  open: 'open',
  close: 'close'
})
const statusFilter = status => list => list.filter(issue => status === issue.status)
const openCounter = statusFilter(status.open)(nonFilteredIssueList).length ?? 0
const closedCounter = statusFilter(status.close)(nonFilteredIssueList).length ?? 0

const handler = {
  set(target, property, value) {
    target = value;
    statusOpen.textContent = `${openCounter} Opens`
    statusClosed.textContent = `${closedCounter} Closed`
    clearIssueBeforeRender()
    renderIssueList(target)
    return true
  }
}

const proxy = new Proxy(issueList, handler)
proxy.target = issueList

statusOpen.addEventListener('click', async () => {
  // proxy.target = await getIssue().then(res => res.filter(issue => 'open' === issue.status))
  proxy.target = nonFilteredIssueList.filter(issue => 'open' === issue.status)
})
statusClosed.addEventListener('click', async () => {
  proxy.target = nonFilteredIssueList.filter(issue => 'close' === issue.status)
})
