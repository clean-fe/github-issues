import { getLabelTpl } from "./tpl.js";
import { View } from "./view.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("beforeend", getLabelTpl());

const view = new View();

async function main() {
  await view.getLabelData();
  const labelItems = view.render().join("");
  app.insertAdjacentHTML("beforeend", labelItems);
}

main();
