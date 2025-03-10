/*Same logic as main.js*/ 
// localstorage and functions adapted from Digital Fox https://www.youtube.com/watch?v=pRkHOD_nkH4&t=408s

//Fetching json objects:
fetch("products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Set products in localStorage
    localStorage.setItem("products", JSON.stringify(data));
    
    // Initialize "liked" if it doesn't exist already
    if (!localStorage.getItem("liked")) {
      localStorage.setItem("liked", "[]"); // Initialize with an empty array
    }
  });

let liked = JSON.parse(localStorage.getItem("liked"));

//Function for changing number of products 
function updateQuantity(productId, quantity){
for(let product of liked){
    if(product.id == productId){
        product.quantity = quantity;
    }
}
localStorage.setItem("liked", JSON.stringify(liked));
}

//Function for adding products to liked 
function addItemToLiked(productId){
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let liked = JSON.parse(localStorage.getItem("liked")) || [];

let product = products.find(function(product){
return product.id == productId;
});
if (product) {
    // Ensure product not already in favourites
    let productInLiked = liked.find(function(item) {
        return item.id == productId;
    });
    if (!productInLiked) {
        liked.push(product);
        localStorage.setItem("liked", JSON.stringify(liked));
    }
    console.log('Product added to favourites:', product); // Log the added product
    console.log('Current favourites:', liked); 
}
}

//For the product buttons: 
let addToLikedButtons = document.querySelectorAll('.add-fav-button');
//Once DOM loaded
document.addEventListener('DOMContentLoaded', function() {
addToLikedButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert("Added to favourites!");
        let productId = button.getAttribute('data-product-id');
        addItemToLiked(productId);
    });
});
});

