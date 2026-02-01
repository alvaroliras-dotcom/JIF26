
import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const PlenarySpeakers: React.FC = () => {
  const speakers = [
    { 
      name: "Paola Ceroni", 
      affiliation: "Professor of Chemistry, University of Bologna", 
      bio: "Professor Ceroni is a leading researcher in photochemistry and photophysics, with expertise in luminescent materials, molecular devices, and photoactive systems.",
      role: "Plenary"
    },
    { 
      name: "João Sérgio Seixas de Melo", 
      affiliation: "Professor of Chemistry, University of Coimbra", 
      bio: "Professor Seixas de Melo is an expert in molecular photophysics and photochemistry, focusing on excited-state processes and photoinduced phenomena in organic systems.",
      role: "Plenary"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Distinguished Keynotes</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Plenary Lectures</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {speakers.map((speaker, idx) => (
          <SpeakerCard key={idx} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export default PlenarySpeakers;
