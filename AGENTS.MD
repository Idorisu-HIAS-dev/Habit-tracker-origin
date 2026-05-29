# 🤖 agents.md — Habit Tracker
> Prompt siap pakai untuk OpenCode. Taruh file ini bersama PRD.md di satu folder, lalu jalankan.

---

## PROMPT UTAMA — Build Project dari Nol

> Copy seluruh blok di bawah ini dan paste ke OpenCode.

```
Kamu adalah senior React developer. Tugasmu membangun project "Habit Tracker" dari nol.

Baca file PRD.md yang ada di folder ini sebelum menulis kode apapun.

Setelah membaca PRD.md, bangun project dengan urutan fase berikut:

---

### FASE 1 — Inisialisasi Project

Jalankan perintah ini:
  npm create vite@latest habit-tracker -- --template react
  cd habit-tracker
  npm install

Hapus konten default:
- src/App.jsx → timpa dengan kode baru
- src/App.css → timpa dengan styling baru
- src/index.css → isi cukup: body { margin: 0; }

---

### FASE 2 — App.css (Styling Global)

Buat src/App.css dengan:

CSS variables di :root:
  --warna-primer: #4f46e5;
  --warna-sukses: #16a34a;
  --warna-bahaya: #dc2626;
  --warna-abu: #9ca3af;
  --warna-latar: #f8fafc;
  --warna-card: #ffffff;

Styling yang dibutuhkan:
- body: background var(--warna-latar), font-family system-ui atau sans-serif
- .app: max-width 480px, margin 0 auto, padding 24px
- .judul: text-align center, font-size 1.6rem, color var(--warna-primer), margin-bottom 24px
- .form-tambah: display flex, gap 8px, margin-bottom 20px
- .form-tambah input: flex 1, padding 10px 14px, border 1px solid #d1d5db, border-radius 8px, font-size 14px, outline none
- .form-tambah input:focus: border-color var(--warna-primer), box-shadow 0 0 0 3px rgba(79,70,229,0.15)
- .btn-tambah: background var(--warna-primer), color white, border none, padding 10px 18px, border-radius 8px, cursor pointer, font-size 14px, font-weight 600, white-space nowrap
- .btn-tambah:hover: opacity 0.9
- .daftar-habit: display flex, flex-direction column, gap 10px
- .card: background var(--warna-card), border 1px solid #e5e7eb, border-radius 12px, padding 14px 16px, display flex, align-items center, gap 12px, transition background 0.2s, box-shadow 0 1px 3px rgba(0,0,0,0.06)
- .card.selesai: background #f0fdf4, border-color #bbf7d0
- .card.selesai .nama-habit: text-decoration line-through, color var(--warna-abu)
- .checkbox: width 20px, height 20px, cursor pointer, accent-color var(--warna-sukses), flex-shrink 0
- .nama-habit: flex 1, font-size 15px, color #1f2937
- .btn-hapus: background none, border none, color #d1d5db, cursor pointer, font-size 18px, line-height 1, padding 4px, border-radius 6px, transition color 0.15s
- .btn-hapus:hover: color var(--warna-bahaya)
- .kosong: text-align center, color var(--warna-abu), padding 40px 0, font-size 14px
- .ringkasan: text-align center, font-size 13px, color var(--warna-abu), margin-bottom 16px

---

### FASE 3 — App.jsx (Semua Logika)

Buat src/App.jsx dengan logika lengkap berikut:

**Import:**
  import { useState, useEffect } from "react";
  import "./App.css";

**Data awal:**
  const habitAwal = [
    { id: 1, nama: "Olahraga 30 menit", selesai: false },
    { id: 2, nama: "Baca buku 20 halaman", selesai: true },
    { id: 3, nama: "Minum air putih 8 gelas", selesai: false },
  ];

**State:**
  const [habits, setHabits] = useState(() => {
    try {
      const tersimpan = localStorage.getItem("habit-tracker-data");
      return tersimpan ? JSON.parse(tersimpan) : habitAwal;
    } catch {
      return habitAwal;
    }
  });
  const [inputNama, setInputNama] = useState("");

**useEffect — sync ke localStorage:**
  useEffect(() => {
    localStorage.setItem("habit-tracker-data", JSON.stringify(habits));
  }, [habits]);

**Handler tambah habit:**
  const tambahHabit = () => {
    const nama = inputNama.trim();
    if (!nama) return; // validasi: tidak boleh kosong
    const habitBaru = { id: Date.now(), nama, selesai: false };
    setHabits(prev => [...prev, habitBaru]);
    setInputNama("");
  };

**Handler hapus habit:**
  const hapusHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

**Handler toggle selesai:**
  const toggleSelesai = (id) => {
    setHabits(prev =>
      prev.map(h => h.id === id ? { ...h, selesai: !h.selesai } : h)
    );
  };

**Handler Enter di input:**
  const handleKeyDown = (e) => {
    if (e.key === "Enter") tambahHabit();
  };

**Hitung ringkasan:**
  const jumlahSelesai = habits.filter(h => h.selesai).length;

**JSX yang di-return:**

  <div className="app">
    <h1 className="judul">🗓️ Habit Tracker</h1>

    {/* Form tambah habit */}
    <div className="form-tambah">
      <input
        type="text"
        placeholder="Nama habit baru..."
        value={inputNama}
        onChange={(e) => setInputNama(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-tambah" onClick={tambahHabit}>
        + Tambah
      </button>
    </div>

    {/* Ringkasan — conditional rendering: hanya tampil jika ada habit */}
    {habits.length > 0 && (
      <p className="ringkasan">
        {jumlahSelesai} dari {habits.length} habit selesai hari ini
      </p>
    )}

    {/* Daftar habit */}
    <div className="daftar-habit">
      {/* Conditional rendering: tampilkan pesan jika tidak ada habit */}
      {habits.length === 0 ? (
        <p className="kosong">Belum ada habit. Tambahkan habit pertamamu! 🌱</p>
      ) : (
        // .map() — render setiap habit menjadi card
        habits.map((habit) => (
          <div
            key={habit.id}
            className={`card ${habit.selesai ? "selesai" : ""}`}
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={habit.selesai}
              onChange={() => toggleSelesai(habit.id)}
            />
            <span className="nama-habit">{habit.nama}</span>
            <button
              className="btn-hapus"
              onClick={() => hapusHabit(habit.id)}
              title="Hapus habit"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  </div>

---

### FASE 4 — EXPLAIN.md

Buat file EXPLAIN.md di root project. Gunakan bahasa Indonesia yang jelas,
cocok untuk siswa pemula ReactJS. Wajib ada 7 bagian, masing-masing dengan
contoh kode dari project ini:

1. **useState** — apa itu state, kenapa dibutuhkan, cara pakai. Contoh: state `habits` dan `inputNama`
2. **.map() untuk render list** — cara kerja, kenapa `key` wajib, contoh render daftar habit
3. **.filter() untuk hapus item** — cara kerja, contoh fungsi hapusHabit
4. **Spread operator untuk tambah item** — cara kerja `[...prev, habitBaru]`, kenapa tidak boleh push langsung
5. **localStorage** — cara baca (lazy init), cara simpan (useEffect), kenapa JSON.stringify/parse
6. **Event handler** — onClick, onChange, onKeyDown — contoh dari form dan tombol
7. **Conditional rendering** — ternary operator dan &&, contoh dari card selesai dan empty state

Tambahkan tabel ringkasan di akhir: konsep | dipakai di | tujuan

---

### ATURAN WAJIB

1. Semua logika ada di App.jsx — tidak perlu komponen terpisah
2. Styling hanya di App.css menggunakan className dan CSS variables
3. Tidak ada inline style
4. Tidak ada library tambahan
5. Setelah semua file selesai, jalankan `npm run build` — pastikan tidak ada error
6. Jika ada error, debug dan perbaiki dulu sebelum selesai

---

### HASIL AKHIR YANG DIHARAPKAN

- `npm install && npm run dev` → langsung jalan di localhost
- `npm run build` → sukses tanpa error
- Tambah habit baru via input → muncul di list
- Tekan Enter di input → habit langsung ditambah
- Centang checkbox → card berubah tampilan (strikethrough + hijau muda)
- Klik ✕ → habit terhapus
- Input kosong tidak bisa ditambah
- Data tetap ada setelah browser di-refresh
- EXPLAIN.md ada dan lengkap 7 bagian
```

