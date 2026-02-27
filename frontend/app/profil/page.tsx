// frontend/app/profil/page.tsx

export const metadata = {
  title: 'Profil | Perpustakaan Ganesa',
  description: 'Visi, misi, sejarah, dan profil Perpustakaan Ganesa.',
};

export default function ProfilPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">Tentang Kami</h1>
      
      {/* Visi Misi */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-800 shadow-sm">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Visi</h2>
          <p className="text-gray-700 leading-relaxed">
            Menjadi pusat literasi dan ruang kreatif komunitas yang inklusif untuk mewujudkan masyarakat Sukoharjo yang cerdas, berbudaya, dan melek informasi.
          </p>
        </div>
        <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-600 shadow-sm">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">Misi</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>Menyediakan koleksi bahan pustaka yang relevan dan terkini.</li>
            <li>Menyelenggarakan kegiatan literasi dan pemberdayaan masyarakat.</li>
            <li>Memberikan layanan informasi yang cepat, tepat, dan ramah.</li>
            <li>Menyediakan ruang diskusi dan belajar yang nyaman bagi semua kalangan.</li>
          </ul>
        </div>
      </div>

      {/* Denah & Lokasi */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-2">Lokasi & Denah</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center shadow-inner">
            {/* Nantinya bisa diganti dengan iframe Google Maps atau gambar denah */}
            <span className="text-gray-500 font-medium flex flex-col items-center">
              <span className="text-4xl mb-2">🗺️</span>
              [Peta / Google Maps Perpustakaan]
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Alamat Lengkap</h3>
            <p className="text-gray-600 mb-4">
              Jl. Raya Sukoharjo No. 123, Kecamatan Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Jam Operasional</h3>
            <ul className="text-gray-600 space-y-1">
              <li><span className="font-semibold">Senin - Jumat:</span> 08.00 - 16.00 WIB</li>
              <li><span className="font-semibold">Sabtu:</span> 09.00 - 14.00 WIB</li>
              <li><span className="font-semibold">Minggu & Libur Nasional:</span> Tutup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}