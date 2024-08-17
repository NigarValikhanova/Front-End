document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});

function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var cartContainer = document.getElementById("cart-container");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(function(product, index) {
            var productDiv = createProductDiv(product, index);
            cartContainer.appendChild(productDiv);
        });
    }
}

function createProductDiv(product, index) {
    var productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="quantity">Quantity: ${product.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove from Cart</button>
        </div>
    `;
    return productDiv;
}

function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}

function checkout() {
    alert("Checkout and Payment functionality to be implemented!");
}
