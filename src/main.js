import { compose, shareParameter } from "./utils"
import { fetchData, ISSUE_URL } from "./api"
import {
  renderIssueWithStatus,
  renderCountWithStatus,
  renderIssueWithOnClick,
} from "./render"
;(() =>
  compose(
    fetchData,
    shareParameter(
      renderIssueWithStatus("open"),
      renderCountWithStatus("open"),
      renderCountWithStatus("close"),
      renderIssueWithOnClick
    )
  )(ISSUE_URL))()
