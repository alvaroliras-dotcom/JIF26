
import React from 'react';

const HowToGet: React.FC = () => {
  const TransportCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
      <div className="p-4 bg-slate-50 text-blue-600 rounded-2xl inline-block mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h4 className="font-black text-slate-900 text-xl mb-6 uppercase tracking-tight">{title}</h4>
      <div className="text-sm text-slate-500 space-y-4 font-medium leading-relaxed">{children}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Travel Information</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">How to get to Segovia</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-32">
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight shrink-0">From Madrid-Barajas Airport (MAD)</h2>
            <div className="h-px bg-slate-200 grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TransportCard 
              title="By Train" 
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
            >
              <p><strong>Duration:</strong> ~1 h 03 min (including transfer).</p>
              <p><strong>Route:</strong> From T4, take Renfe Cercanías C1 or C10 to Madrid Chamartín, then take Renfe Avant or AVE to Segovia Guiomar.</p>
              <p><strong>Price:</strong> €10–€50 depending on class.</p>
            </TransportCard>
            <TransportCard 
              title="By Bus" 
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            >
              <p><strong>Duration:</strong> ~2 h 10 min (with transfers).</p>
              <p><strong>Route:</strong> From airport to Madrid Moncloa, then Avanza bus to Segovia.</p>
              <p><strong>Note:</strong> No direct airport-to-Segovia bus service.</p>
            </TransportCard>
            <TransportCard 
              title="Private Transfer" 
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>}
            >
              <p><strong>Duration:</strong> ~1 h 15 min.</p>
              <p><strong>Price:</strong> €120–€150 for standard taxi or pre-booked shuttle.</p>
            </TransportCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight shrink-0">From Madrid City Center</h2>
            <div className="h-px bg-slate-200 grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <TransportCard 
              title="Fast Train (AVE)" 
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            >
              <p><strong>Duration:</strong> 25–30 min on high-speed AVE/Avant.</p>
              <p><strong>Departure:</strong> Madrid Chamartín Station.</p>
              <p><strong>Arrival:</strong> Segovia Guiomar Station (~6 km from city center).</p>
            </TransportCard>
            <TransportCard 
              title="Direct Bus" 
              icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
            >
              <p><strong>Duration:</strong> ~1 h 15–1 h 30 min.</p>
              <p><strong>Departure:</strong> Moncloa Bus Station.</p>
              <p><strong>Arrival:</strong> Segovia Bus Station (walking distance to Aqueduct).</p>
            </TransportCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToGet;
