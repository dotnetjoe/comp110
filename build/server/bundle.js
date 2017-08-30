var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');

module.exports = function () {

  // First we fire up Webpack an pass in the configuration we
  // created
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  // compiler.plugin('compile', function() {
  //   console.log('Bundling...');
  //   bundleStart = Date.now();
  //  });

  //  compiler.plugin('compilation', (compilation) => {
  //     for (let filename in compilation.assets) {
  //       console.log(filename);
  //     }
  //  });

  // // Hack to try and avoid endless loop issue.
  // const timefix = 11000;
  // compiler.plugin('watch-run', (watching, callback) => {
  //   watching.startTime += timefix;
  //   callback()
  // });
  // compiler.plugin('done', (stats) => {
  //   stats.startTime -= timefix
  // })

  // // We also give notice when it is done compiling, including the
  // // time it took. Nice to have
  // compiler.plugin('done', function() {
  //   console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  // });

  var bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:3000/build -> http://localhost:8080/build
    publicPath: '/dist/',
    contentBase: path.join(__dirname, "../public"),
    // Configure hot replacement
    hot: false,
    inline: true,
    overlay: true,

    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    stats: "errors-only",
    clientLogLevel: "warning",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler
  .listen(30001, 'localhost', function () {})
  .on("error", () => {})
  ;

  // Surface a method that allows us to rerun the bundler on demand.
  this.run = function() {
    // compiler.run(function(err, stats) {});
    bundler.invalidate();
  };

  return this;

};