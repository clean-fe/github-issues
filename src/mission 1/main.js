import { getIssueTpl } from "./tpl.js";
import { fromEvent, pipe } from "./utils.js";
import { renderApp, renderIssues } from "./render.js";
import { handleClickTab, handleInputSearch } from "./eventHandlers.js";

main();

function main() {
  pipe(
    renderApp(getIssueTpl),
    renderIssues((issue) => issue.status === "open")
  )();

  fromEvent(document, "input").subscribe(handleInputSearch);
  fromEvent(document, "click").subscribe(handleClickTab);
}
