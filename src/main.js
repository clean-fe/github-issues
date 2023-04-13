import { isStringMatched } from './utils/evaluation';

import Issue from './issue';
import Label from './label';

const navEl = document.querySelector('.nav-git');

navEl.addEventListener('click', e => {
  if (!isStringMatched(e.target.tagName, 'BUTTON')) return false;

  switch (e.target.innerText) {
    case 'Issue':
      Issue();
      break;
    case 'Label':
      Label();
      break;
  }
});

Issue();
