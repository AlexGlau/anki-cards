const path = require('path');

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { cacheDirectory: true }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2|woff)$/i,
        use: [
          'url-loader'
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  }
};
