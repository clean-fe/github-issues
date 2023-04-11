export const navigate = (path) => {
  history.pushState({}, '', path);
  router();
};

const router = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/': // TODO: label 개발 후 issue 페이지로 변경
    case '/label':
      import('./label').then(({ default: Label }) => Label);
      break;
    case '/issue':
    default:
      import('./issue').then(({ default: setIssueOnDocument }) => setIssueOnDocument());
      break;
  }
};
