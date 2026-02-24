// frontend/app/page.tsx

// 1. Fungsi mengambil data Event (Sudah ada)
async function getEvents() {
  const res = await fetch('http://127.0.0.1:8000/api/kegiatan/events/', { cache: 'no-store' });
  if (!res.ok) throw new Error('Gagal mengambil data event');
  return res.json();
}

// 2. TAMBAHAN: Fungsi mengambil data Galeri
async function getGaleri() {
  const res = await fetch('http://127.0.0.1:8000/api/kegiatan/galeri/', { cache: 'no-store' });
  if (!res.ok) throw new Error('Gagal mengambil data galeri');
  return res.json();
}

export default async function Home() {
  // Panggil kedua datanya di sini
  const events = await getEvents();
  const galeri = await getGaleri(); // <--- Data galeri dipanggil

  return (
    <main className="p-8 font-sans">
      
      {/* ================= BAGIAN AGENDA ================= */}
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Agenda Perpustakaan Ganesa
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: any) => (
          <div key={event.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white">
            {event.poster && (
              <img 
                src={event.poster.startsWith('http') ? event.poster : `http://127.0.0.1:8000${event.poster}`} 
                alt={event.judul} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
            )}
            <h2 className="text-xl font-bold text-gray-800">{event.judul}</h2>
            <p className="text-sm font-semibold text-orange-600 mb-2">
              {new Date(event.tanggal).toLocaleDateString('id-ID', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
            <p className="text-gray-600 text-sm line-clamp-3">{event.deskripsi}</p>
          </div>
        ))}
      </div>

      {/* ================= BAGIAN GALERI ================= */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-green-800 border-t pt-8">
        Galeri Kegiatan
      </h2>

      {/* Grid untuk galeri biasanya lebih kecil-kecil (banyak kolom) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galeri.map((item: any) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
            {item.foto && (
              <img 
                // Sama seperti event, kita tambahkan penanganan link gambar
                src={item.foto.startsWith('http') ? item.foto : `http://127.0.0.1:8000${item.foto}`} 
                alt={item.caption || 'Foto Dokumentasi'} 
                className="w-full h-40 object-cover" 
              />
            )}
            {item.caption && (
              <p className="p-2 text-sm text-center text-gray-700 bg-gray-50 font-medium">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>

    </main>
  );
}