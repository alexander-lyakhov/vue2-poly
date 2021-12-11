module.exports = {
  productionSourceMap: false,

  configureWebpack: (config) => {
    config.resolve.extensions = ['*', '.js', '.vue', '.json', '.scss'];
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/global.scss";`,
        prependData: `@import "~@/styles/theme.scss";`
        //additionalData: `@import "~@/styles/theme/fc6.scss";`,
      }
    },
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/shipments/' : '/',

  lintOnSave: false,

};
