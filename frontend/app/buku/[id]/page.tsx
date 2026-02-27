// frontend/app/buku/[id]/page.tsx
import Link from 'next/link';

// Fungsi narik data spesifik 1 buku dari Django
async function getBukuDetail(id: string) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/kegiatan/rekomendasi/${id}/`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function DetailBuku({ params }: { params: Promise<{ id: string }> }) {
  // Tunggu params-nya siap (wajib di Next.js 15)
  const resolvedParams = await params;
  const buku = await getBukuDetail(resolvedParams.id);

  if (!buku) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center mt-20">
        <span className="text-6xl mb-4 text-gray-400">📚</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Buku Tidak Ditemukan</h1>
        <p className="text-gray-500 mb-6">Mungkin buku ini sudah ditarik dari daftar rekomendasi.</p>
        <Link href="/" className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Menentukan sumber gambar cover (lokal atau URL)
  const coverUtama = buku.cover_lokal 
    ? (buku.cover_lokal.startsWith('http') ? buku.cover_lokal : `http://127.0.0.1:8000${buku.cover_lokal}`) 
    : (buku.cover_url || '/placeholder-book.png');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 w-full mt-24">
      <Link href="/#rekomendasi" className="inline-flex items-center gap-2 text-green-700 font-semibold mb-8 hover:text-green-900 transition-colors">
        <span>←</span> Kembali ke Beranda
      </Link>

      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10">
        
        {/* Kolom Kiri: Cover Buku */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[2/3] rounded-xl overflow-hidden shadow-2xl mb-6 bg-gray-100 border border-gray-200">
            <img 
              src={coverUtama} 
              alt={buku.judul}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-bold border border-green-200 w-full text-center">
            Pilihan Pustakawan
          </div>
        </div>

        {/* Kolom Kanan: Detail & Ulasan */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {buku.judul}
          </h1>
          
          <p className="text-xl text-gray-500 font-medium mb-8 border-b border-gray-100 pb-6">
            Karya <span className="text-green-700 font-bold">{buku.penulis}</span>
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            Sinopsis
          </h3>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg italic">
              "{buku.ulasan}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}