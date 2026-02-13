import React from "react";

type Invited = {
  name: string;
  affiliation: string;
  title: string; // cargo
  topic: string; // research topic
};

const InvitedSpeakers: React.FC = () => {
  const speakers: Invited[] = [
    {
      name: "Sergio Navalón Oltra",
      affiliation: "Universitat Politècnica de València",
      title: "Full Professor",
      topic: "Heterogeneous (photo)catalysis for energy and environmental applications.",
    },
    {
      name: "Ángel Orte Gutiérrez",
      affiliation: "Universidad de Granada",
      title: "Full Professor",
      topic:
        "Rational design of smart luminescent materials with high-performance microscopy for cellular signalling and biomarker analysis",
    },
    {
      name: "Inmaculada Andreu Ros",
      affiliation: "Universitat Politècnica de València",
      title: "Associate Professor",
      topic:
        "Photochemical and photobiological mechanisms of light-induced cellular damage by anticancer drugs and nanomaterials, with emphasis on oxidative processes and therapeutic modulation",
    },
    {
      name: "Olga Crespo Zaragoza",
      affiliation: "Universidad de Zaragoza",
      title: "Associate Professor",
      topic:
        "Photophysical properties. Coordination Chemistry. Group 11 metals, Hearth abundant metals and Carboranes Chemistry.",
    },
    {
      name: "Carla Casadevall Serrano",
      affiliation: "Universitat Rovira i Virgili",
      title: "Ramon & Cajal Researcher",
      topic:
        "Development and study of polymer microreactors functionalized with catalysts for the production of solar fuels and chemicals through artificial photosynthesis.",
    },
    {
      name: "Leyre Marzo Puerta",
      affiliation: "Universidad Autónoma de Madrid",
      title: "Ramón & Cajal Researcher",
      topic:
        "Development of sustainable transformations in organic synthesis, with particular interest in the use of photocatalysis and electrochemistry",
    },
    {
      name: "Luis Bañares Morcillo",
      affiliation: "Universidad Complutense de Madrid",
      title: "Professor of Physical Chemistry and Director of the Center for Ultrafast Lasers",
      topic: "Chemical reaction dynamics, photochemistry and femtochemistry",
    },
    {
      name: "Santi Nonell",
      affiliation: "IQS-Universitat Ramon Llull",
      title: "Full Professor",
      topic: "Chemical aspects of photodynamic therapy",
    },
    {
      name: "Christophe Lescop",
      affiliation: "Institut des Sciences Chimiques de Rennes (ISCR) and INSA Rennes",
      title: "CNRS Research Director",
      topic: "New multifunctional and photoactive solid-state molecular materials",
    },
    {
      name: "Sophie Sobanska",
      affiliation: "Université de Bordeaux",
      title: "CNRS Research Director",
      topic:
        "Atmospheric aerosol chemistry and reactivity at the single-particle level using levitation techniques",
    },
    {
      name: "Gilles Lemercier",
      affiliation: "Université de Reims Champagne-Ardenne",
      title: "Associate Professor",
      topic:
        "New (nano)structures based on coordination complexes for potential applications in optical limiting, optical and/or magnetic imaging, and Photodynamic Therapy (PDT), including two-photon-induced PDT.",
    },
    {
      name: "Vitor Brasiliense",
      affiliation: "ENS Paris-Saclay (PPSM ENS Paris-Saclay)",
      title: "CNRS researcher",
      topic: "Optical methodologies for analyzing micro and nanoscale reactivities",
    },
    {
      name: "Elsa Cassette",
      affiliation: "LuMIn, Université Paris-Saclay, France",
      title: "CNRS Researcher",
      topic: "Ultrafast dynamics in semiconductor nanostructures.",
    },
    {
      name: "Elisabete Oliveira",
      affiliation: "Universidade Nova de Lisboa",
      title: "Assistant Professor",
      topic: "Synthesis of innovative dye-doped materials and their applications.",
    },
    {
      name: "Rute Ferreira",
      affiliation: "Universidade de Aveiro",
      title: "Full Professor",
      topic:
        "Luminescent hybrid materials, photonic sensors, spectral converters for photovoltaics, smart optical tags for IoT, and AI-assisted photonic device design.",
    },
    {
      name: "Paulo Coelho",
      affiliation: "Universidade de Trás-os-Montes and Alto Douro",
      title: "Associate Professor",
      topic:
        "Synthesis of organic photochromic compounds and their industrial application in ophthalmic lenses and as photoinitiators for 3D manufacturing.",
    },
    {
      name: "Susana Paula Graça Costa",
      affiliation: "Universidade de Minho",
      title: "Associate Professor",
      topic:
        "Photo-responsive systems for controlled delivery of molecules/drugs, optical probes for chemosensing and bioimaging, and bioinspired photonic systems.",
    },
  ];

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

              <div className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {s.name}
                  </h3>
                  <span className="shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] bg-slate-900 text-white">
                    Invited
                  </span>
                </div>

                {/* Institución (primero) */}
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
