import { $ } from "../utils/dom";

export const openIssuesContainer = () => $(".open-count");
export const renderOpenIssuesStatus = () => renderIssuesByStatus("open");

export const closedIssuesContainer = () => $(".close-count");
export const renderClosedIssuesStatus = () => renderIssuesByStatus("closed");

export const issueListContainer = () => $(".issue-list ul");