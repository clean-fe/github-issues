if (process.env.NODE_ENV === "development") {
  import("./mocks/browser.js").then(({ worker }) => {
    console.log("MSW running");
    worker.start();
  });
}
