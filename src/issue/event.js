import { setIssueListTpl } from './render';

const toggleCountBtn = ($focused, $unfocused) => {
  $focused.classList.add('font-bold');
  $unfocused.classList.remove('font-bold');
};

export const addToggleCountEvent = ({ targetList: { list, selector }, $target, $nonTarget }) => {
  $target.addEventListener('click', () => {
    toggleCountBtn($target, $nonTarget);
    setUpIssue(list, selector);
  });
};

const setUpIssue = (list, selector) => {
  const setListTpl = setIssueListTpl(list);
  setListTpl(selector);
};
