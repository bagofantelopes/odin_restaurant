import Spices from './resources/images/spices.jpg';

const welcomeBanner = () => {
    const element = document.createElement('div');
    const text = document.createElement('h2');
    
    text.innerText = 'A Totally Ordinary Human Restaurant*'
    element.appendChild(text);

    return element;
}




export default function homeTab() {
    const element = document.createElement('div');
    element.setAttribute('id', 'home_tab');
    element.setAttribute('class', 'tab');

    element.appendChild(welcomeBanner());
    const image = document.createElement('img');
    image.src = Spices;

    element.appendChild(image);
    return element;
}