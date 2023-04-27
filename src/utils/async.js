export const lazy = (importFn) => {
  return new Promise((resolve, reject) => {
    importFn()
      .then((module) => {
        resolve(module.default);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
