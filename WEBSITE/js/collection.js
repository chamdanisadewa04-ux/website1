document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const allProductsContainer = document.getElementById('allProducts');
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const publishedProducts = products.filter(product => product.published);
    
    publishedProducts.forEach(product => {
        const productCard = createProductCard(product);
        allProductsContainer.appendChild(productCard);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const productSlug = urlParams.get('product');
    
    if (productSlug) {
        const product = products.find(p => p.slug === productSlug);
        if (product) {
            openProductModal(product);
        }
    }

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const badgeHTML = product.badge ? 
        `<div class="product-badge ${product.badge}">${product.badge === 'best-seller' ? 'BEST SELLER' : product.badge.toUpperCase()}</div>` 
        : '';
    
    const colorsHTML = product.colors ? 
        `<div class="product-colors">
            <span>Warna:</span>
            ${product.colors.map(color => `<div class="color-option" style="background-color: ${color}"></div>`).join('')}
        </div>` 
        : '';
    
    const sizesHTML = product.sizes ? 
        `<div class="product-sizes">
            <span>Ukuran:</span>
            ${product.sizes.map(size => `<span class="size-option">${size}</span>`).join('')}
        </div>` 
        : '';
    
    card.innerHTML = `
        ${badgeHTML}
        <div class="product-image">
            <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-collection">${product.collection}</p>
            <div class="product-options">
                ${colorsHTML}
                ${sizesHTML}
            </div>
        </div>
    `;
    
    card.addEventListener('click', function() {
        openProductModal(product);
    });
    
    return card;
}

function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const mainImage = document.getElementById('mainImage');
    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const productDrop = document.getElementById('productDrop');
    const productCategory = document.getElementById('productCategory');
    const shopeeLink = document.getElementById('shopeeLink');
    const thumbnailGallery = document.getElementById('thumbnailGallery');

    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productDrop.textContent = product.collection;
    productCategory.textContent = product.category;
    shopeeLink.href = product.shopeeUrl;
    
    mainImage.src = product.galleryImages[0];
    mainImage.alt = product.name;

    thumbnailGallery.innerHTML = '';
    
    product.galleryImages.forEach((image, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        if (index === 0) thumb.classList.add('active');
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = `${product.name} - Image ${index + 1}`;
        img.loading = 'lazy';
        
        thumb.appendChild(img);
        
        thumb.addEventListener('click', function() {
            mainImage.src = image;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        
        thumbnailGallery.appendChild(thumb);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const newUrl = `${window.location.pathname}?product=${product.slug}`;
    window.history.pushState({}, '', newUrl);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    const newUrl = window.location.pathname;
    window.history.pushState({}, '', newUrl);
}
