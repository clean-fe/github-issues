const failResponse50Pct = () => Math.random() < 0.5;

const delay = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

export const getResponseOfApi =
  (status) =>
  (body, delayDuration = 0) =>
  async (...args) => {
    const [_, res, ctx] = args;

    if (status !== 200) {
      const isFail = failResponse50Pct();
      status = isFail ? 500 : 200;
    }

    await delay(delayDuration);
    return res(ctx.status(status), ctx.json(body));
  };
