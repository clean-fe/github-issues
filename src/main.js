import { getIssueTpl, renderIssueList } from "./tpl"
import { compose, render, filter, fetchData } from "./utils"
const ISSUE_URL = "/data-sources/issues.json"

const app = document.getElementById("app")
app.innerHTML = getIssueTpl()

const ul = document.querySelector(".issue-list ul")
const openContainer = document.querySelector(".open-count")
const closedContainer = document.querySelector(".close-count")

const renderWithStatus = (status = "open") =>
  compose(
    fetchData,
    filter(v => v.status == status),
    renderIssueList(ul)
  )(ISSUE_URL)

renderWithStatus()
openContainer.addEventListener("click", () => renderWithStatus("open"))
closedContainer.addEventListener("click", () => renderWithStatus("close"))
