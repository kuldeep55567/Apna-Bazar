// Step 1 - Access the element where we have to display product
// Step 2 - Fetch API to get product data
// Step 3 - Display product data in the element

//Step 1
const productContainer = document.getElementById('product-list');
let productData = []
//Step 2
fetch(`http://localhost:3000/users`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response) => { return response.json() } )
    .then((data) => {
        productData = data;
        productData.forEach((product) => {
            productContainer.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.password}</p>
                    <p class="card-text">Price - ${product.price}</p>
                    <p class="card-text">Rating - ${product.rating}</p>
                    <p class="card-text">Discount - ${product.discount}</p>
                    <Button class="btn-primary">Add to Cart</Button>
                </div>
            </div>`
        }
        )
    }
    )

    let btn = document.documentElement.querySelector('.btn-primary')
    btn.addEventListener('click', (e) => {
        console.log(e.target)
        alert('Product added to cart')
    })
    
