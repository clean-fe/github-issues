import {getIssueTpl, getIssueItemTpl, getLabelItemTpl, getLabelTpl} from "./tpl";
import {getIssue} from "./util/APIs/Issue";
import {insertHtmlAfterBegin, insertHtmlBeforeEnd} from "./util/UI/ManagingDOM"
import {pipe} from "./util/FP";

const app = document.getElementById('app');

// MARK: page init
// init
;(() => {
  const mainViewComponent = getIssueTpl()
  insertHtmlAfterBegin(app)(mainViewComponent)
})()

// MARK: issue list
const ul = document.querySelector("#issues-wrapper > div.issue-list.flex.ml-auto > ul")

const issueList = await getIssue()
const issueHtml = issueList.map(issue => getIssueItemTpl(issue))
insertHtmlBeforeEnd(ul)(issueHtml)

