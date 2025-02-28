// Function for removing item from cart
function removeItemFromCart(productId){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  //Making sure localstorage clears when cart has been emptied:
  let updatedCart = cart.filter(item => item.id != productId);
  if (updatedCart.length === 0) {
      localStorage.removeItem("cart"); // Clear cart from localStorage
  } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage with the new cart
  }
}

//Function for changing number of products + showing the new price 
function updateQuantity(productId, quantity){
  for(let product of cart){
      if(product.id == productId){
          product.quantity = quantity;
      }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
 updateTotalPrice();
}

// Function for calculating total and displaying it
function updateTotalPrice() {
  // Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Sum up the total price, considering quantity for each item
  let total = cart.reduce(function(prev, item) {
      return prev + (parseFloat(item.price) * item.quantity); // Takes quantity into account
  }, 0);

  // Log the total for debugging
  console.log(total);

  // Display the total price in HTML div 
  const totalPriceDiv = document.getElementById('display-total-price');
  if (totalPriceDiv) {
      totalPriceDiv.innerHTML = `<p>Total Price: $${total.toFixed(2)}</p>`; // Format to 2 decimal places
  }

  if(total === 0) {
    totalPriceDiv.innerHTML = `<p></p>`; //otherwise the totalprice=0 remains on screen when cart empty
  }
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
                       <button class="plus-button" data-product-id="${product.id}" type="button">+</button>

                         <p class="product-quantity">Quantity: <span class="quantity">${product.quantity}</span></p>

              <button class="minus-button" data-product-id="${product.id}" type="button">-</button>
                  </div> 
                  `; //added a + and - button, show quantity in middle
              
              productDiv.innerHTML = productHTML;

              // Append the product to the cart container
              cartContainer.appendChild(productDiv);
          });
      } else {
          // If the cart is empty, display a message
          cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      }
      updateTotalPrice();
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
          updateTotalPrice();
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
            // If quantity is 1 and -button clicked, remove product from cart
           removeItemFromCart(productId);
            //Remove from the website visually:
            const productElement = button.closest('.cart-item');
        if (productElement) {
          productElement.remove();
          alert("Product removed!");
          }
      }
      updateTotalPrice();
    });
  })
});



