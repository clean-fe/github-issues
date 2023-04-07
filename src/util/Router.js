import {getIssueTpl, getLabelTpl} from "../tpl";

import {clearBeforeRender, renderAfterBegin} from "./UI/ManagingDOM";
import {pipe} from "./FP";

const routes = [
  {
    name: 'issue',
    path: '/',
    template: getIssueTpl(),
    component: () => import('../view/IssueView')
  },
  {
    name: 'label',
    path: '/label',
    template: getLabelTpl(),
    component: () => import('../view/LabelView')
  }
]

const app = document.getElementById('app');
const clearApp = clearBeforeRender(app)
const renderApp = renderAfterBegin(app)

const renderView = html => pipe(
    clearApp,
    renderApp
)(html)

const mounted = 'mounted'
const setCurrentView = (mounted => view => localStorage.setItem(mounted, view))(mounted)
const getCurrentView = (mounted => () => localStorage.getItem(mounted))(mounted)

// TODO: 컴포넌트 분리 페이징은 작동. 다음 문제가 존재한다.
//  1. 네비게이션 이동 후 돌아올 때 컴포넌트 라이프 사이클이 미작동 해 뷰 데이터를 재로딩 하지 않는 문제.
//  2. URL 에 라우팅 되는 것처럼 경로 입력 처리 할 것.
const route = routes => path => {
  const view = routes.filter(v => v.path === path)[0]
  if (view) {
    if (view?.path) {
      renderView(view.template)
      view.component()  // This will not be contained in pipe stream.
      setCurrentView(view.name)
    } else {
      alert('404 not found')
    }
  }
}

export default route(routes)
export {
  app
}
