# PRD.md — Product Requirements Document
## Habit Tracker — Mini Project ReactJS

**Versi:** 1.0  
**Target pengguna dokumen:** Siswa pemula ReactJS  
**Tujuan project:** Belajar React dengan membangun aplikasi nyata secara bertahap

---

## 1. Deskripsi Product

Habit Tracker adalah aplikasi web sederhana yang memungkinkan pengguna mencatat, memantau, dan mengelola kebiasaan harian mereka. Aplikasi ini dibangun sebagai project pembelajaran React dengan pendekatan bertahap — dimulai dari yang paling sederhana hingga fitur yang lebih lengkap.

---

## 2. Tujuan Pembelajaran

Setelah menyelesaikan project ini, siswa mampu:

| Konsep | Kemampuan yang Didapat |
|---|---|
| `useState` | Menyimpan dan mengubah data di React |
| `.map()` | Menampilkan list dari array |
| `.filter()` | Menghapus item dari array |
| Spread operator | Menambah item ke array |
| `localStorage` | Menyimpan data permanen di browser |
| Event handler | Menangani klik tombol dan input teks |
| Conditional rendering | Mengubah tampilan berdasarkan state |
| Props | Mengirim data antar komponen (tahap lanjut) |
| React Router | Navigasi antar halaman (tahap lanjut) |

---

## 3. Fitur

### 3.1 Fitur Wajib (Mini Project 1 + 2)

| ID | Fitur | Deskripsi |
|---|---|---|
| F01 | Tampil daftar habit | Menampilkan semua habit dalam bentuk card |
| F02 | Tambah habit | Input nama habit + tombol tambah |
| F03 | Hapus habit | Tombol hapus di setiap card |
| F04 | Checklist selesai | Toggle status selesai/belum per habit |
| F05 | Dynamic rendering | Perubahan tampil tanpa reload halaman |
| F06 | Styling card | Tampilan card yang rapi dan bisa dibaca |

### 3.2 Fitur Bonus

| ID | Fitur | Deskripsi |
|---|---|---|
| F07 | localStorage | Data tidak hilang saat browser di-refresh |
| F08 | Visual feedback | Card berubah tampilan jika habit selesai |
| F09 | Validasi input | Tidak bisa tambah habit dengan nama kosong |

### 3.3 Fitur Lanjutan (Opsional)

| ID | Fitur | Deskripsi |
|---|---|---|
| F10 | Komponen terpisah | `HabitCard.jsx`, `HabitForm.jsx` |
| F11 | Routing | Halaman utama + halaman statistik |
| F12 | CSS Modules | Styling per komponen |

---

## 4. Desain Data

### Model Habit

```js
{
  id: Number,        // contoh: 1716789012345 (dari Date.now())
  nama: String,      // contoh: "Minum air putih 8 gelas"
  selesai: Boolean   // true = sudah selesai, false = belum
}
```

### Contoh data awal (untuk Tahap 1)

```js
const habitAwal = [
  { id: 1, nama: "Olahraga 30 menit", selesai: false },
  { id: 2, nama: "Baca buku 20 halaman", selesai: true },
  { id: 3, nama: "Minum air putih 8 gelas", selesai: false },
];
```

---

## 5. Tampilan UI

### Layout utama

```
┌─────────────────────────────────────┐
│          🗓️ Habit Tracker            │
├─────────────────────────────────────┤
│  [Input nama habit...] [+ Tambah]   │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐  │
│  │ ☐  Olahraga 30 menit    [❌] │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ ☑  Baca buku 20 halaman [❌] │  │  ← card abu-abu jika selesai
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Spesifikasi warna (CSS murni)

```css
/* Warna utama */
--warna-primer: #4f46e5;      /* indigo */
--warna-sukses: #16a34a;      /* hijau */
--warna-bahaya: #dc2626;      /* merah */
--warna-abu: #9ca3af;         /* abu-abu (untuk habit selesai) */
--warna-latar: #f8fafc;
--warna-card: #ffffff;
```

---

## 6. Struktur File Akhir

### Tahap 1 dan 2 (wajib)

```
src/
├── App.jsx     ← semua logika dan tampilan
├── App.css     ← styling card dan layout
└── main.jsx    ← tidak perlu diubah
```

### Tahap lanjutan (jika berkembang)

```
src/
├── components/
│   ├── HabitCard.jsx
│   ├── HabitCard.module.css
│   ├── HabitForm.jsx
│   └── HabitForm.module.css
├── pages/
│   ├── Beranda.jsx
│   └── Statistik.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## 7. Teknologi

| Teknologi | Versi | Kegunaan |
|---|---|---|
| React | 18+ | Library UI utama |
| Vite | 5+ | Build tool dan dev server |
| react-router-dom | 6+ | Routing (tahap lanjutan) |
| CSS murni | — | Styling awal |
| CSS Modules | — | Styling komponen (tahap lanjutan) |
| localStorage | API browser | Penyimpanan data lokal |

---

## 8. Kriteria Selesai (Definition of Done)

### Mini Project 1
- [ ] Data habit statis ditampilkan sebagai card
- [ ] Menggunakan `.map()` untuk render list
- [ ] Styling card sederhana sudah ada

### Mini Project 2
- [ ] Habit baru bisa ditambah via input
- [ ] Habit bisa dihapus
- [ ] Status selesai bisa di-toggle
- [ ] Semua tanpa reload halaman

### Bonus
- [ ] Data tersimpan di localStorage
- [ ] Data tetap ada setelah refresh browser
- [ ] Validasi: nama kosong tidak bisa ditambah

---

## 9. Catatan untuk Pengajar

- Project ini dirancang untuk dikerjakan dalam **2-3 sesi** belajar
- Setiap tahap bisa dijadikan sesi tersendiri
- Siswa TIDAK perlu menyelesaikan semua tahap dalam satu waktu
- Prioritaskan pemahaman `.map()` dan `useState` sebelum melanjutkan
- `EXPLAIN.md` adalah output wajib yang siswa harus bisa jelaskan sendiri