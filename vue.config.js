module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-tree-transfer/' : '/',
  outputDir: 'publish',
  css: { extract: false },
  productionSourceMap: false
};
