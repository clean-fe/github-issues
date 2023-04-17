import { ROUTER_PATH } from './constants';

export const navigate = (path) => {
  history.pushState({}, '', path);
  router();
};

const router = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case ROUTER_PATH.LABEL:
      import('./label/views/Label').then(({ default: Label }) => new Label());
      break;
    case ROUTER_PATH.ISSUE:
    case ROUTER_PATH.ROOT: // TODO: label 개발 후 issue 페이지로 변경
    default:
      import('./issue').then(({ default: setIssueOnDocument }) => setIssueOnDocument());
      break;
  }
};
