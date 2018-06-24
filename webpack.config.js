var webpack = require('webpack');
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

module.exports = {
    entry: './main.js',
    output: {
      path: paths.DIST,
      filename: 'output.js',
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
        ]
    },
    plugins: [new webpack.ProvidePlugin({
            $: "jquery",
            Backbone: "backbone",
            _: "underscore"
        })]
};