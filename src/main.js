import { getIssueTpl, renderIssuesByStatus } from "./components/issues";
import { CLICK_EVENT, addContainerEvent } from "./constants/addContainerEvent";
import { closedIssuesContainer, openIssuesContainer, renderClosedIssuesStatus, renderOpenIssuesStatus } from "./containers/issues";
import { $ } from "./constants/dom";

const ISSUE_JSON = "/data-sources/issues.json"

$("#app").innerHTML = getIssueTpl();

const STATUS_OPEN = "open";

renderIssuesByStatus(STATUS_OPEN, $(".issue-list ul"), ISSUE_JSON);
addContainerEvent(openIssuesContainer(document), CLICK_EVENT, renderOpenIssuesStatus);
addContainerEvent(closedIssuesContainer(document), CLICK_EVENT, renderClosedIssuesStatus);