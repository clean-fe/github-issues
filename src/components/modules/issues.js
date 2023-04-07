import { renderComponent } from "../commons/render.js";
import { $ } from "../../utils/dom.js";
import { Result } from "../commons/result.js";
import { getIssueItemTpl, getIssueTpl } from "../layouts/issues.js";
import { closedIssuesContainer, issueListContainer, openIssuesContainer } from "../../containers/issues.js";
import { STATUS_CLOSED, STATUS_OPEN } from "../../utils/constants.js";

$("#app").innerHTML = getIssueTpl();

const renderIssueList = (data) => {
    const issueList = issueListContainer(document);
    issueList.innerHTML = data.reduce(((html, item) => {
        return html + getIssueItemTpl(item);
    }), "");
}

export const renderIssueByStatus = renderComponent(renderIssueList);

export const createIssueListHtml = (data) => {
    if (!Array.isArray(data)) {
        return Result.error("data must be an array");
    }
    const issueItemsHtml = data.map(item => getIssueItemTpl(item)).join('');
    return Result.ok(issueItemsHtml);
};

export const renderIssueByClick = (data) => {
    const openIssues = openIssuesContainer(document);
    const closedIssues = closedIssuesContainer(document);

    openIssues.addEventListener("click", () => {
        renderIssueByStatus(STATUS_OPEN)(data)
        openIssues.classList.add("font-bold")
        closedIssues.classList.remove("font-bold")
    })

    closedIssues.addEventListener("click", () => {
        renderIssueByStatus(STATUS_CLOSED)(data)
        closedIssues.classList.add("font-bold")
        openIssues.classList.remove("font-bold")
    })
}