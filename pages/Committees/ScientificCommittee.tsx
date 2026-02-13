import React from "react";

type Member = {
  name: string;
  affiliation: string;
  title: string;
  photo: string;
};

const ScientificCommittee: React.FC = () => {
  const members: Member[] = [
    {
      name: "María González-Bejar",
      affiliation: "Universitat de València",
      title: "Full Professor of Organic Chemistry",
      photo: "/assets/ponentes/maria-gonzalez-bejar.jpg",
    },
    {
      name: "Virginie Lhiaubet-Vallet",
      affiliation:
        "Instituto de Tecnología Química (CSIC-Universitat Politècnica de València)",
      title: "Scientific Researcher of Chemistry",
      photo: "/assets/ponentes/virginie-lhiaubet-vallet.jpg",
    },
    {
      name: "Wajih Al-Soufi",
      affiliation: "Universidad de Santiago de Compostela",
      title: "Full Professor of Physical Chemistry",
      photo: "/assets/ponentes/wajih-al-soufi.jpg",
    },
    {
      name: "João Pina",
      affiliation: "Universidade de Coimbra",
      title: "Assistant Professor of Physical-Chemistry",
      photo: "/assets/ponentes/joao-pina.jpg",
    },
    {
      name: "Nuno Basílico",
      affiliation: "Universidade NOVA de Lisboa",
      title: "Assistant Professor",
      photo: "/assets/ponentes/nuno-basilico.jpg",
    },
    {
      name: "Carlos Baleisão",
      affiliation: "Instituto Superior Técnico",
      title: "Associate Professor of Chemistry",
      photo: "/assets/ponentes/carlos-baleisao.jpg",
    },
    {
      name: "Karine Loubiere",
      affiliation: "Université de Toulouse",
      title: "CNRS Senior Researcher",
      photo: "/assets/ponentes/karine-loubiere.jpg",
    },
    {
      name: "Julien Boixel",
      affiliation: "Institut des Sciences Chimiques de Rennes-ISCR-CNRS",
      title: "Researcher fellow CNRS",
      photo: "/assets/ponentes/julien-boixel.jpg",
    },
    {
      name: "Stefan Haacke",
      affiliation: "Université de Strasbourg",
      title: "Full Professor in Physics",
      photo: "/assets/ponentes/stefan-haacke.jpg",
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
            Scientific Committee
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
              {/* Foto formato card (NO vertical) */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
              </div>

              {/* Texto (orden Word: afiliación -> cargo) */}
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  {m.name}
                </h3>

                <p className="mt-3 text-sm font-black text-slate-800 leading-snug">
                  {m.affiliation}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">
                  {m.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScientificCommittee;
