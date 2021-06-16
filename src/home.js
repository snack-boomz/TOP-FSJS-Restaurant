import './style.css';
import mo from './big-mo.jpeg';

const home = () => {

    const restaurantHeader = () => {
        const element = document.createElement('div');
        const headerOne = document.createElement('h1')
        element.classList.add('restaurant-header');
        headerOne.textContent = "Big Mo's Brunch Bazaar";
        element.appendChild(headerOne);

        return element;
    }



    // Add the image to our existing div.
    
    const img = () => {
        const img = document.createElement('div');
        img.classList.add('big-mo-image')
        const bigMo = new Image();
        bigMo.src = mo;
        img.appendChild(bigMo);
        console.log(typeof element);
        
        return img;
    }

    
    const about = () => {
        const about = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        about.classList.add('about-header');
        headerTwo.textContent = "Who We Are";
        paragraphOne.innerHTML = "Mo started <strong>Big Mo's Brunch Bazaar</strong> in pursuit of his dream of serving felines the best quality brunch in Catville, while at the same time providing world-class customer service. Mo prides himself in giving only an exceptional customer experience to each and every cat that enters the bazaar. Come on and drop by!"
        about.appendChild(headerTwo);
        about.appendChild(paragraphOne);

        return about;
    }

    const location = () => {
        const location = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        const paragraphTwo = document.createElement('p');
        location.classList.add('location-header');
        headerTwo.textContent = "Location";
        paragraphOne.textContent = "111 Fur St.";
        paragraphTwo.textContent = "Catville, CA 22222"
    
        location.appendChild(headerTwo);
        location.appendChild(paragraphOne);
        location.appendChild(paragraphTwo);

        return location;
    }




    return [restaurantHeader(), img(), about(), location()]
};

export { home }