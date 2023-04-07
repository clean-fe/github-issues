import { getIssueTpl, getIssueItemTpl } from "./tpl";

const appElement = document.querySelector("#app")
appElement.insertAdjacentHTML("beforeend",getIssueTpl())
let data = {result:null}


const getData = async () => {
    const response = await fetch('../data-sources/issues.json');
    data.result = await response.json();
    console.log(data)
}

getData();
appElement.insertAdjacentHTML("beforeend",getIssueItemTpl(data))