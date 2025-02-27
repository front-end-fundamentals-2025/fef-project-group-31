// cart.js

// Function to update product quantity in cart
/*function updateQuantity(button, delta) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const productTitle = button.getAttribute('data-title');
    let product = cart.find(item => item.title === productTitle);
  
    if (product) {
      product.quantity += delta;
      if (product.quantity <= 0) {
        cart = cart.filter(item => item !== product); // Remove product if quantity is 0
      }
      sessionStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to sessionStorage
      window.location.reload(); // Refresh page to reflect changes
    }
  }
  
  // Load cart items and calculate total
  window.onload = function() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];  // Get cart from sessionStorage
    
    if (cart.length === 0) {
      document.querySelector('.cart-content').innerHTML = '<p>Your cart is empty.</p>';
    } else {
      let cartHTML = '';
      let totalPrice = 0; 
  
      // Loop through the cart items and create HTML for each
      cart.forEach(item => {
        cartHTML += `
          <div class="cart-box">
            <img src="${item.imgSrc}" class="cart-img">
            <div class="cart-detail">
              <h2 class="cart-product-title">${item.title}</h2>
              <span class="cart-price">${item.price}</span>
              <div class="cart-quantity">
                <button class="fewer" data-title="${item.title}">-</button>
                <span class="cart-quantity-value">${item.quantity}</span>
                <button class="more" data-title="${item.title}">+</button>
              </div>
            </div>
          </div>
        `;
        totalPrice += parseFloat(item.price.replace('SEK', '').trim()) * item.quantity;
      });
  
      // Add cart items to the cart-content div
      document.querySelector('.cart-content').innerHTML = cartHTML;
      document.getElementById('cart-total-price').textContent = totalPrice.toFixed(2) + ' SEK';
  
      // Update quantity buttons
      document.querySelectorAll('.fewer').forEach(button => {
        button.addEventListener('click', (e) => {
          updateQuantity(e.target, -1);
        });
      });
      document.querySelectorAll('.more').forEach(button => {
        button.addEventListener('click', (e) => {
          updateQuantity(e.target, 1);
        });
      });
    }
  };
  
  // Checkout button functionality
  document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // You can redirect to a checkout page like:
    // window.location.href = 'checkout.html';
  });*/

  

 /* document.addEventListener('DOMContentLoaded', function() {
    let addCartButtons = document.querySelectorAll('.add-cart-button');
    
    addCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        });
    });
});*/

/*function renderCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContent = document.querySelector('.cart-content');
  cartContent.innerHTML = '';  // Clear existing cart content before re-rendering

  cart.forEach(function(product) {
      // Assuming you have access to products or can fetch them from localStorage
      let productDetails = JSON.parse(localStorage.getItem('products')).find(p => p.id === product.id);
      
      if (productDetails) {
          let cartItem = document.createElement('div');
          cartItem.classList.add('cart-box');
          cartItem.innerHTML = `
              <img src="${productDetails.image}" class="cart-img" alt="${productDetails.title}">
              <div class="cart-detail">
                  <h2 class="cart-product-title">${productDetails.title}</h2>
                  <span class="cart-price">${productDetails.price} SEK</span>
                  <div class="cart-quantity">
                      <button class="fewer" data-id="${product.id}">-</button>
                      <span class="quantity">${product.quantity || 1}</span>
                      <button class="more" data-id="${product.id}">+</button>
                  </div>
              </div>
          `;
          cartContent.appendChild(cartItem);
      }
  });

  updateTotal();  // Update the total price after rendering the cart
}
*/


/*document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart"));

  // If cart is empty, display a message
  if (!cart || cart.length === 0) {
      document.getElementById("cart-container").innerHTML = "<p>Your cart is empty.</p>";
      return;
  }

  // Get the container where cart items will be displayed
  let cartContainer = document.getElementById("cart-container");
  
  // Initialize total price
  let totalPrice = 0;

  // Loop through cart items and create HTML elements for each item
  cart.forEach(function(item) {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      // Create the image and details section
      let itemDetails = document.createElement("div");
      itemDetails.classList.add("details");

      let itemName = document.createElement("span");
      itemName.textContent = item.name; // Name of the product
      
      let itemPrice = document.createElement("span");
      
      // Parse the price string (removes 'SEK' and converts to a number)
      let priceNumeric = parseFloat(item.price.replace('SEK', '').trim());
      itemPrice.textContent = `$${priceNumeric.toFixed(2)}`; // Display in USD format (or whatever currency)

      itemDetails.appendChild(itemName);
      itemDetails.appendChild(itemPrice);

      // Create the quantity section
      let quantityDiv = document.createElement("div");
      quantityDiv.classList.add("quantity");
      quantityDiv.innerHTML = `Quantity: ${item.quantity}`;

      // Add image if available
      let img = document.createElement("img");
      img.src = item.image || '';  // Assuming each item has an 'image' property
      img.alt = item.name;

      // Append image, details, and quantity to the cart item
      cartItem.appendChild(img);
      cartItem.appendChild(itemDetails);
      cartItem.appendChild(quantityDiv);

      // Add cart item to the container
      cartContainer.appendChild(cartItem);

      // Calculate the total price (including quantity)
      totalPrice += priceNumeric * item.quantity;
  });

  // Update the total price in the UI
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
});

/*document.addEventListener('DOMContentLoaded', function() {
  let cartContainer = document.getElementById("cart-container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // If cart is empty, display a message
  if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
      // Otherwise, display the cart items
      cartContainer.innerHTML = "<p>Items in your cart:</p>";
      cart.forEach(function(item) {
          cartContainer.innerHTML += `<p>${item.name} - $${item.price}</p>`;
      });
  }
});*/



