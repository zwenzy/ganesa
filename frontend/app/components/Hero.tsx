// frontend/app/components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gray-50">
      {/* Efek Cahaya (Glow) di Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-400/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Badge ala Startup */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-800 text-sm font-bold shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          Terintegrasi dengan 11.000+ Koleksi LibraryThing
        </div>

        {/* Teks Utama dengan Gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Eksplorasi Dunia Lewat <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
            Satu Pintu Literasi
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Ruang kreatif dan pusat belajar masyarakat Sukoharjo. Temukan referensi akademik, literasi anak, hingga kegiatan seru akhir pekan.
        </p>
        
        {/* Tombol Modern */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="https://www.librarything.com/profile/GanesaStudyCenter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-green-900/20 hover:-translate-y-1"
          >
            Mulai Cari Buku <span>📚</span>
          </a>
          <Link 
            href="#kegiatan" 
            className="flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold transition-all shadow-sm hover:-translate-y-1"
          >
            Lihat Agenda <span>👇</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;