# PIXELSTUDIO Website

Website portfolio dan katalog fashion untuk PIXELSTUDIO - Creative group focused on transforming ideas into unique and expressive fashion pieces.

## 🎯 Fitur

- **Home Page**: Hero section, about, dan featured collection
- **Collection Page**: Grid produk lengkap dengan modal detail dan link ke Shopee
- **Team Page**: Profil anggota tim dengan foto dan role
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Modern UI**: Minimalis, clean, fashion-oriented

## 📁 Struktur File

```
WEBSITE/
├── index.html          # Home page
├── collection.html     # Collection page
├── team.html          # Team page
├── css/
│   └── style.css      # All styles (responsive included)
├── js/
│   ├── data.js        # Product & team data
│   ├── main.js        # Home page logic
│   ├── collection.js  # Collection page logic
│   └── team.js        # Team page logic
└── images/            # Folder untuk gambar (buat manual)
    ├── products/      # Gambar produk
    └── team/          # Foto team
```

## 🚀 Cara Menggunakan

### 1. Buka Website
Buka file `index.html` di browser untuk melihat website.

### 2. Update Data Produk
Edit file `js/data.js` untuk menambah/edit produk:

```javascript
{
    id: 1,
    name: "NAMA PRODUK",
    slug: "nama-produk",
    description: "Deskripsi produk...",
    category: "T-Shirt / Hoodie / dll",
    collection: "DROP 01",
    mainImage: "images/products/nama-file.jpg",
    galleryImages: [
        "images/products/nama-file-1.jpg",
        "images/products/nama-file-2.jpg"
    ],
    shopeeUrl: "https://shopee.co.id/product/xxxxx",
    published: true,
    featured: true  // tampil di home page
}
```

### 3. Update Data Team
Edit file `js/data.js` untuk menambah/edit anggota tim:

```javascript
{
    id: 1,
    name: "NAMA",
    role: "Role/Posisi",
    photo: "images/team/nama-file.jpg",
    bio: "Deskripsi singkat...",
    socialLinks: {
        instagram: "https://instagram.com/username"
    }
}
```

### 4. Tambah Gambar
- Buat folder `images/products/` untuk gambar produk
- Buat folder `images/team/` untuk foto team
- Upload gambar dengan nama yang sesuai dengan data di `data.js`
- Format yang disarankan: JPG/PNG, ratio 4:5 untuk produk, 4:5 untuk team

### 5. Update Link Social Media
Edit di bagian footer setiap file HTML atau ubah di `footer` section pada HTML files:

```html
<a href="https://instagram.com/pixelstudio" target="_blank">Instagram</a>
<a href="https://tiktok.com/@pixelstudio" target="_blank">TikTok</a>
<a href="https://shopee.co.id/pixelstudio" target="_blank">Shopee</a>
```

## 🎨 Customization

### Mengubah Warna
Edit CSS variables di `css/style.css`:

```css
:root {
    --color-bg: #fafafa;        /* Background color */
    --color-text: #1a1a1a;      /* Text color */
    --color-accent: #000000;    /* Accent/brand color */
    --color-gray: #666666;      /* Secondary text */
}
```

### Mengubah Font
Font menggunakan Google Fonts (Space Grotesk + Inter). 
Ganti di `<head>` setiap HTML file dan update di CSS variables.

## 📱 Responsive Breakpoints

- **Desktop**: >1024px
- **Tablet**: 769px - 1024px
- **Mobile**: <768px
- **Small Mobile**: <480px

## 🔗 Next Steps

1. **Deploy**: Upload ke hosting (Netlify, Vercel, GitHub Pages, dll)
2. **Domain**: Hubungkan dengan domain custom
3. **Images**: Ganti placeholder dengan foto asli produk dan tim
4. **SEO**: Update meta tags di setiap HTML file
5. **Analytics**: Tambahkan Google Analytics jika diperlukan

## 📝 Notes

- Semua transaksi diarahkan ke Shopee (bukan e-commerce penuh)
- Gambar saat ini menggunakan placeholder - harus diganti
- Data produk dan tim bersifat dummy - harus diupdate dengan data asli
- Website static (HTML/CSS/JS) - mudah di-host gratis

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, CSS Grid, Flexbox
- **Vanilla JavaScript**: No framework untuk performa optimal
- **Google Fonts**: Space Grotesk & Inter

---

**Dibuat untuk PIXELSTUDIO**  
Design. Create. Wear.
