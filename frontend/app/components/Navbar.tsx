// frontend/app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    // Memakai fixed, meratakan ke tengah, memberi efek blur (kaca), dan membuat ujungnya membulat
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <nav className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl shadow-green-900/5 rounded-full px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
              G
            </div>
            <span className="text-xl font-extrabold text-gray-800 tracking-tight">
              Perpus<span className="text-orange-500">Ganesa</span>
            </span>
          </Link>

          {/* Menu Link */}
          <div className="hidden md:flex space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all">Beranda</Link>
            <Link href="/profil" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all">Profil</Link>
            <Link href="/layanan" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all">Layanan</Link>
            <Link href="/panduan" className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all">Panduan</Link>
          </div>

          {/* Tombol Aksi */}
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Katalog Digital
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;