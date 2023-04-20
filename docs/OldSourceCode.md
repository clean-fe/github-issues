## IssueItem

```javascript
import {getIssueItemTpl} from "../../tpl";

import {renderInnerHTML, renderBeforeEnd} from "../../presentation/utils/Render";
import {pipe} from "../../application/FP";

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
const clearIssueBeforeRender = renderInnerHTML(issueUl)
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
```

## IssueView

```javascript
import {getIssue} from "../data/network/APIEndpoints";
import {findStatusTabDom, clearIssueBeforeRender, renderIssueList, statusFilter} from "../components/issue/IssueItem";

// MARK: define global variables
const status = Object.freeze({
  open: 'open',
  close: 'close'
})

// fetch
const issueList = await getIssue()

// MARK: counter label
const {statusOpen, statusClosed} = findStatusTabDom()
const openCounter = statusFilter(status.open)(issueList).length ?? 0
const closedCounter = statusFilter(status.close)(issueList).length ?? 0

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
proxy.target = statusFilter(status.open)(issueList)

statusOpen.addEventListener('click', async () => {
  proxy.target = statusFilter(status.open)(issueList)
})
statusClosed.addEventListener('click', async () => {
  proxy.target = statusFilter(status.close)(issueList)
})
```
