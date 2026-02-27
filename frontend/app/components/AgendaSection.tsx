// frontend/app/components/AgendaSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link'; // Wajib di-import!

export default function AgendaSection({ initialEvents }: { initialEvents: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = initialEvents.filter((event) =>
    event.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.deskripsi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="kegiatan" className="max-w-7xl mx-auto px-4 w-full mt-24 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Agenda <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Mendatang</span>
          </h2>
          <p className="text-gray-500 text-lg">Jangan lewatkan keseruan di ruang kreatif kita.</p>
        </div>
        
        <div className="w-full md:w-80 relative group">
          <input
            type="text"
            placeholder="Cari kegiatan literasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-6 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all shadow-sm text-gray-700 font-medium"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event: any, index: number) => {
            const isFeatured = index === 0;

            return (
              <div 
                key={event.id} 
                className={`group relative rounded-3xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${
                  isFeatured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                <img 
                  src={event.poster?.startsWith('http') ? event.poster : `http://127.0.0.1:8000${event.poster}`} 
                  alt={event.judul}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity"></div>

                <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-sm">
                  {new Date(event.tanggal).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                  <h3 className={`font-bold text-white mb-2 leading-tight group-hover:text-green-300 transition-colors ${
                    isFeatured ? 'text-2xl md:text-3xl line-clamp-2' : 'text-xl line-clamp-1'
                  }`}>
                    {event.judul}
                  </h3>
                  <p className={`text-gray-300 font-medium ${
                    isFeatured ? 'text-base line-clamp-2 mb-6' : 'hidden' 
                    }`}>
                    {event.deskripsi}
                </p>
                  
                  {/* INI KUNCI UTAMANYA: Menggunakan Link dan ID dari Database */}
                  <div>
                    <Link 
                      href={`/kegiatan/${event.id}`}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-500 hover:scale-110 transition-all duration-300"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <span className="text-5xl mb-4 block">👻</span>
            <p className="text-gray-500 font-medium text-lg">Waduh, kegiatan "{searchQuery}" nggak ketemu nih bro.</p>
          </div>
        )}
      </div>
    </section>
  );
}