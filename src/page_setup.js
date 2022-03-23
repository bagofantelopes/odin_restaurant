import './style.css';
import homeTab from './home_tab.js';
import menuTab from './menu_tab.js';
import contactTab from './contact_tab.js';

const content = document.getElementById('content');
// function to generate header section
const header = () => {
    console.log('loading header');
    const element = document.createElement('div');
    element.innerText = 'Insert header bar here';

    return element;
};

const buttonCreation = () => {
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'buttonDiv');

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home');
    

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu');
    

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact');
    

    homeBtn.innerText = "Home";
    menuBtn.innerText = "Menu";
    contactBtn.innerText = "Contact Us";

    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(menuBtn);
    buttonDiv.appendChild(contactBtn);

    return buttonDiv;
}


export default function pageSetup() {
    console.log('Loading page...');
    content.appendChild(buttonCreation());
    content.appendChild(header());
    content.appendChild(homeTab());
    
    content.appendChild(menuTab());
    content.appendChild(contactTab());
};
