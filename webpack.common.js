const PATHS = require('./webpack-paths.js');
const webpack = require('webpack');

module.exports = {
    entry: {
      app: PATHS.appSrc
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'}
            ]
          },
          {
            test: /\.scss$/,
            use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
              },
              {loader: 'sass-loader'}
            ]
          },
          {
            test: /\.png$/,
            use: "url-loader?limit=100000"
          },
          {
            test: /\.jpg$/,
            use: "file-loader"
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader? limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader?limit=10000&mimetype=application/octet-stream'
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: 'file-loader'
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader?limit=10000&mimetype=image/svg+xml'
          }
        ]
    }
};
