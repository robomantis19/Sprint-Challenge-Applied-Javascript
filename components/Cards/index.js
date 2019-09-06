// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Cards(input){
    const card = document.createElement('div'); 
    const headline = document.createElement('div');
    const author = document.createElement('div'); 
    const imgContainer = document.createElement('div'); 
    const img = document.createElement('img'); 
    
    author.textContent= `By ${input.authorName}`;
    card.classList.add('card'); 
    headline.classList.add('headline'); 
    author.classList.add('author'); 
    imgContainer.classList.add('img-container');

    const span = document.createElement('span'); 
    card.appendChild(headline); 
    card.appendChild(author);
    author.appendChild(imgContainer); 
    author.appendChild(span);
    imgContainer.appendChild(img); 

     

    headline.textContent = input.headline
    img.setAttribute('src',input.authorPhoto);
    
    const cardsCont = document.querySelector('.cards-container');
    
    cardsCont.appendChild(card);
    


}
const cardsCont = document.querySelector('cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
       console.log("articles", res);
        res.data.articles.bootstrap.map(item => {
            Cards(item); 
        });
        res.data.articles.javascript.map(item => {
            Cards(item); 
        });
        res.data.articles.jquery.map(item => {
            Cards(item); 
        });
        res.data.articles.node.map(item => {
            Cards(item); 
        });
        res.data.articles.technology.map(item => {
            Cards(item); 
        });
  })
  .catch(err => { 
      console.log("Error", err) 
  });