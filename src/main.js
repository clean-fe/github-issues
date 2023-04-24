import $App from "./application/AppConfigurations.js";
import {worker} from "./__mock_data__/browser.js";
import {router} from "./presentation/utils/Router.js";
import {attachNavigationEvent} from "./presentation/utils/EventBinding.js";

const _ = worker.start()
await router('/')
// await router('/label')


