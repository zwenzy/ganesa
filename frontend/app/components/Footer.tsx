// frontend/app/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Tentang */}
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-4">Perpustakaan Ganesa</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pusat literasi dan ruang kreatif komunitas untuk mewujudkan masyarakat yang cerdas dan berbudaya.
            </p>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-4">Lokasi</h3>
            <p className="text-gray-600 text-sm italic">
              Sukoharjo, Jawa Tengah <br />
              Indonesia
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-4">Kontak</h3>
            <p className="text-gray-600 text-sm">Email: info@perpusganesa.com</p>
            <p className="text-gray-600 text-sm mt-1">WA: +62 8xx xxxx xxxx</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 Perpustakaan Ganesa. Built with Django & Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;