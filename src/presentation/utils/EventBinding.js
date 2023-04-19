// MARK - Attach Navigation Event

import {router} from "./Router";
import {$} from "./Render.js";

const eventBind = el => eventType => listener => $(el).addEventListener(eventType, listener)

const urlChange = evt => {
  const path = evt.target?.dataset?.path
  if (path) return router(path)
}

const attachNavigationEvent = eventBind('#page-navigator')('click')(urlChange)

export {
  attachNavigationEvent
}
