import { $ } from './util'
import { getIssueItemTpl } from './tpl'

const getStatusElement = () => {
  return {
    $open_status: $('.statusTab .open-count'),
    $close_status: $('.statusTab .close-count'),
  }
}

const getFilteredIssuesDataByStatus = (issuesData = [], status = 'open') => {
  return issuesData.filter((data) => data.status === status)
}

export const bindStatusTabOpenElement = (items) => {
  const { $open_status } = getStatusElement()

  $open_status.innerHTML = `${getFilteredIssuesDataByStatus(items, 'open').length} opens`
}

export const bindStatusTabCloseElement = (items) => {
  const { $close_status } = getStatusElement()

  $close_status.innerHTML = `${getFilteredIssuesDataByStatus(items, 'close').length} closed`
}

const renderIssues = (items) => {
  const $issue_list = $('.issue-list ul')

  items.forEach((item) => {
    $issue_list.insertAdjacentHTML('beforeend', getIssueItemTpl(item))
  })
}

const handleStatusFontChange = (status) => {
  const { $open_status, $close_status } = getStatusElement()

  if (status === 'open') {
    $open_status.classList.add('font-bold')
    $close_status.classList.remove('font-bold')
  } else {
    $close_status.classList.add('font-bold')
    $open_status.classList.remove('font-bold')
  }
}

const statusEventCallback = (items, status) => {
  $('.issue-list ul').innerHTML = ''

  const data = getFilteredIssuesDataByStatus(items, status)

  renderIssues(data)
  handleStatusFontChange(status)
}

export const bindStatusTabOpenClickEvent = (items) => {
  const { $open_status } = getStatusElement()

  $open_status.addEventListener('click', () => statusEventCallback(items, 'open'))
}

export const bindStatusTabCloseClickEvent = (items) => {
  const { $close_status } = getStatusElement()

  $close_status.addEventListener('click', () => statusEventCallback(items, 'close'))
}
