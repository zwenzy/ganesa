// frontend/app/components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Teks Utama */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Jelajahi Lebih dari <span className="text-orange-400">11.000</span> Koleksi Ilmu
          </h1>
          <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
            Dari literasi anak hingga referensi akademik, Perpustakaan Ganesa hadir sebagai ruang kreatif dan pusat belajar masyarakat Sukoharjo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.librarything.com/profile/GanesaStudyCenter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg"
            >
              Cari Buku di Katalog
            </a>
            <Link 
              href="#kegiatan" 
              className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Lihat Agenda
            </Link>
          </div>
        </div>

        {/* Gambar/Elemen Visual */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl overflow-hidden">
             <div className="text-center p-8">
                <span className="text-6xl mb-4 block">📚</span>
                <p className="font-bold text-xl uppercase tracking-widest text-orange-300">Ganesa Study Center</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;