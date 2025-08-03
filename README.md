# 🌙 Aplikasi Web Sederhana dengan Fitur Dark Mode

[![Made with PHP](https://img.shields.io/badge/Made%20with-PHP-blue?style=flat-square&logo=php)](https://www.php.net/)
[![Dark Mode Enabled](https://img.shields.io/badge/Dark%20Mode-Enabled-black?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Selamat datang di contoh **aplikasi web sederhana** yang dibangun menggunakan **PHP, CSS, dan JavaScript**.  
Proyek ini bertujuan untuk mendemonstrasikan cara kerja **fitur Dark Mode** dengan implementasi yang ringan, intuitif, dan mudah dikembangkan lebih lanjut lagi.



## 🧩 Fitur Utama
✅ Mode Terang & Mode Gelap  
✅ Tombol toggle dengan ikon 🌞 / 🌙  
✅ Simpan preferensi pengguna dengan `localStorage`  
✅ Transisi tema yang halus  
✅ Struktur halaman sederhana (Beranda, Tentang Kami, Kontak)



## ⚙️ Cara Kerja Dark Mode

### 🎨 1. **Gaya CSS untuk Dua Tema**
- Mode terang dan gelap diatur menggunakan dua kelas utama:
  - `.light-mode` untuk mode terang
  - `.dark-mode` untuk mode gelap  
- Masing-masing mengatur:
  - Warna latar belakang
  - Warna teks
  - Warna tombol dan elemen lainnya

### 🖱️ 2. **Tombol Toggle Tema**
- Terletak di bagian atas halaman
- Mengganti kelas `<body>` antara `.light-mode` dan `.dark-mode`
- Menampilkan **ikon matahari** untuk terang dan **bulan** untuk gelap

### 🧠 3. **JavaScript yang Pintar**
- Mengecek preferensi mode terakhir di `localStorage`
- Jika ada, langsung diterapkan saat halaman dimuat
- Jika tidak ada, default-nya adalah mode terang
- Setiap perubahan disimpan kembali ke `localStorage`

---

## 💡 Tips Penting Saat Menerapkan Dark Mode

1. **Dua Tema yang Konsisten:**  
   Gunakan kelas atau variabel CSS agar lebih mudah dalam pengaturan.

2. **Visual yang Nyaman Dibaca:**  
   Pastikan kontras cukup pada teks, tombol, dan elemen lainnya di kedua mode.

3. **Simpan Preferensi Pengguna:**  
   Agar pengguna tidak perlu mengganti ulang saat membuka kembali aplikasi.

4. **Perhatikan Aksesibilitas:**  
   Gunakan kombinasi warna yang ramah mata dan sesuai standar WCAG.

5. **Transisi Halus:**  
   Tambahkan properti `transition` di CSS agar perpindahan mode tidak terasa tiba-tiba.

---

## 📂 Struktur Halaman

- `index.php` — Beranda  
- `about.php` — Tentang Kami  
- `contact.php` — Kontak  
- `style.css` — Gaya untuk light dan dark mode  
- `script.js` — Logika toggle dark mode  

---

## 📸 Screenshot

> Tambahkan gambar screenshot tampilan light & dark mode di sini jika tersedia.

---

## 📌 Lisensi

Proyek ini bebas digunakan untuk pembelajaran, pengembangan pribadi, atau modifikasi.

---

## 🙌 Kontribusi

Jika Anda ingin menambahkan fitur baru seperti:
- Sinkronisasi preferensi ke database
- Tema tambahan
- Dukungan mode otomatis berdasarkan waktu
Silakan fork dan pull request!

---

Selamat ngoding! ✨  
