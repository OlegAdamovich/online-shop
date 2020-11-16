module.exports = {
  publicPath: '/online-shop/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};