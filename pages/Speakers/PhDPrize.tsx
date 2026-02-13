import React from "react";

type Winner = {
  year: "2023" | "2024" | "2025";
  name: string;
  affiliation: string;
  thesisTitle: string;
  photo?: string; // /public...
  status?: "confirmed" | "pending";
};

const PhDPrize: React.FC = () => {
  // Si alguna foto no existe, déjala sin "photo" y saldrá placeholder.
  const winners: Winner[] = [
    {
      year: "2023",
      name: "Dra. Eva Vos",
      affiliation: "Universidad Autónoma de Madrid",
      thesisTitle:
        "The impact of oxo functionalization in the photophysics and photochemistry of nucleobases: implications in prebiotic chemistry and the current composition of nucleic acids",
      // photo: "/assets/ponentes/eva-vos.jpg",
      status: "pending",
    },
    {
      year: "2024",
      name: "Dr. Jaume R. Otaegui Rabanal",
      affiliation: "Universitat Autònoma de Barcelona",
      thesisTitle:
        "New optical systems based on organic phase change materials: from fluorochromic inks and sensors to smart windows",
      // photo: "/assets/ponentes/jaume-otaegui.jpg",
      status: "confirmed",
    },
    {
      year: "2025",
      name: "Dr. Javier Carmona García",
      affiliation: "Universitat de València",
      thesisTitle:
        "Atmospheric chemistry of mercury and sulfur induced by sunlight: Quantum-chemical modelling and environmental implications",
      // photo: "/assets/ponentes/javier-carmona.jpg",
      status: "confirmed",
    },
  ];

  const initials = (name: string) => {
    const parts = name.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
    const first = parts[0]?.[0] ?? "P";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
            Awards
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Best PhD Thesis Prize (GRUFO)
          </h1>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {winners.map((w) => (
            <article
              key={w.year}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />

              <div className="p-10">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                      Year
                    </p>
                    <p className="mt-2 text-5xl font-black tracking-tight text-slate-900">
                      {w.year}
                    </p>
                  </div>

                  {w.status ? (
                    <span
                      className={`mt-1 inline-flex items-center justify-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.22em] border ${
                        w.status === "pending"
                          ? "bg-amber-50 border-amber-200 text-amber-700"
                          : "bg-emerald-50 border-emerald-200 text-emerald-700"
                      }`}
                    >
                      {w.status === "pending" ? "Pending" : "Confirmed"}
                    </span>
                  ) : null}
                </div>

                {/* Photo (600x600 => aspect-square) */}
                <div className="mt-8 rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                  <div className="relative aspect-square">
                    {w.photo ? (
                      <img
                        src={w.photo}
                        alt={w.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-950 text-white">
                        <div className="text-5xl font-black">{initials(w.name)}</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="mt-8 text-2xl font-black text-slate-900 tracking-tight">
                  {w.name}
                </h3>
                <p className="mt-3 text-sm font-black text-slate-800 leading-snug">
                  {w.affiliation}
                </p>

                {/* Thesis title */}
                <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                    Thesis title
                  </p>
                  <p className="mt-3 text-slate-700 font-medium leading-relaxed">
                    “{w.thesisTitle}”
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Winners are listed by year. Details may be updated if needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhDPrize;
