import setIssueOnDocument from './issue';
import { LabelButton } from './label/Label.js';

import { worker } from './__mocks__/browser.js';
worker.start();

setIssueOnDocument();

new LabelButton().addEvent();
