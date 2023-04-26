import { JSDOM } from 'jsdom';
import { beforeAll } from 'vitest';

beforeAll(() => {
  const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <div id="app"></div>
      </body>
    </html>  
    `;

  const { window } = new JSDOM(html);
  const { document } = window;

  global.document = document;
  global.window = window;
});
