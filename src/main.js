import router, {app} from "./util/Router";
import attachNavigationEvent from "./util/Navigator.js"

// MARK: init
(() => {
  router('/')
  attachNavigationEvent()
})()

