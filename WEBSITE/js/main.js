document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Render Products
    const productGrid = document.getElementById('productGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    
    function renderProducts(filter = 'all', sort = 'terbaru') {
        productGrid.innerHTML = '';
        let filteredProducts = products;
        
        if (filter !== 'all') {
            filteredProducts = products.filter(p => p.category === filter || p.badge === filter.toLowerCase());
        }

        // Sort logic (dummy logic, but can be expanded)
        if (sort === 'terbaru') {
            filteredProducts.sort((a, b) => b.id - a.id);
        } else {
            filteredProducts.sort((a, b) => a.id - b.id);
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in';
            
            const badgeHTML = product.badge ? `<div class="product-badge ${product.badge}">${product.badge.toUpperCase()}</div>` : '';
            const colorsHTML = product.colors ? `
                <div class="product-colors">
                    <span>Warna:</span>
                    ${product.colors.map(color => `<div class="color-option" style="background-color: ${color}"></div>`).join('')}
                </div>` : '';
            const sizesHTML = product.sizes ? `
                <div class="product-sizes">
                    <span>Ukuran:</span>
                    ${product.sizes.map(size => `<span class="size-option">${size}</span>`).join('')}
                </div>` : '';
            
            card.innerHTML = `
                ${badgeHTML}
                <div class="product-image">
                    <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">${product.price}</p>
                    <div class="product-options">
                        ${colorsHTML}
                        ${sizesHTML}
                    </div>
                    <button class="btn btn-primary btn-full mt-sm shopee-btn" data-url="${product.shopeeUrl}">Beli di Shopee</button>
                </div>
            `;
            
            // Modal trigger (click anywhere on card except Shopee button)
            card.addEventListener('click', function(e) {
                if(!e.target.classList.contains('shopee-btn')) {
                    openProductModal(product);
                } else {
                    window.open(product.shopeeUrl, '_blank');
                }
            });
            productGrid.appendChild(card);
        });
    }

    renderProducts();

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter, sortSelect.value);
        });
    });

    // Sort
    if(sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            renderProducts(activeFilter, e.target.value);
        });
    }

    // Modal Logic
    const modal = document.getElementById('productModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    function openProductModal(product) {
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
        
        modalBody.innerHTML = `
            <div class="modal-grid">
                <div class="modal-image-wrapper">
                    <img src="${product.mainImage}" alt="${product.name}" class="modal-main-image">
                </div>
                <div class="modal-details">
                    <p class="modal-collection">${product.collection}</p>
                    <h2 class="modal-title">${product.name}</h2>
                    <p class="modal-price">${product.price}</p>
                    <p class="modal-description">${product.description}</p>
                    
                    <div class="modal-options">
                        <div class="product-colors">
                            <span>Warna:</span>
                            ${product.colors.map(color => `<div class="color-option modal-color" style="background-color: ${color}"></div>`).join('')}
                        </div>
                        <div class="product-sizes mt-sm">
                            <span>Ukuran:</span>
                            ${product.sizes.map(size => `<span class="size-option modal-size">${size}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <a href="${product.shopeeUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-full glow-ambient">BELI DI SHOPEE →</a>
                    </div>
                </div>
            </div>
        `;
    }

    function closeModal() {
        document.body.style.overflow = '';
        modal.classList.remove('active');
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Render Team
    const teamGrid = document.getElementById('teamGrid');
    if(teamGrid) {
        team.forEach(member => {
            const card = document.createElement('div');
            card.className = 'team-card fade-in';
            card.innerHTML = `
                <div class="team-image-wrapper">
                    <img src="${member.photo}" alt="${member.name}" loading="lazy">
                </div>
                <div class="team-info">
                    <h3 class="team-name">${member.name}</h3>
                    <p class="team-role">${member.role}</p>
                    <p class="team-bio">${member.bio}</p>
                    <div class="team-social">
                        ${member.socialLinks.instagram ? `<a href="${member.socialLinks.instagram}" target="_blank">IG</a>` : ''}
                        ${member.socialLinks.tiktok ? `<a href="${member.socialLinks.tiktok}" target="_blank">TK</a>` : ''}
                        ${member.socialLinks.behance ? `<a href="${member.socialLinks.behance}" target="_blank">BE</a>` : ''}
                        ${member.socialLinks.youtube ? `<a href="${member.socialLinks.youtube}" target="_blank">YT</a>` : ''}
                    </div>
                </div>
            `;
            teamGrid.appendChild(card);
        });
    }

    // Back to Top
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .section-title, .about-text').forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });
});
