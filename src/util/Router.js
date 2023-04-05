import {clearBeforeRender, renderAfterBegin} from "./UI/ManagingDOM";
import {pipe} from "./FP.js";
import {getIssueTpl, getLabelTpl} from "../tpl";

const routes = [
  {
    path: '/',
    template: getIssueTpl()
  },
  {
    path: '/label',
    template: getLabelTpl()
  }
]

const app = document.getElementById('app');
const clearApp = clearBeforeRender(app)
const renderApp = renderAfterBegin(app)

const renderView = html => pipe(
    clearApp,
    renderApp
)(html)

const route = routes => path => {
  const view = routes.filter(v => v.path === path)[0]?.template
  if (view) {
    renderView(view)
  } else {
    alert('404 not found')
  }
}

export default route(routes)
