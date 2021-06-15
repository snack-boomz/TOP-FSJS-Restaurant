import './style.css';
import mo from './big-mo.jpeg';

const home = () => {

    const element = document.createElement('div');
 
    element.classList.add('hello');
    element.textContent = "HELLO";


    // Add the image to our existing div.
    

    const img = document.createElement('div');
    const bigMo = new Image();
    bigMo.src = mo;
    img.appendChild(bigMo);
    console.log(typeof element);
    
    return [element, img]
};

export { home }