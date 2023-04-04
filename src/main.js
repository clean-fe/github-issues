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

// Todo: 함수 두개 합치기
const renderIssues = async () => {
  const issues = await fetchIssues()
  const issueItems = issues.map(getIssueItemTpl)
  const issueList = document.querySelector('.issue-list')
  render(issueList, issueItems)
}

const renderLabels = async () => {
  const labels = await fetchLabels()
  const labelItems = labels.map(getLabelItemTpl)
  const labelList = document.querySelector('.label-list')
  render(labelList, labelItems)
}

const renderObject = {
  issue: {
    fetchCallback: fetchIssues,
    getTempl: getIssueItemTpl,
    className: '.issue-list',
  },
  label: {
    fetchCallback: fetchLabels,
    getTempl: getLabelItemTpl,
    className: '.label-list',
  },
}

const fetchItems = (fetchCallback) => {
  return () => {
    return fetchCallback()
  }
}

const templateRender = (getTempl) => {
  return (items) => {
    return items.map(getTempl)
  }
}

const createDOMwithItems = (className) => {
  return (items) => {
    const list = document.querySelector(className)
    render(list, items)
  }
}

const renderComponent = ({ fetchCallback, getTempl, className }) => {
  asyncPipe(
    fetchItems(fetchCallback),
    templateRender(getTempl),
    createDOMwithItems(className),
  )()
}

const navigate = (path) => {
  navigateTo(path)

  if (path === '/') {
    appElement.innerHTML = getIssueTpl()
    renderComponent(renderObject.issue)
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