---

## PROMPT LANJUTAN — Refactor ke Komponen Terpisah

> Jalankan ini setelah Prompt Utama selesai dan project berjalan.

```
Project Habit Tracker sudah berjalan. Sekarang refactor ke struktur komponen terpisah.

Baca src/App.jsx yang sudah ada terlebih dahulu.

Tugas:
1. Buat src/components/HabitForm.jsx + HabitForm.module.css
   - Props: inputNama, onChangeInput, onTambah
   - Handle Enter key di dalam komponen ini
   - Styling sama seperti .form-tambah di App.css tapi pakai CSS Module

2. Buat src/components/HabitCard.jsx + HabitCard.module.css
   - Props: habit, onToggle, onHapus
   - Styling sama seperti .card di App.css tapi pakai CSS Module
   - className dinamis berdasarkan habit.selesai

3. Update App.jsx:
   - Import dan gunakan HabitForm + HabitCard
   - Logika state dan handler TETAP di App.jsx
   - App.jsx hanya mendelegasikan render ke komponen anak

4. Jangan ubah tampilan atau logika — hanya pindah ke komponen

Setelah selesai: npm run build harus tetap sukses.
```

---

## PROMPT LANJUTAN — Tambah Halaman Statistik

> Jalankan ini setelah refactor komponen selesai.

```
Tambahkan fitur routing dan halaman Statistik ke project Habit Tracker.

Jalankan dulu: npm install react-router-dom

Tugas:
1. Update src/main.jsx: bungkus <App /> dengan <BrowserRouter>

2. Update src/App.jsx:
   - Import Routes, Route, Link dari react-router-dom
   - Route "/" → komponen Beranda (isi App.jsx saat ini)
   - Route "/statistik" → komponen Statistik
   - Tambah navigasi sederhana: Link ke "/" dan "/statistik"

3. Buat src/pages/Beranda.jsx:
   - Pindahkan semua JSX dan state dari App.jsx ke sini
   - App.jsx hanya jadi router wrapper

4. Buat src/pages/Statistik.jsx:
   - Terima habits sebagai props dari App.jsx
   - Tampilkan:
     - Total habit
     - Habit sudah selesai
     - Habit belum selesai
     - Persentase penyelesaian (dengan progress bar CSS)
     - Daftar nama habit yang sudah selesai

5. Styling navigasi: dua link horizontal di atas halaman, link aktif bergaris bawah

Setelah selesai: npm run build harus sukses, kedua route bisa diakses.
```

---

*agents.md · Habit Tracker · Mini Project ReactJS*