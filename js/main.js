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

  //Function for changing number of products 
  function updateQuantity(productId, quantity){
    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}
//Function for adding products to cart 
  function addItemToCart(productId){
    let product = products.find(function(product){
return product.id == productId;
    });
    if (product) {
        // Ensure product not already in cart
        let productInCart = cart.find(function(item) {
            return item.id == productId;
        });
        if (productInCart) {
            updateQuantity(productId, productInCart.quantity + 1);
        } else {
            // If the product is not in the cart, add it with quantity 1
            product.quantity = 1;
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        console.log('Product added to cart:', product); // Log the added product
        console.log('Current cart:', cart); 
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
// Loop through each button and add an event listener
document.addEventListener('DOMContentLoaded', function() {
    let addCartButtons = document.querySelectorAll('.add-cart-button');
    
    addCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log("clicked");
            let productId = button.getAttribute('data-product-id');
            addItemToCart(productId);
        });
    });
});

//localStorage.clear();     //debugging