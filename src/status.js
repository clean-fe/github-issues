import { $, compose, filter } from "./utils.js"
import { getIssueItemTpl, getIssueTpl } from "./tpl.js"

$("#app").innerHTML = getIssueTpl()

const renderWith =
  renderFn =>
  (status = "open") =>
  data =>
    compose(
      filter(v => v.status == status),
      renderFn
    )(data)

const renderIssueList = node => data => {
  node.innerHTML = data.reduce((html, item) => {
    return html + getIssueItemTpl(item)
  }, "")
}

const renderCount = data => {
  $(`.${data[0].status}-count`).innerHTML = `${data.length} ${
    data[0].status == "open" ? "Opens" : "Closed"
  }`
}

export const renderCountWithStatus = renderWith(renderCount)

export const renderIssueWithStatus = renderWith(
  renderIssueList($(".issue-list ul"))
)
