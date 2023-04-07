import {
  getIssueTpl,
  getLabelTpl,
  getIssueItemTpl,
  getLabelItemTpl,
} from './tpl.js'
import { fetchIssues, fetchLabels } from './fetch.js'
import { navigateTo } from './navigation.js'

import { pipe, asyncPipe } from './util'

const appElement = document.querySelector('#app')

const render = (element, template) => {
  element.innerHTML = template.join('')
}

const renderObject = {
  issue: {
    fetchCallback: fetchIssues,
    getTempl: getIssueItemTpl,
    className: '.issue-list',
    status: 'open',
  },
  label: {
    fetchCallback: fetchLabels,
    getTempl: getLabelItemTpl,
    className: '.label-list',
    status: null,
  },
}

const fetchItems = (fetchCallback) => {
  return () => {
    return fetchCallback()
  }
}

const templateRender = (getTempl, status) => {
  return (items) => {
    if (status) {
      return items.filter((item) => item.status === status).map(getTempl)
    }
    return items.map(getTempl)
  }
}

const createDOMwithItems = (className) => {
  return (items) => {
    const list = document.querySelector(className)
    render(list, items)
    return items
  }
}

const updateIssueCount = (openCountElement, closeCountElement) => {
  return (items) => {
    const openCount = items.filter((item) => item.status === 'open').length
    const closeCount = items.filter((item) => item.status === 'close').length

    openCountElement.textContent = `${openCount} Open`
    closeCountElement.textContent = `${closeCount} Closed`

    return items
  }
}

const renderComponent = ({ fetchCallback, getTempl, className, status }) => {
  const openCountElement = document.querySelector('.open-count')
  const closeCountElement = document.querySelector('.close-count')

  asyncPipe(
    fetchItems(fetchCallback),
    updateIssueCount(openCountElement, closeCountElement),
    templateRender(getTempl, status),
    createDOMwithItems(className),
  )()
}

const handleIssueStatus = () => {
  const openButton = document.querySelector('.open-count')
  const closeButton = document.querySelector('.close-count')

  openButton.addEventListener('click', () => {
    renderObject.issue.status = 'open'
    renderComponent(renderObject.issue)
  })
  closeButton.addEventListener('click', () => {
    renderObject.issue.status = 'close'
    renderComponent(renderObject.issue)
  })
}

const navigate = (path) => {
  navigateTo(path)

  if (path === '/') {
    appElement.innerHTML = getIssueTpl()
    renderComponent(renderObject.issue)
    handleIssueStatus()
  }
  if (path === '/label') {
    appElement.innerHTML = getLabelTpl()
    renderComponent(renderObject.label)
  }
}

const init = () => {
  const issueButton = document.querySelector('.issue-button')
  const labelButton = document.querySelector('.label-button')

  issueButton.addEventListener('click', () => navigate('/'))
  labelButton.addEventListener('click', () => navigate('/label'))

  const currentPath = window.location.pathname
  navigate(currentPath)
}

init()
