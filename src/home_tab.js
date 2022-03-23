import Spices from './resources/images/spices.jpg';

export default function homeTab() {
    const element = document.createElement('div');
    element.setAttribute('id', 'home_tab');
    element.setAttribute('class', 'tab');
    const text = document.createElement('p');
    text.innerText = 'insert home tab content here';
    element.appendChild(text);
    const image = document.createElement('img');
    image.src = Spices;

    element.appendChild(image);
    return element;
}