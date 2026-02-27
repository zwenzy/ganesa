// frontend/app/panduan/page.tsx

export const metadata = {
  title: 'Panduan & Tata Tertib | Perpustakaan Ganesa',
};

export default function PanduanPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 w-full">
      <h1 className="text-4xl font-extrabold text-green-900 mb-12 text-center">Panduan & Tata Tertib</h1>

      {/* Tutorial Daftar Anggota */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          Cara Menjadi Anggota
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li><span className="font-semibold">Datang Langsung:</span> Kunjungi meja sirkulasi Perpustakaan Ganesa pada jam operasional.</li>
            <li><span className="font-semibold">Siapkan Identitas:</span> Membawa fotokopi KTP/Kartu Pelajar/KIA yang masih berlaku.</li>
            <li><span className="font-semibold">Isi Formulir:</span> Mengisi formulir pendaftaran yang disediakan oleh petugas.</li>
            <li><span className="font-semibold">Foto & Cetak:</span> Petugas akan mengambil foto untuk kartu anggota. Kartu bisa langsung dicetak dan digunakan hari itu juga.</li>
            <li><span className="font-semibold">Biaya:</span> Pendaftaran anggota <span className="text-green-700 font-bold">Gratis</span> (atau sesuai kebijakan perpustakaan).</li>
          </ol>
        </div>
      </section>

      {/* Tata Tertib */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          Tata Tertib Perpustakaan
        </h2>
        <div className="bg-red-50 border border-red-100 rounded-xl p-6 shadow-sm">
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Pengunjung wajib mengisi buku tamu (digital/manual) sebelum masuk area perpustakaan.</li>
            <li>Dilarang membawa makanan berat dan minuman berwarna ke dalam ruang baca utama.</li>
            <li>Harap menjaga ketenangan dan tidak membuat kegaduhan.</li>
            <li>Tas dan jaket harap dititipkan di loker yang telah disediakan (membawa barang berharga menjadi tanggung jawab masing-masing).</li>
            <li>Buku yang selesai dibaca cukup diletakkan di atas meja, biar petugas yang mengembalikan ke rak.</li>
            <li>Keterlambatan pengembalian buku akan dikenakan sanksi/denda sesuai ketentuan yang berlaku.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}