import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from '../__mocks__/server.js';

beforeAll(() => {
  server.listen({ onUnhandledRequest: `error` });

  const $app = document.createElement('div');
  $app.id = 'app';
  document.body.appendChild($app);
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
