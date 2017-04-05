
<pre>

範例3: loader - css 處理1(css透過js載入後注入到head裡)
------------------------------------------
在 index.js  

import './view_image'   表示只是執行該 js 腳本, 但結果不用輸出到特定變數
 該腳本會執行 dom 的修改 插入 image


要多使用兩個 loader

css-loader 讓 webpack 可以 import 讀入 .css
style-load 讓 import 進來的 css 資料可以 添加插入到 html 文件裡

指令
npm install --save-dev style-loader css-loader


webpack.config.js 內
新增 babel-loader 處理 .js 檔

  module: {
     rules: [
	 {
	 use: ['style-loader','css-loader'] ,
	 test: /\.css$/		
	 }
    ]
  }

 --順序   <----- 執行  會先使用 css-loader 處理 css, 然後 style-loader 接手處理
styles\image_viewer.css
img {
	border: 10px solid black;
}

src\image_viewer.js
內容 
import "../styles/image_viewer.css"     

const image = document.createElement('img');
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);
----
 在打包的任一個 js 中, import image_viewer.css
 就會將 css 也打入 js 包中
 然後透過 style-loader 將 css 資料插入到 head  中
----


src\index.js
import './image_viewer';


效果:

原來的 html
<head>
</head>
<body>
  <p> hello</p>
  <script src="build/bundle.js"></script>
</body>



<html>
<head>
<style type="text/css">img {
	border: 10px solid black;
}</style>
</head>
<body>
  <p> hello</p>
  <script src="build/bundle.js"></script>
<img src="http://lorempixel.com/400/400">
</body>
</html>


思考1:
  載入這包的 html 就會自動在 head 上被加入 css 資料
  但是這樣會增加 bundle.js 打包後的大小
  
  照理說應該還是有方法 可以將資料 另外整包打包成 .css
  而不是直接打包放在 bundle  內
看下個頁籤

  
------------------------------------------

</pre>
