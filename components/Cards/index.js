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

function ArticleCard(inputHeadline, inputImg, inputAuthorName){
    const card = document.createElement('div'); 
    const headline = document.createElement('div'); 
    const author = document.createElement('div'); 
    const imgContainer = document.createElement('div'); 
    const img = document.createElement('img'); 
    const span = document.createElement('span'); 

    card.appendChild(headline); 
    card.appendChild(author); 
    author.appendChild(imgContainer); 
    imgContainer.appendChild(img); 
    author.appendChild(span); 

    card.classList.add('card'); 
    headline.classList.add('headline'); 
    author.classList.add('author'); 
    imgContainer.classList.add('img-container'); 
    
    headline.textContent = inputHeadline
    img.src = inputImg
    span.textContent = inputAuthorName;

    return card

}

axios.get('https://lambda-times-backend.herokuapp.com/articles') 
.then(response => { 
    //console.log('Cards: ', response.data.articles.bootstrap);

    for(i in response.data.articles){
        console.log(i);
        //console.log("responseArticles", response.data.articles[i])
        for(j in response.data.articles[i]){
            console.log("boot: ", response.data.articles[i][j]);
            let art = response.data.articles[i][j];
            console.log(art.headline);
            document.querySelector('.cards-container').appendChild(ArticleCard(art.headline, art.authorPhoto, art.authorName))

        }
    }
}).catch(err => { 
    console.log(err);
})







