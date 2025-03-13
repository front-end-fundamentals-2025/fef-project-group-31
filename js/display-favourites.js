/*Same logic as cart.js, localstorage and functions adapted from Digital Fox https://www.youtube.com/watch?v=pRkHOD_nkH4&t=408s */

// Function for removing item from cart
function removeItemFromLiked(productId){
    let liked = JSON.parse(localStorage.getItem("liked")) || [];
    //Making sure localstorage clears when liked has been emptied:
    let updatedLiked = liked.filter(item => item.id != productId);
    if (updatedLiked.length === 0) {
        localStorage.removeItem("liked"); // Clear from localStorage
    } else {
        localStorage.setItem("liked", JSON.stringify(updatedLiked)); 
    }
  }
   
 /*Displaying product*/ 
  document.addEventListener('DOMContentLoaded', function() {
   
    let likedContainer = document.getElementById('favourites-container');
  
    // If the cart container exists
    if (likedContainer) { //display the product image, name, price 
        let liked = JSON.parse(localStorage.getItem("liked")) || []; // key from localStorage
        if (liked.length > 0) {
            // Loop through and display each product
            liked.forEach(function(product) {
                let productDiv = document.createElement('div');
                productDiv.classList.add('liked-item');
                
                let productHTML = `
                    <div class="liked-item-image">
                        <img src="${product.image}" alt="${product.name}" />
                    </div>
                    <div class="liked-item-details">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="price-remove">
                        <p class="product-price">${product.price}</p>
                        <button class="remove-fav" data-product-id="${product.id}" type="button">Remove from favourites</button>
                  </div>
                        </div> 
                    `; 
                
                productDiv.innerHTML = productHTML;
  
                // Append the product to the liked container
                likedContainer.appendChild(productDiv);
            });
        } else {
            // If liked is empty, display a message
            likedContainer.innerHTML = "<p>Add your favourite products!</p>";
        }
    } else {
        console.error('Liked container not found!');
    }
  });
  
  //For remove button 
  document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-fav');
  
    // Loop through all remove buttons
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const productId = button.getAttribute('data-product-id');
            const liked = JSON.parse(localStorage.getItem("liked")) || []; // Retrieve cart from localStorage
            const product = cart.find(item => item.id == productId);
            
        removeItemFromLiked(productId);
        //Remove visually:
        const productElement = button.closest('.liked-item');
        if (productElement) {
            productElement.remove();
            alert("Product removed!");
            }
        });
    });
  });
  

  
  