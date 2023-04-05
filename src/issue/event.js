import { $ } from '../utils';
import { setIssueListTpl } from './render';
const toggleCountBtn = (setListTpl, $focused, $unfocused) => {
  setListTpl($('#issues'));
  $focused.style.fontWeight = 'bold';
  $unfocused.style.fontWeight = 'normal';
};

const addToggleCountEvent = ({ setListTpl, $target, $nontarget }) => {
  $target.addEventListener('click', () => {
    toggleCountBtn(setListTpl, $target, $nontarget);
  });
};

export const addToggleCountEvents = (openStatusList, closeStatusList) => {
  addToggleCountEvent({
    setListTpl: setIssueListTpl(closeStatusList),
    $target: $('.close-count'),
    $nontarget: $('.open-count'),
  });
  addToggleCountEvent({
    setListTpl: setIssueListTpl(openStatusList),
    $target: $('.open-count'),
    $nontarget: $('.close-count'),
  });
};
