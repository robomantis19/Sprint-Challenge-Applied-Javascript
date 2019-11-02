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
    const header = document.createElement('header'); 
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    header.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    header.appendChild(span);
    header.appendChild(h1);
    header.appendChild(span2);

    span.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    span.textContent = '98degrees'; 

    return header

}
const theHeader = Header();
document.querySelector('.header-container').appendChild(theHeader);











