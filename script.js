const recipes = [
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "Veg",
      "isLiked": false,
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
  });

function displayRecipes(recipes) {
    // const recipeCardsContainer = document.getElementById("recipeCards");
    const restaurantsContainer = document.getElementById("recipeCards");
    
    // recipeCardsContainer.innerHTML = "";
  
    recipes.map(recipe => {
  // Create a new div element with the class "card"
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  // Create an image element with the specified source and alt text
  const imgElement = document.createElement("img");
  imgElement.src = recipe.imageSrc;

  // Create a div element with the class "card-info"
  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.className = "card-info";

  // Create a paragraph element with the restaurant type
  const typeParagraph = document.createElement("p");
  typeParagraph.textContent = recipe.type;

  // Create a div element with the class "food-name"
  const foodNameDiv = document.createElement("div");
  foodNameDiv.className = "food-name";

  // Create an h4 element with the restaurant name
  const foodNameHeading = document.createElement("h4");
  foodNameHeading.textContent = recipe.name;

  // Create a paragraph element with the class "rating" and the restaurant rating
  const ratingParagraph = document.createElement("p");
  ratingParagraph.className = "rating";
  ratingParagraph.innerHTML = `<img src="./assets/Frame 28.svg" alt="">${recipe.rating}`;

  // Append the heading and rating paragraph to the foodNameDiv
  foodNameDiv.appendChild(foodNameHeading);
  foodNameDiv.appendChild(ratingParagraph);

  // Create a div element with the class "time"
  const timeDiv = document.createElement("div");
  timeDiv.className = "time";

  // Create a paragraph element with the restaurant preparation time
  const timeParagraph = document.createElement("p");
  timeParagraph.textContent = recipe.time;

  // Create a div element for like and comments images
  const actionsDiv = document.createElement("div");

  // Create two image elements with the sources "./assets/like.svg" and "./assets/comments.svg", and alt text ""
  const likeImage = document.createElement("img");
  likeImage.src = "./assets/like.svg";
  likeImage.alt = "";

  const commentsImage = document.createElement("img");
  commentsImage.src = "./assets/comments.svg";
  commentsImage.alt = "";

  // Append the like and comments images to the actionsDiv
  actionsDiv.appendChild(likeImage);
  actionsDiv.appendChild(commentsImage);

  // Append the timeParagraph and actionsDiv to the timeDiv
  timeDiv.appendChild(timeParagraph);
  timeDiv.appendChild(actionsDiv);

  // Append the imgElement, typeParagraph, foodNameDiv, and timeDiv to the cardInfoDiv
  cardInfoDiv.appendChild(imgElement);
  cardInfoDiv.appendChild(typeParagraph);
  cardInfoDiv.appendChild(foodNameDiv);
  cardInfoDiv.appendChild(timeDiv);

  // Append the cardInfoDiv to the cardDiv
  cardDiv.appendChild(cardInfoDiv);

  // Append the cardDiv to the restaurantsContainer
  restaurantsContainer.appendChild(cardDiv);
});
  }
  