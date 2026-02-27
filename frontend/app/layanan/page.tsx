// frontend/app/layanan/page.tsx

export const metadata = {
  title: 'Layanan | Perpustakaan Ganesa',
};

export default function LayananPage() {
  const daftarLayanan = [
    { icon: '📚', title: 'Sirkulasi (Peminjaman & Pengembalian)', desc: 'Layanan peminjaman koleksi buku fisik untuk anggota terdaftar dengan batas waktu peminjaman 1 minggu.' },
    { icon: '📖', title: 'Ruang Baca Utama', desc: 'Area membaca yang nyaman, tenang, dan dilengkapi dengan meja diskusi serta akses stopkontak.' },
    { icon: '💻', title: 'Akses Internet / Komputer', desc: 'Fasilitas komputer dan Wi-Fi gratis untuk keperluan riset, tugas sekolah, atau penelusuran katalog.' },
    { icon: '🧸', title: 'Pojok Anak (Kids Corner)', desc: 'Area khusus anak-anak dengan koleksi buku bergambar, mainan edukatif, dan alas karpet yang aman.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">Layanan Perpustakaan</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai fasilitas untuk mendukung kegiatan literasi, riset, dan rekreasi edukatif bagi seluruh masyarakat.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {daftarLayanan.map((layanan, index) => (
          <div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">{layanan.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{layanan.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{layanan.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}