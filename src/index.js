import './style.css';
import mo from './big-mo.jpeg';
import { home } from './home';

// home module
const homePage = (() => {
    for (const [index, element] of home().entries()) {
        document.body.appendChild(home()[index]);
    } 
    

})();

 
  