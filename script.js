document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Product 1", price: "$10.00" },
        { name: "Product 2", price: "$20.00" },
        // Add more products here
    ];

    let productList = document.getElementById('product-list');
    products.forEach(product => {
        let div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        productList.appendChild(div);
    });
});
