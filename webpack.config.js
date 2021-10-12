const path = require('path');

module.exports = {
    mode: 'development',
  entry: path.resolve(__dirname, './src/'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // plugins: ['@babel/react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  },

  
  devtool: 'source-map',
  devServer: {
    port: 3010,
  },
};
