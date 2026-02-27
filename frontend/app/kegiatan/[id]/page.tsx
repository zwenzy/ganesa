// frontend/app/kegiatan/[id]/page.tsx
import Link from 'next/link';

// Fungsi fetch dengan "Alat Pelacak" (Console Log)
async function getEventDetail(id: string) {
  const url = `http://127.0.0.1:8000/api/kegiatan/events/${id}/`;
  
  // Ini akan muncul di Terminal VS Code kamu biar kita tau dia nembak kemana
  console.log('--- MENCARI DATA KEGIATAN ---');
  console.log('Target URL:', url);

  try {
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) {
      console.log('🚨 GAGAL! Django menolak dengan status:', res.status);
      return null;
    }
    
    console.log('✅ BERHASIL! Data ditemukan.');
    return res.json();
  } catch (error) {
    console.log('🚨 ERROR JARINGAN:', error);
    return null;
  }
}

// Next.js versi terbaru butuh format Promise untuk params
export default async function DetailKegiatan({ params }: { params: Promise<{ id: string }> }) {
  // Tunggu params-nya siap (Fix untuk Next.js 14/15)
  const resolvedParams = await params;
  const eventId = resolvedParams.id;

  // Tarik data
  const event = await getEventDetail(eventId);

  // Jika gagal
  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center mt-20">
        <span className="text-6xl mb-4 text-gray-400">🕵️‍♂️</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Waduh, Gagal Ambil Data!</h1>
        <p className="text-gray-500 mb-6">Cek Terminal VS Code kamu untuk melihat errornya.</p>
        <Link href="/" className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Jika Berhasil
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 w-full mt-24">
      <Link href="/#kegiatan" className="inline-flex items-center gap-2 text-green-700 font-semibold mb-8 hover:text-green-900 transition-colors">
        <span>←</span> Kembali ke Daftar Agenda
      </Link>

      <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-xl border border-gray-100">
        <img 
          src={event.poster?.startsWith('http') ? event.poster : `http://127.0.0.1:8000${event.poster}`} 
          alt={event.judul}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 -mt-24 relative z-10 mx-4 md:mx-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-5 py-2 rounded-full font-bold text-sm shadow-sm">
            📅 {new Date(event.tanggal).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 px-5 py-2 rounded-full font-bold text-sm shadow-sm">
            ⏰ {
              // Menampilkan jam dan menit (misal: 09:00 WIB)
              new Date(event.tanggal).toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })
            } WIB
          </div>
        </div>
        
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
          {event.judul}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {event.deskripsi}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
        </div>
      </div>
    </div>
  );
}