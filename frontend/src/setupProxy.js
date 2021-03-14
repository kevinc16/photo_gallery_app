const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    "/photos",
    createProxyMiddleware({
      target: "https://k9lvn-photo-gallery-app.herokuapp.com/photos",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api": "/api/v1"
      // }
    })
  );
};