
import React from 'react';

const TouristInfo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">2.3 Tourist Info</h1>
        <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Top Attractions</h2>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-1/3 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1596701063300-47b29381657a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Aqueduct" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">1. Roman Aqueduct</h3>
                  <p className="text-sm text-slate-600 mt-2">Built in the 1st century, this engineering marvel has 167 arches and dominates Plaza del Azoguejo. Best views: Daytime for photos, nighttime when illuminated.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-1/3 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1541339907198-e08756eaa589?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Alcazar" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">2. Alcázar of Segovia</h3>
                  <p className="text-sm text-slate-600 mt-2">A fairy-tale castle that inspired Disney’s Snow White castle. Don’t miss the Tower of Juan II for panoramic views.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Local Cuisine</h2>
            <p className="text-slate-600 mb-6 italic">Segovia is a paradise for food lovers. Must-try dishes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-800">Cochinillo Asado</h4>
                <p className="text-xs text-slate-500 mt-1">Roast suckling pig – the city’s signature dish, cooked in wood-fired ovens.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-800">Judiones de La Granja</h4>
                <p className="text-xs text-slate-500 mt-1">Hearty bean stew with chorizo and pork.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-100 shadow-xl rounded-2xl p-8 sticky top-28">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Useful Links</h3>
            <ul className="space-y-4">
              {['Spain.info', 'Nomads Travel Guide', 'Tourist Checklist', 'Segovia Local Food Guide'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center text-blue-600 font-medium hover:underline text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfo;
