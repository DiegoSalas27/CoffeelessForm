/** @type {import('webpack').Configuration} */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'public/js'),
      publicPath: '/public/js',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'css'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /\.module\.css$/
        },
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './public',
      devMiddleware: {
        writeToDisk: true
      },
      historyApiFallback: true,
      port: 3002
    },
    plugins: [
      new CleanWebpackPlugin(),
    ]
  }
}
