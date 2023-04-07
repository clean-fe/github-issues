import { $ } from '../utils';
import { setIssueListTpl } from './render';

const toggleCountBtn = (setListTpl, $focused, $unfocused) => {
  setListTpl($('#issues'));
  $focused.style.fontWeight = 'bold';
  $unfocused.style.fontWeight = 'normal';
};

const addToggleCountEvent = ({ setListTpl, $target, $nonTarget }) => {
  $target.addEventListener('click', () => toggleCountBtn(setListTpl, $target, $nonTarget));
};

export const addToggleCountEvents = (openStatusList, closeStatusList) => {
  addToggleCountEvent({
    setListTpl: setIssueListTpl(closeStatusList),
    $target: $('.close-count'),
    $nonTarget: $('.open-count'),
  });
  addToggleCountEvent({
    setListTpl: setIssueListTpl(openStatusList),
    $target: $('.open-count'),
    $nonTarget: $('.close-count'),
  });
};
