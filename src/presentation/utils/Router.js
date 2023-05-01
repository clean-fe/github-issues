// MARK - Router

const getCurrentUrl = () => history.state?.path

const isUrlChanged = currentPath => currentPath !== getCurrentUrl()

const navigate = view => {
  if (isUrlChanged(view.path)) {
    history.pushState({name: view.name, path: view.path}, '', view.path)
  }
}

const routes = [
  {
    name: 'issue',
    path: '/',
    component: () => import('../scene/issue/view/IssueView')
  },
  {
    name: 'label',
    path: '/label',
    component: () => import('../scene/label/view/LabelView')
  }
]

const route = routes => {
  let currentView = undefined
  return async path => {
    const view = routes.filter(v => v.path === path)[0]
    if (view) {
      navigate(view)
      currentView = null  // 이전 View 소멸...(꼭 필요한가?)
      const module = await view.component()
      const ViewClass = module.default
      currentView = new ViewClass()
    } else {
      alert('404 not found')
    }
  }
}

// COMMENT: 사이트 최초 접근 또는 새로 고침으로 인한 DOM 재로드시 entry point 를 설정
const entryPoint = () => {
  window.addEventListener('DOMContentLoaded', () => {
    if (history.state?.path) {
      const _ = router(history.state.path)
    } else {
      const _ = router('/')
    }
    return 0
  })
}

const router = route(routes)

export {
  router,
  entryPoint
}


