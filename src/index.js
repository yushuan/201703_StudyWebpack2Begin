//import sum from './sum';
//import './image_viewer';
//import '../styles/test.css';
//console.log( sum(1,3) );
//

const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
   //   alert('hello');
    System.import('./image_viewer').then(
        module => {
      //     alert('hello');
           console.log(module);
           module.default();
         }
    );
};

document.body.appendChild(button);
