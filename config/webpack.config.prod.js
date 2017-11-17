const path = require('path')
const webpack = require('webpack')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const stylelintFormatter = require('./stylelintFormatter')
const postcssUrlRebase = require('./postcssUrlRebase')

const indexSrc = path.resolve(__dirname, '../src/index.js')
const appSrc = path.resolve(__dirname, '../src')
const libSrc = path.resolve(__dirname, '../lib')

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

module.exports = {
  context: appSrc,
  entry: indexSrc,
  devtool: 'source-map',
  target: 'web',
  output: {
    path: libSrc,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'index.js',
    sourceMapFilename: 'index.js.map',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: appSrc,
      },
      {
        test: /\.css$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: stylelintFormatter,
              plugins: () => [
                require('stylelint'),
                require('postcss-sass-each'),
                require('postcss-mixins'),
                require('postcss-import'),
                require('postcss-url')({
                  url: postcssUrlRebase,
                }),
                require('postcss-cssnext')({
                  features: {
                    customProperties: {
                      strict: false,
                    },
                  },
                }),
              ],
            },
            loader: require.resolve('postcss-loader'),
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 1000000,
                  name: 'static/media/[name].[hash:8].[ext]',
                }
              },
              {
                loader: require.resolve('image-webpack-loader'),
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 75
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: '75-90',
                    speed: 4
                  },
                  webp: {
                    quality: 75
                  }
                }
              },
            ],
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: 0,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-sass-each'),
                    require('postcss-import'),
                    require('postcss-mixins'),
                    require('postcss-url')({ url: postcssUrlRebase }),
                    require('postcss-cssnext'),
                  ],
                },
              },
            ],
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
  ],
  externals: {
   'react': 'react',
   'react-dom': 'reactDOM'
  },
}
