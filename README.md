
<pre>

範例5: loader-本地圖片是否打包或轉換成本地URL物件
------------------------------------------
可以設定 較小的圖檔 就先 打包到 bundle.js 內
沒設定 options 的話則預設都會打包到 bundles 內
然後 檔案太大的 則會預設 亂碼.jpg 放到 build 目錄內
所以 bundle.js 內大的圖檔為 url( 'xxxxxxx.jpg); 這種格式
url( './build/xxxxxxx.jpg);
但這種處理 不一定是我們想要的設定, 所以還要上網查一下
插件的使用參數設定


image-webpack-loader 判讀本地圖形檔 
url-loader 判斷圖形大小, 檔案在設定的大小內,就直接讀 bundle
如果檔案太大就使用 url 方式載入

註: url-loader 需要先安裝 file-loader 才能運作 (當檔案超過大小時)

npm install --save-dev file-loader
npm install --save-dev image-webpack-loader url-loader

在 webpack.config.js 內加入設定
image-webpack-loader 載入圖檔
 url-loader 處理圖檔產生 url

然後在 output 內增加 publicPath 路徑設定


  output: {
	  path: path.resolve( __dirname, 'build' ),
	  filename: 'bundle.js'
	 publicPath:'build/'
  },

所以 bundle.js 內大的圖檔為 url( 'xxxxxxx.jpg); 這種格式

加上 publicPath 參數後才會變成 url( './build/xxxxxxx.jpg);




  module: {
     rules: 
	 [
 …..

   {
	 test: /\.(jpe?g|png|gif|svg)$/,
	 use: [
	   	    {
	         loader: 'url-loader',
	         options: { limit: 40000 } //40k
             },
	 	'image-webpack-loader?bypassOnDebug'
	 ]
   }
 

------------------------------------------

</pre>
