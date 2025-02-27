/*let listProductHTML = document.querySelector('.listProduct');
let listProductCart = document.querySelector('cart-items');
let products = [];
let cart = [];




const initApp = () => {
    fetch('products.json') 
    .then(response => response.json())
    .then(data => {
        listProducts = data; 
        console.log(listProducts);

        addDataToHTML();
    })
}
initApp();*/








/*const buttons = document.querySelectorAll(".add-cart-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        // Hämta den specifika produkten
        const item = itemElements[i]; // Hämta motsvarande produkt
        const productName = item.querySelector("figcaption").textContent; // Namn på produkten
        const productPrice = item.querySelector(".price").textContent; // Pris på produkten

        // Skapa ett produktobjekt
        const product = {
            name: productName,
            price: productPrice
        };

        // Hämta den nuvarande kundvagnen från localStorage eller skapa en ny om den inte finns
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Lägg till den nya produkten i kundvagnen
        cart.push(product);

        // Spara tillbaka kundvagnen i localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Visa kundvagnen i konsolen för att bekräfta
        console.log(cart);
    });
} */


   /* const cart = document.querySelector(".cart");
    const cartContent = document.querySelector(".cart-content");

    const addToCart = productBox => {
        const productImgSrc = productBox.querySelector("img").src;
        const productTitle = productBox.querySelector(".product-title").textContent;
        const productPrice = productBox.querySelector(".price").textContent;
    
        // Create a cart item object
        const cartItem = {
            productImgSrc,
            productTitle,
            productPrice
        };
    
        // Retrieve existing cart items from localStorage (or initialize an empty array)
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
        // Add the new item to the cart
        cartItems.push(cartItem);
    
        // Save the updated cart back to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
        // Now update the cart on the page (you can update cart content here)
        updateCartPage();
    };
    
    const updateCartPage = () => {
        const cartContent = document.querySelector(".cart-content");
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
        cartContent.innerHTML = ""; // Clear the cart before updating
    
        cartItems.forEach(item => {
            const cartBox = document.createElement("div");
            cartBox.classList.add("cart-box");
            cartBox.innerHTML = `
                <img src="${item.productImgSrc}" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${item.productTitle}</h2>
                    <span class="cart-price">${item.productPrice}</span>
                    <div class="cart-quantity">
                        <button class="fewer">-</button>
                        <button class="more">+</button>
                    </div>
                </div>
            `;
            cartContent.appendChild(cartBox);
        });
    
        // Update the total price on the cart page
        updateTotalPrice();
    };
    
    const updateTotalPrice = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const totalPrice = cartItems.reduce((total, item) => {
            const price = parseFloat(item.productPrice.replace('SEK', '').trim());
            return total + price;
        }, 0);
    
        document.getElementById("cart-total-price").textContent = `${totalPrice.toFixed(2)} SEK`;
    };
    
    // Call updateCartPage to display cart items when the page loads
    updateCartPage();*/
    
    // product.js

// Function to handle adding product to cart




//Senaste från chatgpt
/*function addToCart(product) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];  // Get existing cart or create a new one
    
    // Check if the product is already in the cart
    let productIndex = cart.findIndex(item => item.title === product.title);
  
    if (productIndex > -1) {
      // If it exists, update the quantity
      cart[productIndex].quantity += 1;
    } else {
      // If it's new, add to cart with quantity 1
      cart.push({...product, quantity: 1});
    }
    
    sessionStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to sessionStorage
 
    console.log("Cart after adding product:", cart);

}
  
  // Event listener for 'Add to Cart' buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-cart-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const productBox = e.target.closest('.product-box');
        const title = productBox.querySelector('.product-title').textContent;
        const price = productBox.querySelector('.price').textContent;
        const imgSrc = productBox.querySelector('img').src;
  
        // Creating product object
        const product = {
          title: title,
          price: price,
          imgSrc: imgSrc
        };
  
        // Call the function to add product to cart
        addToCart(product);
      });
    });
  });

  console.log("Script loaded!");


  const cartButtons = document.querySelectorAll('.add-cart-button');

  // Iterate through each button and add an event listener
  cartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Show a message when a button is clicked
          alert('Added to cart');
      });
  });*/ 

 
 
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

  /*let products = JSON.parse(localStorage.getItem("products"));
  let cart = JSON.parse(localStorage.getItem("cart"));

  function addItemToCart(productId){
    let product = products.find(function(product){
return product.id == productId;
    });

    if(cart.length == 0) {
        cart.push(product);
    }else{
        let res = cart.find(element => element.id == productId);
        if(res === undefined){
            cart.push(product);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
        console.log('Product added to cart:', product); // Log the added product
        console.log('Current cart:', cart); 
  }




  function removeItemFromCart(productId){
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));
  }



function updateQuantity(productId, quantity){
    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
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
 /*getTotal();*/



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

  function addItemToCart(productId){
    let product = products.find(function(product){
return product.id == productId;
    });

    /*if(cart.length == 0) {
        cart.push(product);
    }else{
        let res = cart.find(element => element.id == productId);
        if(res === undefined){
            cart.push(product);
        }
    }*/

    if (product) {
        // Ensure the product is not already in the cart
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




  function removeItemFromCart(productId){
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));
  }



function updateQuantity(productId, quantity){
    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
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
 /*getTotal();*/


  }


  //localStorage.clear();
  
