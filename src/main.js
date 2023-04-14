import setIssueOnDocument from './issue';
import { Label } from './label/Label.js';

import { worker } from './mocks/browser.js';
worker.start();

setIssueOnDocument();

new Label();
