// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res =>  {
    //console.log(res.data.topics);
    res.data.topics.forEach(i => { 
        //console.log("i, ", i); 
    

        const div = document.createElement('div');
        div.classList.add('tab'); 
        div.textContent = i
        document.querySelector('.topics').appendChild(div);
    })
})
.catch(error => { 
    console.log(error); 
})

