import { useState, useEffect } from "react";


import "./App.css";

const habitAwal = [
  { id: 1, nama: "Olahraga 30 menit", selesai: false },
  { id: 2, nama: "Baca buku 20 halaman", selesai: true },
  { id: 3, nama: "Minum air putih 8 gelas", selesai: false },
];

function App() {
  const [habits, setHabits] = useState(() => {
    try {
      const tersimpan = localStorage.getItem("habit-tracker-data");
      return tersimpan ? JSON.parse(tersimpan) : habitAwal;
    } catch {
      return habitAwal;
    }
  });
  const [inputNama, setInputNama] = useState("");

  useEffect(() => {
    localStorage.setItem("habit-tracker-data", JSON.stringify(habits));
  }, [habits]);

  const tambahHabit = () => {
    const nama = inputNama.trim();
    if (!nama) return;
    const habitBaru = { id: Date.now(), nama, selesai: false };
    setHabits(prev => [...prev, habitBaru]);
    setInputNama("");
  };

  const hapusHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  const toggleSelesai = (id) => {
    setHabits(prev =>
      prev.map(h => h.id === id ? { ...h, selesai: !h.selesai } : h)
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") tambahHabit();
  };

  const jumlahSelesai = habits.filter(h => h.selesai).length;

  return (
    <div className="app">
      <h1 className="judul"> Habit Tracker</h1>

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

      {habits.length > 0 && (
        <p className="ringkasan">
          {jumlahSelesai} dari {habits.length} habit selesai hari ini
        </p>
      )}

      <div className="daftar-habit">
        {habits.length === 0 ? (
          <p className="kosong">Belum ada habit. Tambahkan habit pertamamu! 🌱</p>
        ) : (
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
  );
}

export default App;
