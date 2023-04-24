import setIssueOnDocument from './issue';
import { LabelButton } from './label/Label.js';

import { worker } from './__mocks__/browser.js';
//

setIssueOnDocument();

new LabelButton().addEvent();
