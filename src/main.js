import { renderIssueByClick, renderIssueByStatus } from "./components/modules/issues";
import { fetchJSON } from "./utils/fetch";
import { shareParams } from "./components/commons/shareParams";
import { compose } from "./components/commons/compose";
import { renderCountByStatus } from "./components/modules/counts";
import { ISSUE_JSON, STATUS_CLOSED, STATUS_OPEN } from "./utils/constants";

const init = () => {
    compose(
        fetchJSON,
        shareParams(
            renderIssueByStatus(STATUS_OPEN),
            renderCountByStatus(STATUS_OPEN),
            renderCountByStatus(STATUS_CLOSED),
            renderIssueByClick
        )
    )(ISSUE_JSON)
}

init();