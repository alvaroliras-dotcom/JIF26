import React from "react";

type Member = {
  name: string;
  affiliation: string;
  title?: string; // cargo (si falta, ponemos placeholder)
  photo: string;
};

const InternationalCommittee: React.FC = () => {
  const PLACEHOLDER_TITLE = "Lorem ipsum — title pending";

  const members: Member[] = [
    {
      name: "Marta Liras",
      affiliation: "IMDEA Energía",
      title: "Senior Researcher",
      photo: "/assets/ponentes/marta-liras.jpg",
    },
    {
      name: "Raúl Pérez-Ruiz",
      affiliation: "Universitat Politècnica de València",
      title: "Associate Professor of Organic Chemistry",
      photo: "/assets/ponentes/raul-perez-ruiz-01.jpg",
    },
    {
      name: "João C. Lima",
      affiliation: "Universidade NOVA de Lisboa",
      // En el Word no viene cargo: dejamos placeholder
      title: PLACEHOLDER_TITLE,
      photo: "/assets/ponentes/joao-sergio.jpg",
    },
    {
      name: "João Pina",
      affiliation: "Universidade de Coimbra",
      title: "Assistant Professor of Physical-Chemistry",
      photo: "/assets/ponentes/joao-pina.jpg",
    },
    {
      name: "Olivier Soppera",
      affiliation: "Université de Haute-Alsace / CNRS",
      // En el Word no viene cargo: dejamos placeholder
      title: PLACEHOLDER_TITLE,
      photo: "/assets/ponentes/ilivier-soppera.jpg",
    },
    {
      name: "Nathan D. McClenaghan",
      affiliation: "Université de Bordeaux / CNRS",
      title: "CNRS Research Director",
      photo: "/assets/ponentes/nathan-mcClenaghan.jpg",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-20 text-center">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
            Committees
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            International Organizing Committee
          </h1>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </div>

        {/* 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((m) => (
            <article
              key={m.name}
              className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition overflow-hidden"
            >
              {/* Foto */}
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
              </div>

              {/* Texto (orden Word: institución -> cargo) */}
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  {m.name}
                </h3>

                <p className="mt-3 text-sm font-black text-slate-800 leading-snug">
                  {m.affiliation}
                </p>

                <p
                  className={`mt-2 text-sm font-medium leading-relaxed ${
                    m.title === PLACEHOLDER_TITLE ? "text-amber-700" : "text-slate-600"
                  }`}
                >
                  {m.title || PLACEHOLDER_TITLE}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalCommittee;
