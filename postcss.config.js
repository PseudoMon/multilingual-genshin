module.exports = (ctx) => ({
  parser: "postcss-scss",
  plugins: {
    'autoprefixer': ctx.env === 'production' ? {} : false,
    'postcss-nested': {},
    'postcss-csso': ctx.env === 'production' ? 
      { restructure: false } : false,
  }
})