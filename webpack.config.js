var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// package.json 使用到的
// "dependencies": {
//   "faker": "^3.1.0",
//   "lodash": "^4.17.2",
//   "react": "^15.4.1",
//   "react-dom": "^15.4.1",
//   "react-input-range": "^0.9.2",
//   "react-redux": "^4.4.6",
//   "react-router": "^3.0.0",
//   "redux": "^3.6.0",
//   "redux-form": "^6.3.2",
//   "redux-thunk": "^2.1.0"
// },

const VENDOR_LIBS = [
    "faker",
     "lodash",
     "react",
     "react-dom",
     "react-input-range",
     "react-redux",
     "react-router",
     "redux",
     "redux-form",
     "redux-thunk"
];

module.exports = {
  //entry: './src/index.js',
  //  output: {
  //  path: path.join(__dirname, 'dist'),
  //  filename: 'bundle.js'
  //  },
  entry:{
     bundle: './src/index.js',   //打包成 bundle.js
     vendor: VENDOR_LIBS        // js Vendor 使用第三方lib的名稱 array 清單
            //可以去 package.json 裡面的 dependencies 裡面查
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
       test: /\.js$/,
       use: 'babel-loader',
       exclude: /node_modules/
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
    ]
  },
  plugins:[
     new webpack.optimize.CommonsChunkPlugin({
       name:['vendor','manifest']
     }),
     new HtmlWebpackPlugin({
        template: 'src/index.html'
     })
  ]
};
