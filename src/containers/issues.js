import { renderIssuesByStatus } from "../components/issues";

export const openIssuesContainer = (document) => document.querySelector(".open-count");
export const renderOpenIssuesStatus = () => renderIssuesByStatus("open");

export const closedIssuesContainer = (document) => document.querySelector(".close-count");
export const renderClosedIssuesStatus = () => renderIssuesByStatus("closed");