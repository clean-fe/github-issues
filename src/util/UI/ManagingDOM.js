const position = Object.freeze({
  beforeBegin: 'beforebegin',
  afterBegin: 'afterbegin',
  beforeEnd: 'beforeend',
  afterEnd: 'afterend'
})

const insertHTML = position => el => html => el.insertAdjacentHTML(position, html)

export const insertHtmlBeforeBegin = insertHTML(position.beforeBegin)
export const insertHtmlAfterBegin = insertHTML(position.afterBegin)
export const insertHtmlBeforeEnd = insertHTML(position.beforeEnd)
export const insertHtmlAfterEnd = insertHTML(position.afterEnd)
