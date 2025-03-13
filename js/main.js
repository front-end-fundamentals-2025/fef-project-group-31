// Shopping cart: fetching from json, localstorage and functions used in cart adapted from Digital Fox video https://www.youtube.com/watch?v=pRkHOD_nkH4&t=408s

//Fetching json objects:
    fetch("products.json")
    .then(function(response){
  return response.json();
    })
    .then(function(data){
  localStorage.setItem("products", JSON.stringify(data));
  if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
  }
    });
  
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

// Function to update the cart count in header adapted from Lun Dev https://www.youtube.com/watch?v=gXWohFYrI0M&t=758s and ChatGPT 
function updateCartCount() {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 
    let totalQuantity = 0;
  
    // Loop through the cart to calculate the total quantity of items
    cart.forEach(function(product) {
      totalQuantity += product.quantity; // Add the quantity of each product
    });
  
    // Find the cart count element and update its text content
    let iconCartSpan = document.querySelector('.cart-count');

    if (iconCartSpan) {
      iconCartSpan.innerText = totalQuantity; // Displaying
    }
  }
//Update header item amount when page is loaded 
  document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
  });

//Function for adding products to cart 
  function addItemToCart(productId){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = products.find(function(product){
return product.id == productId;
    });
    if (product) {
        // Ensure product not already in cart
        let productInCart = cart.find(function(item) {
            return item.id == productId;
        });
        if (productInCart) {
            // Increase quantity if product already in cart
            productInCart.quantity += 1; 
            localStorage.setItem("cart", JSON.stringify(cart)); 
        } else {
            // If product is not in cart, add it with quantity 1
            product.quantity = 1;
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        console.log('Product added to cart:', product); // Log the added product, debugging
        console.log('Current cart:', cart); 

        updateCartCount(); //show amount in header immediately once addtocart happens
  }

 function getTotal(){
    let temp = cart.map(function(item){
        return parseFloat(item.price);
    });

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    console.log(sum);
 }
  }

//For the product buttons: 
let addToCartButtons = document.querySelectorAll('.add-cart-button');
//Once DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    let addCartButtons = document.querySelectorAll('.add-cart-button');
    
    addCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert("Added to cart!");
            let productId = button.getAttribute('data-product-id');
            addItemToCart(productId);
        });
    });
});

//localStorage.clear();     //debugging

//Search Bar functionality: 
const inputElement = document.getElementById("search");

inputElement.addEventListener('keydown', function(event) {
    let enteredProduct = inputElement.value.toLowerCase(); // case-insensitive

    if (event.key === 'Enter') {
        if (enteredProduct === "foundation") {
            window.location.href = "foundation.html"; // ChatGPT on how to change page
        } if (enteredProduct === "blush") {
            window.location.href = "blush.html";
        } if (enteredProduct === "primer") {
            window.location.href = "primer.html";
        } if (enteredProduct === "makeup") {
            window.location.href = "makeup.html";
        } if (enteredProduct === "skincare.html") {
            window.location.href = "skincare.html";
        }
    }
});
