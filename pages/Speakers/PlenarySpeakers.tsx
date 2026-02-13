import React from "react";

type Speaker = {
  code: "PL1" | "PL2" | "PL3";
  name: string;
  affiliation: string; // institución
  title: string; // cargo
  bio: string;
  photo?: string; // /public...
  isPlaceholder?: boolean;
};

const PlenarySpeakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      code: "PL1",
      name: "Dirk Guldi",
      affiliation: "Friedrich-Alexander University Erlangen-Nürnberg",
      title: "Professor of Chemistry",
      bio:
        "His research focuses on controlling photon and charge management in molecules and nanoscale materials. The group designs, synthesizes and characterizes novel nanometer-scale materials for solar energy conversion, optimizing charge separation/transport and recombination dynamics using advanced spectroscopic and microscopic techniques.",
      photo: "/assets/ponentes/dirk-guldi.jpg", // ajusta si tu archivo se llama distinto
    },
    {
      code: "PL2",
      name: "João Sérgio Seixas de Melo",
      affiliation: "University of Coimbra",
      title: "Associate Professor",
      bio:
        "Director of the Coimbra Chemistry Centre (since 2024) and leader of the Photochemistry Group at the University of Coimbra. His work spans fast reaction kinetics, laser-based photochemical studies and advanced photophysical processes, with extensive publication and supervision experience.",
      photo: "/assets/ponentes/joao-sergio-seixas-de-melo.jpg", // ajusta si tu archivo se llama distinto
    },
    {
      code: "PL3",
      name: "To be announced",
      affiliation: "Institution to be announced",
      title: "Lorem ipsum — title pending",
      bio:
        "This plenary lecture will be announced soon. The final speaker and abstract will be published once confirmed.",
      photo: "/assets/ponentes/pl3-placeholder.jpg", // opcional: si no existe, saldrá placeholder con iniciales
      isPlaceholder: true,
    },
  ];

  const getInitials = (name: string) => {
    const parts = name
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean);
    const first = parts[0]?.[0] ?? "P";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
            Distinguished Keynotes
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Plenary Lectures
          </h1>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </div>

        {/* Premium grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {speakers.map((s) => (
            <article
              key={s.code}
              className={`group rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl hover:shadow-2xl transition bg-white ${
                s.isPlaceholder ? "opacity-[0.92]" : ""
              }`}
            >
              {/* top spectrum line */}
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />

              <div className="p-10">
                {/* chip */}
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.28em] bg-slate-900 text-white">
                    {s.code}
                  </span>

                  {s.isPlaceholder ? (
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-700 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full">
                      Placeholder
                    </span>
                  ) : null}
                </div>

                {/* photo 600x600 */}
                <div className="mt-8 rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                  <div className="relative aspect-square">
                    {s.photo ? (
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-950 text-white">
                        <div className="text-5xl font-black">
                          {getInitials(s.name)}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                  </div>
                </div>

                {/* text: NAME -> AFFILIATION -> TITLE (como tú quieres) */}
                <h3 className="mt-8 text-2xl font-black text-slate-900 tracking-tight">
                  {s.name}
                </h3>

                <p className="mt-3 text-sm font-black text-slate-800 leading-snug">
                  {s.affiliation}
                </p>

                <p
                  className={`mt-2 text-sm font-medium leading-relaxed ${
                    s.isPlaceholder ? "text-amber-700" : "text-slate-600"
                  }`}
                >
                  {s.title}
                </p>

                <div className="mt-6">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {s.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Plenary lecture details will be updated as confirmations are received.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlenarySpeakers;
