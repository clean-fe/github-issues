const position = Object.freeze({
  beforeBegin: 'beforebegin',
  afterBegin: 'afterbegin',
  beforeEnd: 'beforeend',
  afterEnd: 'afterend'
})

const insertHTML = position => el => html => el.insertAdjacentHTML(position, html)

const insertHtmlBeforeBegin = insertHTML(position.beforeBegin)
const insertHtmlAfterBegin = insertHTML(position.afterBegin)
const insertHtmlBeforeEnd = insertHTML(position.beforeEnd)
const insertHtmlAfterEnd = insertHTML(position.afterEnd)

const arrayCheck = something => something instanceof Array
const htmlArrayRemoveComma = arr => arr.join('')

const safeHtml = html => arrayCheck(html) ? htmlArrayRemoveComma(html) : html
const renderBeforeBegin = el => html => insertHtmlBeforeBegin(el)(safeHtml(html))

const renderAfterBegin = el => html => insertHtmlAfterBegin(el)(safeHtml(html))

const renderBeforeEnd = el => html => insertHtmlBeforeEnd(el)(safeHtml(html))

const renderAfterEnd = el => html => insertHtmlAfterEnd(el)(safeHtml(html))

const clearBeforeRender = el => () => el.innerHTML = ''

export {
  renderBeforeBegin,
  renderAfterBegin,
  renderBeforeEnd,
  renderAfterEnd,
  clearBeforeRender
}
