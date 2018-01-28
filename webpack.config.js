const NODE_ENV = process.env.NODE_ENV;
const webpackConfig = require('./build/webpack.dev');
const webpackProd = require('./build/webpack.prod');

if (NODE_ENV === 'production'){
  return;
} else {
  return webpackConfig;
}
