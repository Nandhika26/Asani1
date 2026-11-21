# ASANI - Awal Usahamu Dimulai di Sini
### Platform Marketplace & Ekosistem Bisnis Digital Mahasiswa
> *"Dari Mahasiswa untuk Mahasiswa"*  
> **Prepared by:** Kelompok 6  
> **Presented to:** Friend-friend & Civitas Academica **Horizon University Indonesia**

---

## 📌 Ringkasan Proyek
Website **ASANI** dibangun berdasarkan rancangan presentasi ekosistem ekonomi kampus. ASANI hadir sebagai solusi bagi mahasiswa yang ingin memulai usaha mandiri (produk fisik, kuliner kampus, keahlian freelance) tanpa risiko tenggelam di marketplace raksasa seperti Shopee, dengan memfokuskan transaksi di lingkungan kampus terdekat (COD di kantin/perpustakaan atau antar ke kosan).

Dibangun murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript (ES6+)** tanpa ketergantungan library luar sehingga dapat langsung dibuka di browser mana pun.

---

## 🎯 Keselarasan Fitur dengan Slide Presentasi

| No | Fitur Slide Presentasi | Implementasi di Website ASANI |
|---|---|---|
| **1** | **Kampus / University (Slide 7, 8, 9)** | Modal pemilih lokasi kampus (*Horizon University Karawang, ITB Bandung, UI Depok, Unpad Jatinangor, UGM, IPB*). Memilih kampus otomatis memfilter produk/jasa yang aktif di area tersebut. |
| **2** | **Marketplace (Slide 7, 8, 9)** | Kategori Produk Kuliah (gradien ungu-pink sesuai mockup): ATK, buku diktat/kalkulus, merchandise kampus, pakaian, tas totebag anti-air, kalkulator scientific. |
| **3** | **Food & Beverage / F&B (Slide 7, 8, 9)** | Kategori Kuliner Mahasiswa (gradien oranye-kuning sesuai mockup): Ayam Geprek Kantin B sambal korek, Es Kopi Susu Mhs Santai, Dimsum Mentai Mozarella, Roti Bakar Bandung. |
| **4** | **Penyedia Jasa & Freelance (Slide 7, 8, 9)** | Kategori Layanan Jasa (gradien biru cerah sesuai mockup): Jasa Print & Makalah antar kosan, Jasa Desain PPT Kuliah kilat, Jastip Stasiun/Kantin, Install Ulang OS/Laptop, Les Privat/Tutor koding. |
| **5** | **Pencarian Cepat Barang & Jasa (Slide 7, 8)** | Smart Search Bar di navbar atas dan mobile bar dengan auto-filter real-time, tombol clear search, dan filter pill sub-kategori. |
| **6** | **Chat Interaktif Penjual & Pembeli (Slide 7, 8)** | Panel chat dua arah lengkap dengan daftar obrolan, bubble chat, tombol cepat "Janjian COD", template pertanyaan cepat, dan simulasi auto-reply penjual. |
| **7** | **Nilai Umum: 💰 Earn, 🛒 Buy, 🚀 Build (Slide 6)** | - **Earn:** Mahasiswa dapat membuka lapak sendiri via tombol **"+ Buka Lapak"**.<br>- **Buy:** Transaksi langsung dan checkout pesanan.<br>- **Build:** Uji ide bisnis dari *Ide → Prototype → Produk → Penjualan* dengan profil usaha dan reputasi ulasan. |
| **8** | **Autentikasi Mahasiswa (Slide 9 Screen 1)** | Modal login / daftar dengan format email resmi kampus (`@kampus.ac.id`), profil terverifikasi, dan pergantian pengguna secara langsung. |
| **9** | **Mobile Bottom Navigation (Slide 9 Screen 3)** | Navigasi bawah responsif: *Beranda*, *Pesanan (Beli/Jual)*, tombol tengah *Jual*, *Chat*, dan *Profil*. |

---

## 🚀 Cara Menjalankan Website

1. Buka folder proyek:
   ```
   c:\Users\ASUS\Documents\Pa Oman\KBBI\asani\
   ```
2. Klik ganda (double-click) file **`index.html`** untuk langsung membukanya di browser favorit Anda (Google Chrome, Microsoft Edge, Firefox, dll.).
3. Anda juga dapat menggunakan web server lokal ringan (seperti Live Server di VS Code) jika diinginkan:
   ```bash
   npx serve asani
   ```

---

## 📂 Struktur Berkas
```
asani/
├── index.html        # Struktur halaman, modal, SVG logo & ikon, komponen web
├── style.css         # Styling clean, modern, simple UI & palet warna presentasi
├── app.js            # State controller, data katalog kampus, interaksi chat, order, & filter
└── README.md         # Dokumentasi fitur dan panduan
```

---
*Dibuat oleh Kelompok 6 — Horizon University Indonesia.*
