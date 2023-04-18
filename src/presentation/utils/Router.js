// MARK - Router

const getCurrentUrl = () => history.state?.current

const isUrlChanged = url => url !== getCurrentUrl()

const navigate = url => {
  if (isUrlChanged(url)) {
    history.pushState({current: url}, '', url)
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
    if (view?.path) {
      navigate(view.path)
      currentView = null  // 이전 View 소멸...(꼭 필요한가?)
      const module = await view.component()
      const ViewClass = module.default
      currentView = new ViewClass()
    } else {
      alert('404 not found')
    }
  }
}
const router = route(routes)

// MARK - Attach Navigation Event

const attachNavigationEvent = () => {
  const nav = document.getElementsByTagName('nav')[0]
  nav.addEventListener('click', evt => {
    const path = evt.target?.dataset?.path
    if (path) return router(path)
  })
}

export {
  router,
  attachNavigationEvent
}
