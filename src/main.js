import { getIssuesData } from './api'
import { $, pipePromises, shareParameters } from './util'
import { getIssueTpl, getIssueItemTpl } from './tpl'
import {
  bindStatusTabOpenElement,
  bindStatusTabCloseElement,
  bindStatusTabOpenClickEvent,
  bindStatusTabCloseClickEvent,
} from './status'

const renderIssueTemplate = () => {
  $('#app').innerHTML = getIssueTpl()
}

const bindIssuesData = (items) => {
  const $issue_list = $('.issue-list ul')

  items
    .filter((data) => data.status === 'open')
    .forEach((item) => $issue_list.insertAdjacentHTML('beforeend', getIssueItemTpl(item)))
}

pipePromises(
  $,
  renderIssueTemplate,
  getIssuesData,
  shareParameters(
    bindIssuesData,
    bindStatusTabOpenElement,
    bindStatusTabCloseElement,
    bindStatusTabOpenClickEvent,
    bindStatusTabCloseClickEvent,
  ),
)('#app')
