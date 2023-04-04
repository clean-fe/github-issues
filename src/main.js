import { getIssueTpl } from "./tpl"
import { $, compose, shareParameter } from "./utils"
import { fetchData, ISSUE_URL } from "./api"
import { renderIssueWithStatus, renderCountWithStatus } from "./status"

const init = () =>
  compose(
    fetchData,
    shareParameter(
      renderIssueWithStatus("open"),
      renderCountWithStatus("open"),
      renderCountWithStatus("close")
    )
  )(ISSUE_URL)

init()
$(".open-count").addEventListener("click", () => renderIssueWithStatus("open"))
$(".close-count").addEventListener("click", () =>
  renderIssueWithStatus("close")
)
