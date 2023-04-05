import { $ } from "../utils/dom";

export const openIssuesContainer = (document) => $(".open-count");
export const renderOpenIssuesStatus = () => renderIssuesByStatus("open");

export const closedIssuesContainer = (document) => $(".close-count");
export const renderClosedIssuesStatus = () => renderIssuesByStatus("closed");

export const issueListContainer = () => $(".issue-list ul");