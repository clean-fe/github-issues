import { getIssueTpl, renderIssueList } from "./tpl"
import { $, compose, render, filter } from "./utils"
import { fetchData, ISSUE_URL } from "./api"

$("#app").innerHTML = getIssueTpl()

const renderWithStatus = (status = "open") =>
  compose(
    fetchData,
    filter(v => v.status == status),
    renderIssueList($(".issue-list ul"))
  )(ISSUE_URL)

renderWithStatus()
$(".open-count").addEventListener("click", () => renderWithStatus("open"))
$(".close-count").addEventListener("click", () => renderWithStatus("close"))
