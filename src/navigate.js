import { ROUTER_PATH } from './constants';

export const navigate = (path) => {
  history.pushState({}, '', path);
  router();
};

const router = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case ROUTER_PATH.LABEL:
      Promise.all([import('./label/views/Label'), import('./label/store')]).then(
        ([{ default: Label }, { default: Store }]) => new Label(Store),
      );
      break;
    case ROUTER_PATH.ISSUE:
    case ROUTER_PATH.ROOT:
    default:
      import('./issue').then(({ default: setIssueOnDocument }) => setIssueOnDocument());
      break;
  }
};
