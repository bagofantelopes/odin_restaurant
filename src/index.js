import page_setup from './page_setup.js';

// execute on page load:
// call page_setup.js to load HTML
page_setup();

// event listeners for the buttons to switch tabs
const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', (e) => {
    tabEvent(e.target.id);
});

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', (e) => {
    tabEvent(e.target.id);
});

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', (e) => {
    tabEvent(e.target.id);
});


// event handler to switch tabs as the corresponding buttons are clicked
const tabEvent = (tab) => {
    const x = document.getElementsByClassName('tab');
    for(let i=0; i < x.length; i++){
        x[i].style.display = 'none';
    }

    // get the specific id of the div to load by appending '_tag' to the id of the button
    // seems sloppy but I mean it works great as long as you follow the naming convention?
    // Probably a case of overthinking and missing the extremely obvious
    let str = tab + '_tab';
    document.getElementById(str).style.display = 'flex';
}