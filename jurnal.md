```md
# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** Haidar Idris Asy Syafiq  
**Kelas:** 11B  
**Nama Proyek:** Crypto Watchlist,Penghitung Hafalan,Palet card,dan Habit tracker

---

# 1. Definisi Stack & Arsitektur

## Deskripsi

Jelaskan perencanaan tingkat tinggi (high-level planning) dari aplikasimu sebelum mulai menulis kode. Seorang arsitek perangkat lunak harus mengetahui alat yang digunakan serta bagaimana setiap alat tersebut ditematkan dalam struktur aplikasi.

## Teknologi yang Digunakan

- Lingkungan Pengembangan: ReactJS dengan Vite
- Routing: react-router-dom
- Styling: CSS Murni / CSS Modules
- Manajemen State: useState dan localStorage
- AI Code Editor / LLM Assistant: (Contoh: Trae, ChatGPT, Claude, dan lain-lain)

## Alasan Pemisahan Komponen

Tuliskan alasan logis mengapa kamu membagi aplikasi menjadi beberapa komponen seperti Header, Footer, Card, atau komponen lainnya.

Jelaskan juga bagaimana struktur folder src/components yang kamu gunakan.

### Jawaban

Agar tidak ada benturan dari berbagai elemen yg ada dan meminimlisir error

---

# 2. Strategi Prompting

## Deskripsi

Vibecoding membutuhkan kemampuan berkomunikasi secara jelas dengan AI. Tuliskan satu atau dua prompt andalan yang kamu gunakan untuk membangun fitur yang cukup kompleks, misalnya saat menghubungkan localStorage dengan formulir kontak.

## Prompt 1 (Fokus pada Logika atau State)

### Prompt yang digunakan

> Saya Ingin Crypto List,dan Palet Card,dan Habit tracker dan Penghitung hafalan:
>
> dia berubah persis saat ada progress dari user yg menekan suatu tombol tanpa loading
>
> Data silahkan anda buat sendiri (Crypto dan pallete)
>
> Pisahkan antar element menjadi file jsx beserta css module nya menjadi module.css dan jsx pe sistem
>
> Alur saya dari Chat GPT Sbg penyedia prompt ke claude untuk membuat prd dan agents.md nya >>>> Claude sebgai pembuat prompt prd dan agents yg itu sudah meliputi apa saja yg saya jelaskan disini dan saya minta agar opencode saja yg menyelesaikan ini dalam masalah kode karena seluruh folder bisa dia modifikasi dan saya minta untuk fokus ke app.jsx >>>> i lalu baru saya minta opencode untuk memodifiksai sesuai prd dan agents.md tsb

## Prompt 2 (Fokus pada UI atau Routing)

### Prompt yang digunakan

> Buatkan saya prd dengan latar belakang sebagus anda dan ui terbaik anda/sesuai dgn wireframe yg saya berikan ini

## Hasil Evaluasi Prompt

Apakah AI langsung menghasilkan kode yang sesuai kebutuhan? Atau kamu perlu memperbaiki dan memperjelas prompt terlebih dahulu?

Jelaskan proses evaluasimu.

### Jawaban

[Tulis jawabanmu di sini.]

---

# 3. Log Problem Solving

## Deskripsi

Programmer belajar dari kesalahan dan proses pemecahan masalah. Ceritakan minimal satu masalah atau bug paling menantang yang kamu temui selama satu minggu pengerjaan proyek ini.

## Deskripsi Error atau Bug

Contoh: Data pesan pada formulir kontak hilang ketika halaman di-refresh.

### Jawaban

salin terminal dan beritahu saja apa yg salah

## Langkah Investigasi

Jelaskan bagaimana kamu mencari sumber masalah tersebut.

Contoh:

- Menggunakan console.log()
- Memeriksa data pada localStorage
- Menggunakan fitur Developer Tools di browser
- Membaca pesan error pada Console

### Jawaban

Alhamdulillah nyariiis takada karena semua terbaca dengan baik,mungkin saja untuk penjelsannya yg saya harus pelajari karena berhadapan dgn sistim baru yg sulit untuk ditiadakan

## Kolaborasi dengan AI

Jelaskan bagaimana kamu mengarahkan AI untuk membantu menemukan solusi.

### Jawaban

Alur saya dari Chat GPT Sbg penyedia prompt ke claude untuk membuat prd dan agents.md nya >>>> Claude sebgai pembuat prompt prd dan agents yg itu sudah meliputi apa saja yg saya jelaskan disini dan saya minta agar opencode saja yg menyelesaikan ini dalam masalah kode karena seluruh folder bisa dia modifikasi dan saya minta untuk fokus ke app.jsx >>>> i lalu baru saya minta opencode untuk memodifiksai sesuai prd dan agents.md tsb

## Solusi Akhir

Jelaskan logika penyelesaian masalah secara singkat tanpa hanya menyalin kode.

Contoh:

> "Ternyata saya harus menggunakan useEffect untuk mengambil data dari localStorage ketika komponen pertama kali dimuat sehingga data tetap tampil setelah halaman di-refresh."

### Jawaban

"Ternyata saya harus menggunakan useEffect untuk mengambil data dari localStorage ketika komponen pertama kali dimuat sehingga data tetap tampil setelah halaman di-refresh."

---

# 4. Refleksi Pribadi

## Deskripsi

Setelah satu minggu mengerjakan proyek ini dengan metode Vibecoding, pelajaran berharga apa yang kamu dapatkan mengenai peran manusia sebagai arsitek dan AI sebagai asisten pengetik?

Jelaskan bagaimana pengalaman tersebut memengaruhi cara pandangmu terhadap proses pengembangan perangkat lunak.

### Jawaban

Saya belajar arsitektur seperti ini sangatlah panjang untuk meraih hasil yg memuaskan
```
