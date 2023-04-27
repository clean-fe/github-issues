import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '../__mocks__/server.js';

beforeAll(() => {
  server.listen({ onUnhandledRequest: `error` });

  const $nav = document.createElement('nav');
  $nav.innerHTML = `<button class="mr-4 base-outer p-2 px-5" id="issue-btn">Issue</button>
      <button class="base-outer p-2 px-5" id="label-btn">Label</button>`;
  document.body.appendChild($nav);

  const $app = document.createElement('div');
  $app.id = 'app';
  document.body.appendChild($app);
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
