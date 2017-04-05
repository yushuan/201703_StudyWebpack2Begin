範例4: loader - css 處理1(輸出到css外部檔)
------------------------------------------
接續 上個資料
npm install --save-dev extract-text-webpack-plugin 
或指定版本
npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4 

在 webpack.config.js 的開頭內
加入
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
然後 設定 改用 loader 並新增 plugin 設定 指定 要把 import 的 css 都輸出到 style.css 這個檔案內


const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  ….
   module: {
     rules: 
	 [
	    {
		loader:  ExtractTextPlugin.extract({
		         loader: 'css-loader'
		}),
                     test: /\.css$/		 
	   }
     ],
   },
 plugins: [
           new ExtractTextPlugin('style.css')
  ]

 };

module.exports = config;


然後 html 改成用

<head>
 <link rel="stylesheet" href="build/style.css">
</head>
<body>
  <p> hello</p>
  <script src="build/bundle.js"></script>
</body>


結果
build\style.css 
內容
img {
	border: 10px solid black;
}p {
	border: 10px solid black;
}


------------------------------------------