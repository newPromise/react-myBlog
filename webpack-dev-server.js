
const config = {
    dev: {
        host: "localhost",
        port: "8888",
        autoOpenBrowser: true,
        assetsPublicPath: "/"
    }
}


const devServer = {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: { warnings: true, errors: true },
    // overlay: config.dev.errorOverlay
    //   ? { warnings: false, errors: true }
    //   : false,
    publicPath: config.dev.assetsPublicPath,
    // proxy: proxyConfig,
    quiet: true, // necessary for FriendlyErrorsPlugin/
    // watchOptions: {
    //   poll: config.dev.poll,
    // }
};
module.exports = devServer;