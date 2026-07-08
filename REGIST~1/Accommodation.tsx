import React from "react";

type Provider = "booking" | "kayak" | "expedia" | "buviba";

type HotelItem = {
  name: string;
  price: string;
  provider: Provider;
};

const Accommodation: React.FC = () => {
  // Helpers: links a búsquedas en cada plataforma (más estable que URLs “de hotel”)
  const providerMeta: Record<
    Provider,
    { label: string; baseColorClass: string; buildUrl: (q: string) => string }
  > = {
    booking: {
      label: "booking.com",
      baseColorClass: "text-emerald-700",
      buildUrl: (q) =>
        `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(q)}`,
    },
    kayak: {
      label: "kayak.es",
      baseColorClass: "text-orange-700",
      // Kayak es más sensible con URLs. Usamos búsqueda genérica por destino + keyword.
      buildUrl: (q) =>
        `https://www.kayak.es/hotels/Segovia,Spain?keywords=${encodeURIComponent(q)}`,
    },
    expedia: {
      label: "expedia.com",
      baseColorClass: "text-indigo-700",
      buildUrl: (q) =>
        `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(
          "Segovia, Castile and Leon, Spain"
        )}&keyword=${encodeURIComponent(q)}`,
    },
    buviba: {
      label: "buviba.com",
      baseColorClass: "text-slate-700",
      buildUrl: (q) =>
        `https://www.buviba.com/?s=${encodeURIComponent(q)}`,
    },
  };

  const categories: Array<{ title: string; subtitle?: string; hotels: HotelItem[] }> = [
    {
      title: "Hoteles de gama media y alta",
      hotels: [
        { name: "Áurea Convento Capuchinos (5★)", price: "desde 121 €", provider: "booking" },
        { name: "Parador de Segovia (4★)", price: "desde 108 €", provider: "kayak" },
        { name: "Hotel Cándido (4★)", price: "desde 90 €", provider: "expedia" },
        { name: "Eurostars Plaza Acueducto (4★)", price: "desde 128 €", provider: "kayak" },
        { name: "Hotel Real Segovia (4★)", price: "desde 75 €", provider: "booking" },
      ],
    },
    {
      title: "Hoteles céntricos y boutique",
      hotels: [
        { name: "Hotel Cetina Palacio Ayala Berganza (4★)", price: "desde 74 €", provider: "expedia" },
        { name: "Infanta Isabel Hotel (3★)", price: "desde 62 €", provider: "expedia" },
        { name: "Hotel San Antonio El Real (4★)", price: "desde 87 €", provider: "booking" },
        { name: "Exe Casa de los Linajes (3★)", price: "desde 63 €", provider: "booking" },
      ],
    },
    {
      title: "Opciones económicas",
      subtitle: "Hoteles económicos, hostales y pensiones",
      hotels: [
        { name: "Hotel Avenida del Sotillo", price: "desde 60 €", provider: "kayak" },
        { name: "Hotel Venta Magullo", price: "desde 66 €", provider: "kayak" },
        { name: "Hostales y pensiones (Don Jaime, Plaza Segovia, etc.)", price: "desde 25 €", provider: "buviba" },
      ],
    },
  ];

  const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-80" />
      <div className="p-8">{children}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      {/* Header */}
      <div className="mb-14 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
          Travel
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Accommodation
        </h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                {cat.title}
              </h2>
              {cat.subtitle && (
                <p className="text-slate-600">{cat.subtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cat.hotels.map((hotel) => {
                const meta = providerMeta[hotel.provider];
                // Búsqueda: hotel + Segovia (para que el resultado sea más directo)
                const query = `${hotel.name} Segovia`;
                const url = meta.buildUrl(query);

                return (
                  <Card key={hotel.name}>
                    <h3 className="font-black text-slate-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="text-sm font-black text-blue-600">
                        {hotel.price}
                      </p>

                      <span className={`text-xs font-black uppercase tracking-[0.22em] ${meta.baseColorClass}`}>
                        {meta.label}
                      </span>
                    </div>

                    <div className="mt-6">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3 rounded-2xl bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-800 transition"
                      >
                        Ver opciones
                      </a>

                      <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                        Se abrirá una búsqueda en {meta.label} para <strong>Segovia</strong>.
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
