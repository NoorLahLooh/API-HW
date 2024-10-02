

async function getpizza() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`) ; 
    const data = await response.json () ; 
    const recipes = data.recipes ; 
    const count = data.count ; 
    document.querySelector(".count").textContent=count ; 
   const result = recipes.map(function(ele){
    return ` <div class="pizza">
        <h2>${ele.title}</h2>
        <img src="${ele.image_url}" alt="">
    </div> 
`;
   }).join('') ;
   document.querySelector(".pizza .row").innerHTML = result ;
   
}

getpizza() ;   
