import { fileURLToPath } from "url";
import { createServer } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: __dirname,
    server: {
      port: 8000,
    },
  });
  await server.listen();

  server.printUrls();
})();
