// products.js
const products = [
    { id: 1, name: "Product 1", price: 100 , Image: "https://refash.in/cdn/shop/products/Ir3gma8f0E.jpg?v=1697189431&width=720" },
    { id: 1, name: "Product 2", price: 150 , Image: "https://refash.in/cdn/shop/products/Ir3gma8f0E.jpg?v=1697189431&width=720"},
    { id: 1, name: "Product 3", price: 540 , Image: "https://refash.in/cdn/shop/products/Ir3gma8f0E.jpg?v=1697189431&width=720"},
    { id: 2, name: "Product 4", price: 430 , Image: "https://refash.in/cdn/shop/products/Ir3gma8f0E.jpg?v=1697189431&width=720"},
    { id: 3, name: "Product 5", price: 300 , Image: "https://refash.in/cdn/shop/products/Ir3gma8f0E.jpg?v=1697189431&width=720"}
];

const productList = document.querySelector('#product-list');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function loadProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price:₹{product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!cart.some(item => item.id === productId)) {
        cart.push({ ...product, quantity: 1 });
        alert(`${product.name} added to cart`);
    } else {
        alert(`${product.name} is already in the cart`);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

loadProducts();

// common.js
const user = localStorage.getItem('user');

if (user) {
    document.body.insertAdjacentHTML('beforeend', '<button onclick="logout()">Logout</button>');
}

function logout() {
    localStorage.removeItem('user');
    alert('Logged out successfully');
    window.location.href = 'login.html';
}

