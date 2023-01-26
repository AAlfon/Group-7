const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});





//  1338dc42c490464081ce69c476990c97
//  https://api.spoonacular.com
//  /recipes/search
//  &number=1&query=
//  Authorization :  ?apiKey=

//    https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=1&query=soup








const baseURL = "https://api.spoonacular.com/";
const search = "recipes/search";
const query = "&number=1&query=";

const requestURL = baseURL + search + query;

const ACCESS_KEY = "1338dc42c490464081ce69c476990c97";
const clientID = `?apiKey= ${ACCESS_KEY}`;


const wholeRl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=";


const baseUri = "https://spoonacular.com/recipeImages/"

const output = document.querySelector('#output');

const titleOutput = document.querySelector("#searchTitle")




const searchInput = () => {

    const searchItem = document.querySelector('#recipesearch');

    const finalUrl = wholeRl + searchItem.value;

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            searchItem.value = "";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
                const recipeContainer = document.createElement('div');
                const title = document.createElement('h3');

                title.textContent = recipe.title;

                const image = document.createElement('img');
                image.src = baseUri + recipe.image;

                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"

                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
              
                output.append(recipeContainer);
            }

        })
        .catch(err => {
            console.log(err);
        })

}

//////////////////////////////////////////////////
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener(
    'click', (e) => {
        e.preventDefault();
        searchInput();


    })







const soupSample = () => {
    const finalUrl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=soup";

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            //  searchItem.value="";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
       
                const recipeContainer = document.createElement('div');
                // Create a title element and set its text content to the recipe title
                const title = document.createElement('h3');
                title.textContent = recipe.title;
                // Create an image element and set its source to the recipe image
                const image = document.createElement('img');
                image.src = baseUri + recipe.image;
                // image.style.gridRow='2' 
                // Create a link element and set its href to the recipe source URL
                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"
                // link.style.gridRow = '4'
                // Append the title, image, and link to the recipe container
                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
                // Append the recipe container to the output element
                output.append(recipeContainer);
            }



        })
        .catch(err => {
            console.log(err);
        })
}

const soupBtn = document.querySelector('#soupRecipe');

soupBtn.addEventListener(
    'click', () => {
        soupSample();

    })




const friedSample = () => {
    const finalUrl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=fried";

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            //  searchItem.value="";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
                // Create a container for each recipe
                const recipeContainer = document.createElement('div');
                // Create a title element and set its text content to the recipe title
                const title = document.createElement('h3');
                title.textContent = recipe.title;
                // Create an image element and set its source to the recipe image
                const image = document.createElement('img');
                image.src = baseUri + recipe.image;
                // image.style.gridRow='2' 
                // Create a link element and set its href to the recipe source URL
                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"
                // link.style.gridRow = '4'
                // Append the title, image, and link to the recipe container
                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
                // Append the recipe container to the output element
                output.append(recipeContainer);
            }



        })
        .catch(err => {
            console.log(err);
        })
}

const friedBtn = document.querySelector('#friedRecipe');

friedBtn.addEventListener(
    'click', () => {
        friedSample();

    })


const veganSample = () => {
    const finalUrl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=vegan";;

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            //  searchItem.value="";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
                // Create a container for each recipe
                const recipeContainer = document.createElement('div');
                // Create a title element and set its text content to the recipe title
                const title = document.createElement('h3');
                title.textContent = recipe.title;
                // Create an image element and set its source to the recipe image
                const image = document.createElement('img');
                image.src = baseUri + recipe.image;
                // image.style.gridRow='2' 
                // Create a link element and set its href to the recipe source URL
                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"
                // link.style.gridRow = '4'
                // Append the title, image, and link to the recipe container
                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
                // Append the recipe container to the output element
                output.append(recipeContainer);
            }



        })
        .catch(err => {
            console.log(err);
        })
}

const veganBtn = document.querySelector('#veganRecipe');

veganBtn.addEventListener(
    'click', () => {
        veganSample();

    })


const pastaSample = () => {
    const finalUrl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=pasta";;

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            //  searchItem.value="";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
                // Create a container for each recipe
                const recipeContainer = document.createElement('div');
                // Create a title element and set its text content to the recipe title
                const title = document.createElement('h3');
                title.textContent = recipe.title;
                // Create an image element and set its source to the recipe image
                const image = document.createElement('img');
                image.src = baseUri + recipe.image;
                // image.style.gridRow='2' 
                // Create a link element and set its href to the recipe source URL
                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"
                // link.style.gridRow = '4'
                // Append the title, image, and link to the recipe container
                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
                // Append the recipe container to the output element
                output.append(recipeContainer);
            }



        })
        .catch(err => {
            console.log(err);
        })
}

const pastaBtn = document.querySelector('#pastaRecipe');

pastaBtn.addEventListener(
    'click', () => {
        pastaSample();

    })




const steakSample = () => {
    const finalUrl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=steak";;

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            //  searchItem.value="";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
                // Create a container for each recipe
                const recipeContainer = document.createElement('div');
                // Create a title element and set its text content to the recipe title
                const title = document.createElement('h3');
                title.textContent = recipe.title;
                // Create an image element and set its source to the recipe image
                const image = document.createElement('img');
                image.src = baseUri + recipe.image;
                // image.style.gridRow='2' 
                // Create a link element and set its href to the recipe source URL
                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"
                // link.style.gridRow = '4'
                // Append the title, image, and link to the recipe container
                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
                // Append the recipe container to the output element
                output.append(recipeContainer);
            }



        })
        .catch(err => {
            console.log(err);
        })
}

const steakBtn = document.querySelector('#steakRecipe');

steakBtn.addEventListener(
    'click', () => {
        steakSample();

    })
 



const dessertSample = () => {
    const finalUrl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=9&query=dessert";;

    // fetch ( requestURL, requestOptions )
    fetch(finalUrl)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            //  searchItem.value="";
            //  titleOutput.innerText="" 


            for (let i = 0; i < result.results.length; i++) {
                const recipe = result.results[i];
                // Create a container for each recipe
                const recipeContainer = document.createElement('div');
                // Create a title element and set its text content to the recipe title
                const title = document.createElement('h3');
                title.textContent = recipe.title;
                // Create an image element and set its source to the recipe image
                const image = document.createElement('img');
                image.src = baseUri + recipe.image;
                // image.style.gridRow='2' 
                // Create a link element and set its href to the recipe source URL
                const link = document.createElement('a');
                link.href = recipe.sourceUrl;
                link.textContent = "View Recipe"
                // link.style.gridRow = '4'
                // Append the title, image, and link to the recipe container
                recipeContainer.append(title);
                recipeContainer.append(image);
                recipeContainer.append(link);
                // Append the recipe container to the output element
                output.append(recipeContainer);
            }



        })
        .catch(err => {
            console.log(err);
        })
}

const dessertBtn = document.querySelector('#dessertRecipe');

dessertBtn.addEventListener(
    'click', () => {
        dessertSample();

    })


