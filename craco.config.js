// craco.config.js 파일
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.devServer.allowedHosts = ['localhost'];
      return webpackConfig;
    }
  }
}
