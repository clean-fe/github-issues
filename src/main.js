import router, {app} from "./util/Router";
import attachNavigationEvent from "./presentation/utils/Navigator.js"

// MARK: init
(() => {
  router('/')
  attachNavigationEvent()
})()

