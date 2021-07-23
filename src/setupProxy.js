const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/songs", {
      target: "http://api.aishu.cn/mock/1492/api",
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};