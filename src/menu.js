import './style.css';
import './all.css';
import mo from './big-mo.jpeg';

const menu = () => {

    const menuHeader = () => {
        const element = document.createElement('div');
        const headerOne = document.createElement('h1')
        element.classList.add('menu-header');
        headerOne.textContent = "Menu";
        element.appendChild(headerOne);

        return element;
    }

    // Add the image to our existing div.
        
    const item1 = () => {
        const item1 = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        item1.classList.add('item-header');
        headerTwo.textContent = "The Seafood Special";
        paragraphOne.innerHTML = "shrimp, salmon, spinach, rice"
        item1.appendChild(headerTwo);
        item1.appendChild(paragraphOne);

        return item1;
    }

    const item2 = () => {
        const item2 = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        item2.classList.add('item-header');
        headerTwo.textContent = "The Maui Breakfast";
        paragraphOne.innerHTML = "eggs, blueberries, catnip, watermelon, chicken"
        item2.appendChild(headerTwo);
        item2.appendChild(paragraphOne);

        return item2;
    }

    const item3 = () => {
        const item3 = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        item3.classList.add('item-header');
        headerTwo.textContent = "The Paw Paw";
        paragraphOne.innerHTML = "chicken, carrots, broccoli, rice"
        item3.appendChild(headerTwo);
        item3.appendChild(paragraphOne);

        return item3;
    }

    const item4 = () => {
        const item4 = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        item4.classList.add('item-header');
        headerTwo.textContent = "Kitty Whisper Dinner";
        paragraphOne.innerHTML = "salmon, broccoli, chicken broth, pumpkin, cantaloupe"
        item4.appendChild(headerTwo);
        item4.appendChild(paragraphOne);

        return item4;
    }

    const item5 = () => {
        const item5 = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        item5.classList.add('item-header');
        headerTwo.textContent = "Big Mo Veggie Platter";
        paragraphOne.innerHTML = "broccoli, peas, rice, spinach, pumpkin, chicken"
        item5.appendChild(headerTwo);
        item5.appendChild(paragraphOne);

        return item5;
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




    return [menuHeader(), item1(), item2(), item3(), item4(), item5()]
};

export { menu }