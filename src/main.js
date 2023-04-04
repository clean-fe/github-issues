import { getIssueTpl, renderIssueList } from "./tpl"
import { compose, render, filter } from "./utils"
import { fetchData, ISSUE_URL } from "./api"

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
