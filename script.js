document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Product 1", price: "$10.00", description: "Description here" },
        { name: "Product 2", price: "$20.00", description: "Description here" },
        // Add more products here
    ];

    let productList = document.getElementById('product-list');
    products.forEach(product => {
        let col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="card product-card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="#" class="btn btn-primary">${product.price}</a>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
});
