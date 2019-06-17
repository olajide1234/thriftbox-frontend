module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    historyApiFallback: true,
    port: 5000,
    hot: true
  }
};
