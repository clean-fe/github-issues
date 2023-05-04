// MARK - Attach Navigation Event

import {router} from "./Router";
import {$} from "./Render";
import {curry} from "../../application/FP";

const _eventBind = (el, eventType, listener) => $(el).addEventListener(eventType, listener)
const eventBind = curry(_eventBind)

const urlChange = evt => {
  const path = evt.target?.dataset?.path
  if (path) return router(path)
}

const attachNavigationEvent = eventBind('#page-navigator', 'click', urlChange)

export {
  eventBind,
  attachNavigationEvent
}
