const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'css'],
    alias: {
      '@components': path.join(__dirname, 'src/components'),
      '@ts': path.join(__dirname, 'src/ts'),
      '@validator': path.join(__dirname, 'src/validator')
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
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'main-bundle-[hash].css'
      })
    ]
  },
}