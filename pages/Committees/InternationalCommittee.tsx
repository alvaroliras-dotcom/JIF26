
import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const InternationalCommittee: React.FC = () => {
  const members = [
    { name: "Marta Liras", affiliation: "IMDEA Energía", bio: "Researcher specialized in photochemistry and photophysical processes, actively involved in the organization and coordination of international scientific meetings." },
    { name: "Raúl Pérez Ruiz", affiliation: "Universitat Politècnica de València", bio: "Researcher specialized in photochemistry and photophysical processes, actively involved in the organization and coordination of international scientific meetings." },
    { name: "João C. Lima", affiliation: "Universidade NOVA de Lisboa", bio: "Researcher specialized in photochemistry and photophysical processes, actively involved in the organization and coordination of international scientific meetings." },
    { name: "João Pina", affiliation: "Universidade de Coimbra", bio: "Researcher specialized in photochemistry and photophysical processes, actively involved in the organization and coordination of international scientific meetings." },
    { name: "Olivier Soppera", affiliation: "Université de Haute-Alsace / CNRS", bio: "Researcher specialized in photochemistry and photophysical processes, actively involved in the organization and coordination of international scientific meetings." },
    { name: "Nathan D. McClenaghan", affiliation: "Université de Bordeaux / CNRS", bio: "Researcher specialized in photochemistry and photophysical processes, actively involved in the organization and coordination of international scientific meetings." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Global Leadership</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">International Organizing Committee</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {members.map((member, idx) => (
          <SpeakerCard key={idx} {...member} />
        ))}
      </div>
    </div>
  );
};

export default InternationalCommittee;
