document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const featuredProductsContainer = document.getElementById('featuredProducts');
    
    const featuredProducts = products.filter(product => product.featured && product.published);
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
});

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-collection">${product.collection}</p>
        </div>
    `;
    
    card.addEventListener('click', function() {
        window.location.href = `collection.html?product=${product.slug}`;
    });
    
    return card;
}
