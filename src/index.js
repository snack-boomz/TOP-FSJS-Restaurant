import './style.css';
import './all.css';
import mo from './big-mo.jpeg';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

//import fontawesome icons locally, followed https://www.pullrequest.com/blog/webpack-fontawesome-guide/
/*import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

library.add(faCheck);
dom.watch();*/

// home module
const homePage = (() => {
    const content = document.getElementById('content')
    const nav = document.createElement('nav');
    const navElement1 = document.createElement('li');
    const navElement2 = document.createElement('li');
    const navElement3 = document.createElement('li');

    nav.classList.add('nav-header');
    navElement1.classList.add('nav-home');
    navElement2.classList.add('nav-menu');
    navElement3.classList.add('nav-contact');


    navElement1.innerHTML = "<i class='fas fa-paw'></i> Home";
    navElement2.innerHTML = "Menu<i class='fas fa-paw'></i>";
    navElement3.innerHTML = "<i class='fas fa-paw'></i>Contact";

    navElement1.addEventListener('click', () => {
        const elements = document.querySelectorAll("#content > div");
        elements.forEach((element) => {
            content.removeChild(element)
        });

        for (const [index, element] of home().entries()) {
            content.appendChild(home()[index]);
        } 

    });

    navElement2.addEventListener('click', () => {
        const elements = document.querySelectorAll("#content > div");
        elements.forEach((element) => {
            content.removeChild(element)
        });
        for (const [index, element] of menu().entries()) {
            content.appendChild(menu()[index]);
        } 

    });

    navElement3.addEventListener('click', () => {
        const elements = document.querySelectorAll("#content > div");
        elements.forEach((element) => {
            content.removeChild(element)
        });
        for (const [index, element] of contact().entries()) {
            content.appendChild(contact()[index]);
        } 

    });

    content.appendChild(nav);

    nav.appendChild(navElement1);
    nav.appendChild(navElement2);
    nav.appendChild(navElement3);


    for (const [index, element] of home().entries()) {
        content.appendChild(home()[index]);
    } 
    

})();

 
  