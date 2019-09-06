// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const LambdaTimes = document.createElement('h1');
    const temperature = document.createElement('span');
    
    header.classList.add('header');
    date.classList.add('data'); 
    temperature.classList.add('temp'); 

    date.textContent ='SMARCH 28, 2019'; 
    LambdaTimes.textContent ='98°';

    header.appendChild(date); 
    header.appendChild(LambdaTimes); 
    header.appendChild(temperature);   
    return header; 
}

Header = Header();
const mainHeader = document.querySelector('.header-container');

mainHeader.appendChild(Header);