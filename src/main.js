import setIssueOnDocument from './issue';
import { LabelButton } from './label/Label.js';

import { worker } from './mocks/browser.js';
worker.start();

setIssueOnDocument();

new LabelButton().addEvent();
