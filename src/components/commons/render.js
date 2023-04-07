import { filter } from "../../utils/filter";
import { compose } from "./compose";

export const renderComponent =
    (renderFn) =>
    (status = "open") =>
    data => compose(
        filter(v => v.status === status),
        renderFn
    )(data);