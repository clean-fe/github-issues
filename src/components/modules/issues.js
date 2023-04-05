import { renderComponent } from "../commons/render.js";
import { $ } from "../../utils/dom.js";
import { Result } from "../commons/result.js";
import { getIssueItemTpl, getIssueTpl } from "../layouts/issues.js";
import { issueListContainer } from "../../containers/issues.js";

$("#app").innerHTML = getIssueTpl();
const renderIssueList = (node) => {
    return (data => {
        node.innerHTML = data.reduce((html, item) => {
            return html + getIssueItemTpl(item)
        }, "")
    })
}

export const renderIssueByStatus = renderComponent(renderIssueList(issueListContainer(document)));

export const createIssueListHtml = (data) => {
    if (!Array.isArray(data)) {
        return Result.error("data must be an array");
    }
    const issueItemsHtml = data.map(item => getIssueItemTpl(item)).join('');
    return Result.ok(issueItemsHtml);
};