document.addEventListener("DOMContentLoaded", function () {
    var addToCartButtons = document.querySelectorAll('.cart-btn');
    addToCartButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            addToCart(index);
        });
    });
});

function addToCart(productIndex) {
    var productName = document.querySelectorAll('.productName')[productIndex].innerText;
    var productPrice = parseFloat(document.querySelectorAll('.productPrice')[productIndex].innerText.replace('$', '').replace(' ', ''));
    var productImage = document.querySelectorAll('.productImage')[productIndex].src;

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var existingProductIndex = cart.findIndex(function (item) {
        return item.name === productName;
    });

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        var product = {
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        };

        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}
