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
