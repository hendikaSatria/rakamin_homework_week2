# Home Work Week 2

## HTML
- **Header**: Berisi logo, menu navigasi, dan tombol navigasi seluler.
- **Main**: Termasuk berbagai bagian seperti bagian pahlawan, bagian konten, dan bagian galeri.
- **Footer**: Berisi informasi kontak.

### Typography dan General Styling

- `*`: Tetapkan ukuran kotak, margin, dan padding yang konsisten untuk semua elemen.

- `html`: Bypass ukuran 1 rem dari 16 px menjadi 10 px (10/16 = 62,5%) untuk ukuran rem yang lebih mudah di hitung.

- `body`: Menentukan font family, size, weight, color, dan menghandle overflow.

## CSS
### Header Styling

- `.header`: Memposisi kan header, menentukan background color, height, dan padding.

- `.sticky`: Membuat posisi header fixed saat di scroll.

- `.main-nav-list`: Membuat styling navigation menu items.

- `.btn-mobile-nav`: Membuat styling mobile navigation button.

- `.icon-mobile-nav`: Membuat styling mobile navigation icons.

- `.main-nav-link`: Membuat styling navigation menu links.

### Hero Section Styling

- `.hr-section`: mensetting hero section background color dan padding.

- `.hr`: mensetting main content grid untuk hero section.

- `.heading-primary`: Membuat styling heading di hero section.

- `.hr-description`: Membuat styling description text.

- `.btn`: Membuat styling primary button.

- `.btn--full`:Membuat styling full-width button.

- `.btn--outline`: Membuat styling outlined button.

### Content Section Styling

- `.content-section`: Memposisi kan header, menentukan background color dan padding.

- `.container`: Mensetting maximum width dan padding.

- `.grid--5-cols`: Membuat styling grid untuk content wisata.

- `.content-img`: Membuat styling  images.

- `.btn--content`: Membuat styling  buttons di dalam content items.

### Gallery Section Styling

- `.gallery-section`: Membuat styling background color dan padding untuk gallery section.

- `.gallery`: Membuat styling grid.

- `.gallery-img`: Membuat styling untuk gallery images.

### Footer Styling

- `.footer`: Footer.

### Media Queries

- Mengatur typography dan layout unutk laptop tablet dan smartphone.
- Menyembunyikan menu dan menimbulkan menu saat di click (smartphone mode).

## JavaScript
- Memilih elemen `btn-mobile-nav` menggunakan `querySelector`.
- Menambahkan event listener untuk event `'click'` untuk mengaktifkan class `open` pada elemen `header`.
- Toggling class open untuk header saat di `'click'`.
