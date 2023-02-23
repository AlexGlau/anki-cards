const path = require('path');
const ESLintPlugin = require("eslint-webpack-plugin");

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  target: 'web',
  entry: ['./src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  optimization: { usedExports: true },
  devServer: {
    contentBase: './public',
    host: '127.0.0.1',
    port: 8090,
    historyApiFallback: true
  },
  watchOptions: { ignored: '/node_modules' },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|png|ttf|eot|woff2|woff)$/i,
        use: [
          'url-loader'
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [new ESLintPlugin({
    extensions: ['.ts', '.tsx', 'js', 'jsx']
  })]
};
