import './style.css';
import './all.css';

const contact = () => {

    const contactHeader = () => {
        const element = document.createElement('div');
        const headerOne = document.createElement('h1')
        element.classList.add('contact-header');
        headerOne.textContent = "Questions or Feedback?";
        element.appendChild(headerOne);

        return element;
    }

    // Add the image to our existing div.
        
    const item1 = () => {
        const item1 = document.createElement('div');
        const headerTwo = document.createElement('h2');
        const paragraphOne = document.createElement('p');
        const paragraphTwo = document.createElement('p');
        item1.classList.add('item-header');
        headerTwo.textContent = "Please feel free to reach out to us via phone number or email below:";
        paragraphOne.innerHTML = "<i class='fas fa-phone-alt'></i> 555-555-5555";
        paragraphTwo.innerHTML = "<i class='fas fa-envelope-open-text'></i> mo@bigmobrunchbazaar.com";
 
        item1.appendChild(headerTwo);
        item1.appendChild(paragraphOne);
        item1.appendChild(paragraphTwo);

        return item1;
    }


    return [contactHeader(), item1()];
};

export { contact }