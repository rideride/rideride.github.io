const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
  plugins: [
    //new HtmlWebpackPlugin({
    //  title: "Webpack Output",
    //}),
  ],
  resolve: {
    // ... rest of the resolve config
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("path-browserify"),
      "url": require.resolve("url/")
    }
  },
};

