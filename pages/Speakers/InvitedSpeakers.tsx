import React from "react";

type Invited = {
  name: string;
  affiliation: string;
  title: string;
  topic: string;
  photo?: string; // /public... (si falta o no existe, sale placeholder)
};

const InvitedSpeakers: React.FC = () => {
  const speakers: Invited[] = [
    {
      name: "Sergio Navalón Oltra",
      affiliation: "Universitat Politècnica de València",
      title: "Full Professor",
      topic: "Heterogeneous (photo)catalysis for energy and environmental applications.",
      photo: "/assets/ponentes/sergio-navalon-oltra.jpg",
    },
    {
      name: "Ángel Orte Gutiérrez",
      affiliation: "Universidad de Granada",
      title: "Full Professor",
      topic:
        "Rational design of smart luminescent materials with high-performance microscopy for cellular signalling and biomarker analysis",
      photo: "/assets/ponentes/angel-orte-gutierrez.jpg",
    },
    {
      name: "Inmaculada Andreu Ros",
      affiliation: "Universitat Politècnica de València",
      title: "Associate Professor",
      topic:
        "Photochemical and photobiological mechanisms of light-induced cellular damage by anticancer drugs and nanomaterials, with emphasis on oxidative processes and therapeutic modulation",
      photo: "/assets/ponentes/inmaculada-andreu-ros.jpg",
    },
    {
      name: "Olga Crespo Zaragoza",
      affiliation: "Universidad de Zaragoza",
      title: "Associate Professor",
      topic:
        "Photophysical properties. Coordination Chemistry. Group 11 metals, Hearth abundant metals and Carboranes Chemistry.",
      photo: "/assets/ponentes/olga-crespo-zaragoza.jpg",
    },
    {
      name: "Carla Casadevall Serrano",
      affiliation: "Universitat Rovira i Virgili",
      title: "Ramon & Cajal Researcher",
      topic:
        "Development and study of polymer microreactors functionalized with catalysts for the production of solar fuels and chemicals through artificial photosynthesis.",
      photo: "/assets/ponentes/carla-casadevall-serrano.jpg",
    },
    {
      name: "Leyre Marzo Puerta",
      affiliation: "Universidad Autónoma de Madrid",
      title: "Ramón & Cajal Researcher",
      topic:
        "Development of sustainable transformations in organic synthesis, with particular interest in the use of photocatalysis and electrochemistry",
      photo: "/assets/ponentes/leyre-marzo-puerta.jpg",
    },
    {
      name: "Luis Bañares Morcillo",
      affiliation: "Universidad Complutense de Madrid",
      title: "Professor of Physical Chemistry and Director of the Center for Ultrafast Lasers",
      topic: "Chemical reaction dynamics, photochemistry and femtochemistry",
      photo: "/assets/ponentes/luis-banares-morcillo.jpg",
    },
    {
      name: "Santi Nonell",
      affiliation: "IQS-Universitat Ramon Llull",
      title: "Full Professor",
      topic: "Chemical aspects of photodynamic therapy",
      photo: "/assets/ponentes/santi-nonell.jpg",
    },
    {
      name: "Christophe Lescop",
      affiliation: "Institut des Sciences Chimiques de Rennes (ISCR) and INSA Rennes",
      title: "CNRS Research Director",
      topic: "New multifunctional and photoactive solid-state molecular materials",
      photo: "/assets/ponentes/christophe-lescop.jpg",
    },
    {
      name: "Sophie Sobanska",
      affiliation: "Université de Bordeaux",
      title: "CNRS Research Director",
      topic:
        "Atmospheric aerosol chemistry and reactivity at the single-particle level using levitation techniques",
      photo: "/assets/ponentes/sophie-sobanska.jpg",
    },
    {
      name: "Gilles Lemercier",
      affiliation: "Université de Reims Champagne-Ardenne",
      title: "Associate Professor",
      topic:
        "New (nano)structures based on coordination complexes for potential applications in optical limiting, optical and/or magnetic imaging, and Photodynamic Therapy (PDT), including two-photon-induced PDT.",
      photo: "/assets/ponentes/gilles-lemercier.jpg",
    },
    {
      name: "Vitor Brasiliense",
      affiliation: "ENS Paris-Saclay (PPSM ENS Paris-Saclay)",
      title: "CNRS researcher",
      topic: "Optical methodologies for analyzing micro and nanoscale reactivities",
      photo: "/assets/ponentes/vitor-brasiliense.jpg",
    },
    {
      name: "Elsa Cassette",
      affiliation: "LuMIn, Université Paris-Saclay, France",
      title: "CNRS Researcher",
      topic: "Ultrafast dynamics in semiconductor nanostructures.",
      photo: "/assets/ponentes/elsa-cassette.jpg",
    },
    {
      name: "Elisabete Oliveira",
      affiliation: "Universidade Nova de Lisboa",
      title: "Assistant Professor",
      topic: "Synthesis of innovative dye-doped materials and their applications.",
      photo: "/assets/ponentes/elisabete-oliveira.jpg",
    },
    {
      name: "Rute Ferreira",
      affiliation: "Universidade de Aveiro",
      title: "Full Professor",
      topic:
        "Luminescent hybrid materials, photonic sensors, spectral converters for photovoltaics, smart optical tags for IoT, and AI-assisted photonic device design.",
      photo: "/assets/ponentes/rute-ferreira.jpg",
    },
    {
      name: "Paulo Coelho",
      affiliation: "Universidade de Trás-os-Montes and Alto Douro",
      title: "Associate Professor",
      topic:
        "Synthesis of organic photochromic compounds and their industrial application in ophthalmic lenses and as photoinitiators for 3D manufacturing.",
      photo: "/assets/ponentes/paulo-coelho.jpg",
    },
    {
      name: "Susana Paula Graça Costa",
      affiliation: "Universidade de Minho",
      title: "Associate Professor",
      topic:
        "Photo-responsive systems for controlled delivery of molecules/drugs, optical probes for chemosensing and bioimaging, and bioinspired photonic systems.",
      photo: "/assets/ponentes/susana-paula-graca-costa.jpg",
    },
  ];

  const initials = (name: string) => {
    const parts = name.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
    const first = parts[0]?.[0] ?? "I";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
            Scientific Program
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Invited Lectures
          </h1>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </div>

        {/* 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((s) => (
            <article
              key={s.name}
              className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition overflow-hidden"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />

              {/* Foto 600x600 (cuadrada) */}
              <div className="p-7 pb-0">
                <div className="rounded-[1.6rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
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
                        <div className="text-4xl font-black">{initials(s.name)}</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {s.name}
                  </h3>
                  <span className="shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] bg-slate-900 text-white">
                    Invited
                  </span>
                </div>

                {/* Institución */}
                <p className="mt-4 text-sm font-black text-slate-800 leading-snug">
                  {s.affiliation}
                </p>

                {/* Cargo */}
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                  {s.title}
                </p>

                {/* Topic */}
                <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                    Research topic
                  </p>
                  <p className="mt-3 text-sm text-slate-700 font-medium leading-relaxed">
                    {s.topic}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvitedSpeakers;
