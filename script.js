let recipes = [
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "Veg",
      "isLiked": true,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken",
      "time": "45 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "Non-Veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "Veg",
      "isLiked": false,
      "rating": 4.9
  }
]

document.addEventListener("DOMContentLoaded", function () {
    displayRecipes(recipes);
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => handleSearch());
  });

function displayRecipes(recipes) {

    const restaurantsContainer = document.getElementById("recipeCards");
    
    restaurantsContainer.innerHTML = "";
  
    recipes.map(recipe => {
  
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        const imgElement = document.createElement("img");
        imgElement.src = recipe.imageSrc;

        const cardInfoDiv = document.createElement("div");
        cardInfoDiv.className = "card-info";

        const typeParagraph = document.createElement("p");
        typeParagraph.textContent = recipe.type;

        const foodNameDiv = document.createElement("div");
        foodNameDiv.className = "food-name";

        const foodNameHeading = document.createElement("h4");
        foodNameHeading.textContent = recipe.name;

        const ratingParagraph = document.createElement("p");
        ratingParagraph.className = "rating";
        ratingParagraph.innerHTML = `<img src="./assets/star.svg" alt="">${recipe.rating}`;

        foodNameDiv.appendChild(foodNameHeading);
        foodNameDiv.appendChild(ratingParagraph);

        const timeDiv = document.createElement("div");
        timeDiv.className = "time";

        const timeParagraph = document.createElement("p");
        timeParagraph.textContent = recipe.time;

        const actionsDiv = document.createElement("div");

        const likeImage = document.createElement("img");
        if(recipe.isLiked===true){
            likeImage.src = "./assets/likeed.svg";
        }
        else{
            likeImage.src = "./assets/like.svg";
        }
        
        likeImage.setAttribute('data-dish',`${recipe.name}`);
        likeImage.addEventListener("click", (event) => toggleLike(event));

        const commentsImage = document.createElement("img");
        commentsImage.src = "./assets/comments.svg";

        actionsDiv.appendChild(likeImage);
        actionsDiv.appendChild(commentsImage);

        timeDiv.appendChild(timeParagraph);
        timeDiv.appendChild(actionsDiv);

        cardInfoDiv.appendChild(imgElement);
        cardInfoDiv.appendChild(typeParagraph);
        cardInfoDiv.appendChild(foodNameDiv);
        cardInfoDiv.appendChild(timeDiv);

        cardDiv.appendChild(cardInfoDiv);

        restaurantsContainer.appendChild(cardDiv);
});
  }
  


  function handleSearch() {
    // Get the search query from the input
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();

    // Filter recipes based on the search query
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery)
    );

    // Display the filtered recipes
    displayRecipes(filteredRecipes);
}

  function toggleLike(e) {
    const dish = e.target.getAttribute('data-dish');
    const index = recipes.findIndex((recipe) => recipe.name === dish);
    // console.log(recipes[index])
    if(recipes[index].isLiked===true){
        recipes[index].isLiked=false;
        e.target.src = "./assets/like.svg";
    }
    else{
        recipes[index].isLiked=true;
        e.target.src = "./assets/likeed.svg";
    }
  }


  function filterRecipes(filter) {
    let filteredRecipes = [];
    switch (filter) {
      case "all":
        filteredRecipes = recipes;
        break;
      case "veg":
        filteredRecipes = recipes.filter((recipe) => recipe.type === "Veg");
        console.log(filteredRecipes)
        break;
      case "non-veg":
        filteredRecipes = recipes.filter((recipe) => recipe.type === "Non-Veg");
        break;
      default:
        filteredRecipes = recipes;
    }
        
    // Rating Filter
    const aboveCheckbox = document.getElementById("aboveCheckbox");
    const belowCheckbox = document.getElementById("belowCheckbox");

    if (aboveCheckbox.checked) {
        filteredRecipes = filteredRecipes.filter((recipe) => recipe.rating > 4.0);
    }

    if (belowCheckbox.checked) {
        filteredRecipes = filteredRecipes.filter((recipe) => recipe.rating < 4.0);
    }

    displayRecipes(filteredRecipes);
  }


  