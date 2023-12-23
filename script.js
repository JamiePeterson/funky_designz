document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Product 1", price: "$10.00", description: "Description here", imageUrl: "link-to-image-1.jpg" },
        { name: "Product 2", price: "$20.00", description: "Description here", imageUrl: "link-to-image-2.jpg" },
        // Add more products here
    ];

    let productList = document.getElementById('product-list');
    products.forEach(product => {
        let col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="btn btn-primary">${product.price}</a>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
});
