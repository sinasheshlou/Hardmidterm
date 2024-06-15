document.addEventListener('DOMContentLoaded', () => {
    const productImage = document.getElementById('productImage');
    const productTitle = document.getElementById('productTitle');
    const productDescription = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');
    const productRating = document.getElementById('productRating');
    const productBrand = document.getElementById('productBrand');
    const productStock = document.getElementById('productStock');

    fetch('https://dummyjson.com/products/1')
        .then(response => response.json())
        .then(data => {
            productImage.src = data.thumbnail;
            productTitle.textContent = data.title;
            productDescription.textContent = data.description;
            productPrice.textContent = data.price;
            productRating.textContent = data.rating;
            productBrand.textContent = data.brand;
            productStock.textContent = data.stock;
        })
        .catch(error => console.error('Error fetching data:', error));
});
