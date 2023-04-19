import { getLabelTpl } from "./tpl.js";

import { Model } from "./model.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("beforeend", getLabelTpl());

function main() {
  const sample = new Model();
  app.insertAdjacentHTML("beforeend", sample.createLabelItem());

  return;
}

main();
