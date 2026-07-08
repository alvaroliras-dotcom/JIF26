import React from "react";

const Venue: React.FC = () => {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Campus%20Mar%C3%ADa%20Zambrano%20Segovia%2C%20Plaza%20de%20la%20Universidad%201%2C%2040005%20Segovia%2C%20Spain";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.4em] mb-4 text-slate-500">
          Congress Location
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Venue
        </h1>
        <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* LEFT: Text + Address + Photos */}
        <div className="space-y-10">
          <div className="prose prose-xl text-slate-600 max-w-none leading-relaxed">
            <p>
              We are thrilled to announce that the IX Jornadas Ibéricas de
              Fotoquímica (IX JIF) will take place at the{" "}
              <strong>Campus María Zambrano Segovia</strong>, one of the most
              innovative campuses in Spain and nestled in the heart of Segovia,
              a UNESCO World Heritage city.
            </p>
          </div>

          {/* Address card */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-inner">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 flex items-center text-slate-700">
              <svg
                className="w-5 h-5 mr-3 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Postal Address
            </h3>

            <address className="not-italic text-slate-800 space-y-1 font-medium">
              <p className="text-2xl font-black text-slate-900">Salón de Actos</p>
              <p>Campus María Zambrano Segovia</p>
              <p>Plaza de la Universidad, 1</p>
              <p>40005, Segovia, Spain</p>
            </address>

            <div className="mt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Photos (2-up) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exterior */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group border-8 border-white bg-slate-100">
              <img
                src="/assets/otras/campus-maria-zambrano-exterior.jpg"
                alt="Campus María Zambrano Segovia (Exterior)"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <p className="absolute bottom-5 left-6 text-white font-black uppercase tracking-widest text-xs">
                Exterior
              </p>
            </div>

            {/* Interior / Hall */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group border-8 border-white bg-slate-100">
              <img
                src="/assets/otras/campus-maria-zambrano-interior.jpg"
                alt="Campus María Zambrano Segovia (Interior)"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <p className="absolute bottom-5 left-6 text-white font-black uppercase tracking-widest text-xs">
                Interior
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Demonstration card / map info (clean) */}
        <div className="h-full min-h-[600px] bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center relative overflow-hidden shadow-2xl">
          {/* Decorative spectrum top line (coherente con Home) */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
          <div className="absolute inset-0 spectrum-overlay opacity-10 pointer-events-none"></div>

          <div className="text-center z-10 px-12 py-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white max-w-sm">
            <div className="bg-slate-900 p-5 rounded-full shadow-lg mb-8 inline-block text-white">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Interactive Map
            </h4>
            <p className="text-slate-500 font-medium mb-8">
              Detailed floor plans and navigation will be available soon.
            </p>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Clean background */}
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
        </div>
      </div>
    </div>
  );
};

export default Venue;
