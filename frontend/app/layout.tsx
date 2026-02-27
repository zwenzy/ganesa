// frontend/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar'; // <--- Import Navbar
import Footer from './components/Footer'; // <--- Import Footer

export const metadata = {
  title: 'Perpustakaan Ganesa | Ruang Literasi Komunitas',
  description: 'Website resmi Perpustakaan Ganesa untuk informasi kegiatan dan layanan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      {/* Tambahkan flex dan min-h-screen agar Footer selalu di bawah */}
      <body className="bg-white min-h-screen flex flex-col font-sans text-gray-900">
        <Navbar />
        
        {/* Konten tiap halaman (page.tsx) akan masuk ke {children} ini */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}