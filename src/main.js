import { getLabelTpl } from "./tpl.js";
import { View } from "./view.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("beforeend", getLabelTpl());

const view = new View();

async function init() {
  await view.getLabelData();
  // const labelItems = view.render().join("");
  app.insertAdjacentHTML("beforeend", view.render().join(""));
}

function main() {
  const newLabelBtn = document.querySelector(".new-label-button");
  const form = document.querySelector("#new-label-form");
  const labelCreateBtn = document.querySelector("#label-create-button");

  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });
  labelCreateBtn.addEventListener("click", () => {
    return;
  });
}

init();
main();
