# EXPLAIN.md — Habit Tracker

Penjelasan konsep React yang dipakai di project Habit Tracker, disertai contoh kode langsung dari project ini.

---

## 1. useState — State di React

**State** adalah "memori" komponen. Data biasa (`let x = 1`) tidak bisa memicu ulang render, sedangkan state bisa.

### Cara pakai

```js
const [habits, setHabits] = useState([]);
const [inputNama, setInputNama] = useState("");
```

- `habits` — nilai state saat ini (array data habit)
- `setHabits` — fungsi untuk mengubah state, otomatis me-render ulang komponen
- `inputNama` — state untuk menampung teks dari input form

### Kenapa state dibutuhkan?

Tanpa state, perubahan data tidak akan tampak di layar. Setiap kali `setHabits` dipanggil, React menjalankan ulang komponen dengan data baru.

---

## 2. .map() untuk Render List

`.map()` mengubah setiap item array menjadi elemen JSX.

### Contoh dari project

```js
habits.map((habit) => (
  <div key={habit.id} className="card">
    <span className="nama-habit">{habit.nama}</span>
  </div>
))
```

Setiap habit diubah jadi `<div className="card">`. Hasilnya langsung dirender di dalam JSX.

### Kenapa `key` wajib?

`key` membantu React melacak setiap elemen — mana yang ditambah, dihapus, atau berubah. Jika `key` tidak unik, React bisa salah meng-update DOM. Di sini kita pakai `habit.id` yang selalu unik.

---

## 3. .filter() untuk Hapus Item

`.filter()` membuat array baru berisi elemen yang lolos syarat tertentu.

### Contoh dari project — `hapusHabit`

```js
const hapusHabit = (id) => {
  setHabits(prev => prev.filter(h => h.id !== id));
};
```

Cara kerja:
1. Ambil array `prev` (state habits saat ini)
2. Filter: hanya pertahankan habit yang `id`-nya *tidak sama* dengan `id` yang diklik
3. Simpan hasilnya sebagai state baru

Karena `.filter()` tidak mengubah array asli, ini aman untuk React (immutable).

---

## 4. Spread Operator untuk Tambah Item

Spread operator (`...`) menyalin semua isi array ke array baru.

### Contoh dari project — `tambahHabit`

```js
const habitBaru = { id: Date.now(), nama, selesai: false };
setHabits(prev => [...prev, habitBaru]);
```

### Kenapa tidak boleh `push` langsung?

```js
prev.push(habitBaru);  // ❌ SALAH — mutasi array asli
```

React tidak akan mendeteksi perubahan karena array yang sama diubah langsung. Spread operator membuat **array baru**, sehingga React tahu data berubah dan me-render ulang.

---

## 5. localStorage — Data Tetap Setelah Refresh

`localStorage` menyimpan data di browser dalam bentuk string (key-value).

### Membaca saat inisialisasi (lazy init)

```js
const [habits, setHabits] = useState(() => {
  try {
    const tersimpan = localStorage.getItem("habit-tracker-data");
    return tersimpan ? JSON.parse(tersimpan) : habitAwal;
  } catch {
    return habitAwal;
  }
});
```

- `useState(() => ...)` — fungsi dijalankan sekali saat komponen pertama kali dibuat
- `localStorage.getItem("habit-tracker-data")` — ambil data yang tersimpan
- `JSON.parse()` — ubah string JSON kembali ke array JavaScript
- Jika gagal, gunakan `habitAwal` sebagai cadangan

### Menyimpan dengan useEffect

```js
useEffect(() => {
  localStorage.setItem("habit-tracker-data", JSON.stringify(habits));
}, [habits]);
```

- Setiap kali `habits` berubah, `useEffect` menjalankan callback
- `JSON.stringify()` — ubah array jadi string JSON
- `localStorage.setItem()` — simpan ke browser

### Kenapa JSON.stringify/parse?

localStorage hanya bisa menyimpan string. Array JavaScript harus diubah ke string dulu (`stringify`), dan saat dibaca dikembalikan ke array lagi (`parse`).

---

## 6. Event Handler — onClick, onChange, onKeyDown

Event handler adalah fungsi yang dipanggil saat pengguna berinteraksi.

### onClick — tombol tambah

```js
<button className="btn-tambah" onClick={tambahHabit}>
  + Tambah
</button>
```

Saat tombol diklik, fungsi `tambahHabit` dijalankan.

### onChange — input teks

```js
<input
  value={inputNama}
  onChange={(e) => setInputNama(e.target.value)}
/>
```

Setiap kali pengguna mengetik, nilai input disimpan ke state `inputNama` melalui `e.target.value`.

### onKeyDown — tekan Enter

```js
<input onKeyDown={handleKeyDown} />

const handleKeyDown = (e) => {
  if (e.key === "Enter") tambahHabit();
};
```

Jika tombol yang ditekan adalah "Enter", habit langsung ditambahkan tanpa perlu klik tombol.

---

## 7. Conditional Rendering — Tampilkan Sesuai Kondisi

JSX bisa menampilkan konten berbeda berdasarkan kondisi.

### Ternary operator — daftar habit vs pesan kosong

```js
{habits.length === 0 ? (
  <p className="kosong">Belum ada habit. Tambahkan habit pertamamu! 🌱</p>
) : (
  habits.map((habit) => ( ... ))
)}
```

Jika `habits` kosong, tampilkan pesan. Jika ada isinya, render daftar card.

### Logical AND (&&) — ringkasan

```js
{habits.length > 0 && (
  <p className="ringkasan">
    {jumlahSelesai} dari {habits.length} habit selesai hari ini
  </p>
)}
```

Hanya tampilkan ringkasan jika ada minimal satu habit.

### Class dinamis — card selesai

```js
className={`card ${habit.selesai ? "selesai" : ""}`}
```

Jika `habit.selesai` true, tambahkan class `selesai` yang mengubah tampilan card (hijau muda + teks dicoret).

---

## Ringkasan

| Konsep | Dipakai di | Tujuan |
|---|---|---|
| `useState` | `habits`, `inputNama` | Menyimpan data dan memicu render ulang |
| `.map()` | Render daftar habit | Mengubah array jadi elemen JSX |
| `.filter()` | `hapusHabit` | Membuat array baru tanpa item tertentu |
| Spread operator | `tambahHabit` | Menyalin array lama + item baru (immutable) |
| `localStorage` | Inisialisasi + `useEffect` | Data tetap ada setelah refresh |
| Event handler | `onClick`, `onChange`, `onKeyDown` | Menangani interaksi pengguna |
| Conditional rendering | Empty state, ringkasan, class dinamis | Menampilkan konten sesuai kondisi |
