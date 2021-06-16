import './style.css';
import mo from './big-mo.jpeg';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

// home module
const homePage = (() => {
    const content = document.getElementById('content')
    for (const [index, element] of home().entries()) {
        content.appendChild(home()[index]);
    } 
    

})();

 
  