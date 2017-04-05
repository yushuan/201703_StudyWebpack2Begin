
<pre>

範例2:
------------------------------------------
es2015 (es6) -> es5 語法
npm install --save-dev  babel-loader babel-core babel-preset-env 

新增

.babelrc 設定檔
{
 "presets": ["babel-preset-env"]
}


webpack.config.js 內
新增 babel-loader 處理 .js 檔

  module: {
     rules: [
	 {
	    use: 'babel-loader' ,
               test: /\.js$/		
	 }
    ]
  }
  
------------------------------------------

</pre>
