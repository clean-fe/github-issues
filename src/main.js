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
  const button = document.querySelector("#label-create-button");

  const nameLabel = document.querySelector("#label-name-input");
  const descriptionLabel = document.querySelector("#label-description-input");
  const colorLabel = document.querySelector("#label-color-value");

  const nameValue = nameLabel.value;
  const descriptionValue = descriptionLabel.value;
  const colorValue = colorLabel.value;

  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });

  // Create a click event listener for the button
  button.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Label created!");
  });

  // Enable the button
  button.disabled = false;
  button.classList.remove("opacity-50");
  button.classList.add("opacity-100");
}

init();
main();
