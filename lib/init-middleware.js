export default function initMiddleware(middleware) {
  return (req, res) => {
    new Promise((resolve, reject) => {
      middleware,
        res,
        (result) => {
          if (result instanceof Error) {
            return reject(result);
          }
          return resolve(result);
        };
    });
  };
}
