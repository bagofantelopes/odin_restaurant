export default function menuTab() {
    const element = document.createElement('div');
    element.setAttribute('id', 'menu_tab');
    element.setAttribute('class', 'tab');
    const text = document.createElement('p');
    text.innerText = 'insert menu tab content here';
    element.appendChild(text);
    element.style.display = 'none';
    
    return element;
}