export default function contactTab() {
    const element = document.createElement('div');
    element.setAttribute('id', 'contact_tab');
    element.setAttribute('class', 'tab');
    const text = document.createElement('p');
    text.innerText = 'insert contact tab content here';
    element.appendChild(text);
    element.style.display = 'none';

    return element;
}