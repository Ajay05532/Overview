document.addEventListener('DOMContentLoaded', () => {
    const addProductButton = document.getElementById('add-product');
    const sortPriceButton = document.getElementById('sort-price');
    const sortRatingButton = document.getElementById('sort-rating');
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');

    let products = [];

    // Function to render the bar graphs
    function renderGraphs() {
        // Clear existing graphs
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        products.forEach(product => {
            // Create bar elements for price and rating
            const priceBar = document.createElement('div');
            priceBar.className = 'bar price';
            priceBar.style.height = `${product.price * 2}px`; // Scale height for visibility
            priceBar.textContent = product.price;
            priceGraph.appendChild(priceBar);

            const ratingBar = document.createElement('div');
            ratingBar.className = 'bar rating';
            ratingBar.style.height = `${product.rating * 60}px`; // Scale height for visibility
            ratingBar.textContent = product.rating;
            ratingGraph.appendChild(ratingBar);
        });
    }

    // Function to handle adding a new product
    function addProduct() {
        const name = document.getElementById('product-name').value.trim();
        const price = parseFloat(document.getElementById('product-price').value.trim());
        const rating = parseFloat(document.getElementById('product-rating').value.trim());

        if (name && !isNaN(price) && !isNaN(rating)) {
            products.push({ name, price, rating });
            document.getElementById('product-name').value = '';
            document.getElementById('product-price').value = '';
            document.getElementById('product-rating').value = '';
            renderGraphs();
        } else {
            alert('Please enter valid product data.');
        }
    }

    // Function to handle sorting by price
    function sortByPrice() {
        products.sort((a, b) => a.price - b.price);
        renderGraphs();
    }

    // Function to handle sorting by rating
    function sortByRating() {
        products.sort((a, b) => a.rating - b.rating);
        renderGraphs();
    }

    // Event listeners
    addProductButton.addEventListener('click', addProduct);
    sortPriceButton.addEventListener('click', sortByPrice);
    sortRatingButton.addEventListener('click', sortByRating);
});
