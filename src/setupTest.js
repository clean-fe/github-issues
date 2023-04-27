import { JSDOM } from 'jsdom';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';
import { server } from './__mock_data__/server';

beforeAll(() => {
  server.listen();

  const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <div id="app"></div>
      </body>
    </html>  
    `;

  const { window } = new JSDOM(html, { url: 'http://localhost' });
  const { document } = window;

  global.document = document;
  global.window = window;
  global.localStorage = window.localStorage;
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
