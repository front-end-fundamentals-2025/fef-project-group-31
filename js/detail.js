//Code customised by chatgpt to retrieve localstorage and redisplay products on detailpage depending on which

// Get the productId from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// Fetch my products from localStorage
const storedProducts = localStorage.getItem("products");

// Parse the products only if it's available
if (storedProducts) {
    const products = JSON.parse(storedProducts);

    // Find the product with the matching ID
    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
        // Display product details
        const detailContainer = document.getElementById('detail-container');
        detailContainer.innerHTML = `
            <h1 class="detail-header" >${product.name}</h1>
            <img class="detail-image" src="${product.image}" alt="${product.name}">
            <p>Price: ${product.price}</p>
            <p class="description" >${product.description}</p>
          <button class="add-cart-button" data-product-id="${product.id}" type="button">Add to cart</button>
        `;
    } else {
        // If no product is found, display an error message
        document.getElementById('detail-container').innerHTML = "<p>Product not found.</p>";
    }
}