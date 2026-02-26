// frontend/app/page.tsx
import Hero from './components/Hero';

async function getEvents() {
  const res = await fetch('http://127.0.0.1:8000/api/kegiatan/events/', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

async function getGaleri() {
  const res = await fetch('http://127.0.0.1:8000/api/kegiatan/galeri/', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

async function getRekomendasi() {
  const res = await fetch('http://127.0.0.1:8000/api/kegiatan/rekomendasi/', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const events = await getEvents();
  const galeri = await getGaleri();
  const rekomendasi = await getRekomendasi();
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* 1. Bagian Hero */}
      <Hero />

      {/* 2. Bagian Agenda Kegiatan */}
      <section id="kegiatan" className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-8 border-l-4 border-orange-600 pl-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900 italic">Agenda Mendatang</h2>
            <p className="text-gray-500">Ikuti keseruan kegiatan di Perpustakaan Ganesa</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.length > 0 ? events.map((event: any) => (
            <div key={event.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.poster?.startsWith('http') ? event.poster : `http://127.0.0.1:8000${event.poster}`} 
                  alt={event.judul}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-green-800 shadow-sm">
                  {new Date(event.tanggal).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">{event.judul}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{event.deskripsi}</p>
                <button className="text-green-800 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Lihat Detail <span>→</span>
                </button>
              </div>
            </div>
          )) : <p className="text-gray-500 italic">Belum ada agenda terdekat.</p>}
        </div>
      </section>

      {/* ================= BAGIAN REKOMENDASI BUKU ================= */}
      <section className="max-w-7xl mx-auto px-4 w-full mt-12 mb-12">
        <div className="flex justify-between items-end mb-8 border-l-4 border-orange-600 pl-4">
          <div>
            <h2 className="text-3xl font-bold text-green-900 italic">Pilihan Pustakawan</h2>
            <p className="text-gray-500">10 Buku rekomendasi terbaik minggu ini</p>
          </div>
        </div>

        {/* Gunakan overflow-x-auto agar bisa di-scroll ke samping (Carousel sederhana) */}
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
          {rekomendasi.length > 0 ? rekomendasi.map((buku: any) => (
            <div key={buku.id} className="min-w-[250px] max-w-[250px] bg-white rounded-xl shadow-md border border-gray-100 flex-shrink-0 snap-start overflow-hidden hover:shadow-xl transition-all">
              {/* Logika Gambar: Cek apakah pakai cover lokal atau URL dari LibraryThing */}
              <div className="h-60 bg-gray-100 relative">
                <img 
                  src={
                    buku.cover_lokal 
                      ? (buku.cover_lokal.startsWith('http') ? buku.cover_lokal : `http://127.0.0.1:8000${buku.cover_lokal}`) 
                      : (buku.cover_url || '/placeholder-book.png') // Fallback jika tidak ada gambar
                  } 
                  alt={buku.judul}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg line-clamp-1" title={buku.judul}>{buku.judul}</h3>
                <p className="text-sm text-green-700 font-medium mb-2">{buku.penulis}</p>
                <p className="text-xs text-gray-600 line-clamp-3 mb-4">{buku.ulasan}</p>
                <button className="w-full bg-green-50 text-green-800 text-sm font-bold py-2 rounded hover:bg-green-800 hover:text-white transition-colors">
                  Detail Buku
                </button>
              </div>
            </div>
          )) : (
            <p className="text-gray-500 italic">Belum ada rekomendasi buku saat ini.</p>
          )}
        </div>
      </section>

      {/* 3. Bagian Galeri */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-8 border-l-4 border-green-800 pl-4 text-right flex-row-reverse">
          <div>
            <h2 className="text-3xl font-bold text-green-900 italic">Momen Berharga</h2>
            <p className="text-gray-500 text-right">Dokumentasi kegiatan yang telah terlaksana</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galeri.map((item: any) => (
            <div key={item.id} className="relative group aspect-square rounded-xl overflow-hidden bg-gray-200">
              <img 
                src={item.foto?.startsWith('http') ? item.foto : `http://127.0.0.1:8000${item.foto}`} 
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <p className="text-white text-center text-xs font-medium italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}