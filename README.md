範例6: Sample6-Es2015(Dynamic import)
------------------------------------------
 System.import 載入所需要的 js
註: 該 import js 檔會被 webpack 自動轉換成編譯後的js
才會有此效果

但似乎語法以後被建議改用 es6 的  import or async import 而非繼續使用這個
可以看下面的 sample code

https://webpack.js.org/guides/code-splitting-import/




Index.js
-------------------------
const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
 
    System.import('./image_viewer').then(
        module => {
           console.log(module);
           module.default();
         }
    );
};

document.body.appendChild(button);
-------------------------


Image_viewer.js
---------------------------------------------------------------
import "../styles/image_viewer.css";
import small from "../assets/small.jpg";

export default () => {

const image2 = document.createElement('img');
image2.src = small ;
document.body.appendChild(image2);

  };

---------------------------------------------------------------

------------------------------------------
