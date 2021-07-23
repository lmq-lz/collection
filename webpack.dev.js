module.exports = {
  devServer: {
    proxy: {
      '/songs': {
        target: "http://api.aishu.cn/mock/1492/api",
        changeOrigin: true     // target是域名的话，需要这个参数，
      }
    }
  }
}