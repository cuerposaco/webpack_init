const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: `${__dirname}/src/index.js`
  },

  output: {
    path: `${__dirname}/build`,
    filename: '[name].js',
    publicPath: '/build'
  },

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  },

  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0'],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}