//Displaying the image, name, price and quantity in cart page

/*document.addEventListener('DOMContentLoaded', function() {
  // The code inside here will only run after the DOM is fully loaded
  let cartContainer = document.getElementById('cart-container');

  if (cart && cart.length > 0) {
      cart.forEach(function(product) {
          let productDiv = document.createElement('div');
          productDiv.classList.add('cart-item');

          let productHTML = `
              <div class="cart-item-image">
                  <img src="${product.image}" alt="${product.name}" />
              </div>
              <div class="cart-item-details">
                  <h3 class="product-name">${product.name}</h3>
                  <p class="product-price">${product.price}</p>
                  <p class="product-quantity">Quantity: ${product.quantity}</p>
              </div>
          `;
          
          productDiv.innerHTML = productHTML;
          cartContainer.appendChild(productDiv);
      });
  } else {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  }
}); */

//Function for changing number of products 
function updateQuantity(productId, quantity){
  for(let product of cart){
      if(product.id == productId){
          product.quantity = quantity;
      }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
//Function for removing item from cart
function removeItemFromCart(productId){
  let temp = cart.filter(item => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(temp));
}

//Once the DOM is loaded + cart container exists, display selected product and + - buttons
document.addEventListener('DOMContentLoaded', function() {
  // Get the cart container where products will be displayed
  let cartContainer = document.getElementById('cart-container');

  // If the cart container exists
  if (cartContainer) { //display the product image, name, price and quantity
      let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage

      if (cart.length > 0) {
          // Loop through the cart and display each product
          cart.forEach(function(product) {
              let productDiv = document.createElement('div');
              productDiv.classList.add('cart-item');
              
              let productHTML = `
                  <div class="cart-item-image">
                      <img src="${product.image}" alt="${product.name}" />
                  </div>
                  <div class="cart-item-details">
                      <h3 class="product-name">${product.name}</h3>
                      <p class="product-price">${product.price}</p>
                      <p class="product-quantity">Quantity: <span class="quantity">${product.quantity}</span></p>
                  </div> 
                  <button class="plus-button" data-product-id="${product.id}" type="button">+</button>
              <button class="minus-button" data-product-id="${product.id}" type="button">-</button>
                  `; //add a + and - button
              
              productDiv.innerHTML = productHTML;

              // Append the product to the cart container
              cartContainer.appendChild(productDiv);
          });
      } else {
          // If the cart is empty, display a message
          cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      }
  } else {
      console.error('Cart container not found!');
  }
});


//For the + - buttons:
//Once DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const plusButtons = document.querySelectorAll('.plus-button');
  const minusButtons = document.querySelectorAll('.minus-button');

  // Loop through all plus buttons + Event listener for + button
  plusButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          const productId = button.getAttribute('data-product-id');
          const cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage
          const product = cart.find(item => item.id == productId);
          
          if (product) {
              updateQuantity(product.id, product.quantity + 1);
              // Show the new quantity on website:
              const quantitySpan = button.parentElement.querySelector('.quantity');
              if (quantitySpan) {
                  quantitySpan.textContent = product.quantity + 1;
              }
          }
      });
  });

  minusButtons.forEach(function(button){
    button.addEventListener('click', function(event){
      const productId = button.getAttribute('data-product-id');
          const cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage
          const product = cart.find(item => item.id == productId);
          
          if (product && product.quantity > 1) { // only if its 1 or bigger, so it does not remove below 1  
              updateQuantity(product.id, product.quantity - 1);
              // Show the new quantity on website:
              const quantitySpan = button.parentElement.querySelector('.quantity');
              if (quantitySpan) {
                  quantitySpan.textContent = product.quantity - 1;
              }
          } else if (product && product.quantity === 1) {
            // If the quantity is 1 and the user clicks "-" button, remove the product from the cart
           removeItemFromCart(productId);
            //Remove from the website visually:
            const productElement = button.closest('.cart-item');
        if (productElement) {
          productElement.remove();
          alert("You are now emptying the cart.");
          }
        }
    });
  })
});


