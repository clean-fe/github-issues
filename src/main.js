import router from "./util/Router";

router('/')


// import {getIssueTpl} from "./tpl";
// import {getIssue} from "./util/APIs/Issue";
// import {
//   renderAfterBegin,
//   clearBeforeRender
// } from "./util/UI/ManagingDOM"
// import {pipe} from "./util/FP";
// import {findStatusTabDom, createIssueHtml, renderIssue, statusFilter, status} from "./components/Issue";
//
// const app = document.getElementById('app');
//
// // MARK: page init
// // init
// ;(() => {
//   const mainViewComponent = getIssueTpl()
//   renderAfterBegin(app)(mainViewComponent)
// })()
//
// // fetch
// const issueList = await getIssue()
//
// // MARK: issue list
// const ul = document.querySelector("#issues-wrapper > div.issue-list.flex.ml-auto > ul")
// const renderIssueAtUl = renderIssue(ul)
// const clearIssueBeforeRender = clearBeforeRender(ul)
//
// const renderIssueList = pipe(
//     createIssueHtml,
//     renderIssueAtUl
// )
//
// // MARK: counter label
// const {statusOpen, statusClosed} = findStatusTabDom()
// const openCounter = statusFilter(status.open)(issueList).length ?? 0
// const closedCounter = statusFilter(status.close)(issueList).length ?? 0
//
// const handler = {
//   set(target, property, value) {
//     target = value;
//     statusOpen.textContent = `${openCounter} Opens`
//     statusClosed.textContent = `${closedCounter} Closed`
//     clearIssueBeforeRender()
//     renderIssueList(target)
//     return true
//   }
// }
//
// const proxy = new Proxy(issueList, handler)
// proxy.target = statusFilter(status.open)(issueList)
//
// statusOpen.addEventListener('click', async () => {
//   proxy.target = statusFilter(status.open)(issueList)
// })
// statusClosed.addEventListener('click', async () => {
//   proxy.target = statusFilter(status.close)(issueList)
// })
