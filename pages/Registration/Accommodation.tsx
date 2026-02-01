
import React from 'react';

const Accommodation: React.FC = () => {
  const categories = [
    {
      title: "Hoteles de gama media y alta",
      hotels: [
        { name: "Áurea Convento Capuchinos (5★)", price: "desde 121 €" },
        { name: "Parador de Segovia (4★)", price: "desde 108 €" },
        { name: "Hotel Cándido (4★)", price: "desde 90 €" },
        { name: "Eurostars Plaza Acueducto (4★)", price: "desde 128 €" },
        { name: "Hotel Real Segovia (4★)", price: "desde 75 €" }
      ]
    },
    {
      title: "Hoteles céntricos y boutique",
      hotels: [
        { name: "Hotel Cetina Palacio Ayala Berganza (4★)", price: "desde 74 €" },
        { name: "Infanta Isabel Hotel (3★)", price: "desde 62 €" },
        { name: "Hotel San Antonio El Real (4★)", price: "desde 87 €" },
        { name: "Exe Casa de los Linajes (3★)", price: "desde 63 €" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">7.2 Accommodation</h1>
        <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
      </div>

      <div className="space-y-16">
        {categories.map((cat, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-2">{cat.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.hotels.map((hotel, j) => (
                <div key={j} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-1">{hotel.name}</h4>
                  <p className="text-sm text-blue-600 font-bold mb-4">{hotel.price}</p>
                  <button className="text-xs uppercase tracking-widest font-bold text-slate-400 border border-slate-200 px-4 py-2 rounded hover:bg-slate-50 transition-colors">Booking info coming soon</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
