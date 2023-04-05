import { renderIssueByStatus } from "./components/modules/issues";
import { fetchJSON } from "./utils/fetch";
import { shareParams } from "./components/commons/shareParams";
import { compose } from "./components/commons/compose";
import { renderCountByStatus } from "./components/modules/counts";

const ISSUE_JSON = "/data-sources/issues.json"

const STATUS_OPEN = "open";
const STATUS_CLOSED = "close";

const init = () => {
    compose(
        fetchJSON,
        shareParams(
            renderIssueByStatus(STATUS_OPEN),
            renderCountByStatus(STATUS_OPEN),
            renderCountByStatus(STATUS_CLOSED)
        )
    )(ISSUE_JSON)
}

init();