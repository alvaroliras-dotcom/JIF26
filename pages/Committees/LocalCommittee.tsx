
import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const LocalCommittee: React.FC = () => {
  const members = [
    { 
      name: "Local Committee Chair", 
      affiliation: "Universidad de Valladolid", 
      bio: "Academic/Photochemistry-related bio placeholder: Member of the local organizing committee at Campus María Zambrano, Segovia." 
    },
    { 
      name: "Local Committee Member", 
      affiliation: "Universidad de Valladolid", 
      bio: "Academic/Photochemistry-related bio placeholder: Focused on the logistical organization and scientific coordination of JIF 2026 in Segovia." 
    },
    { 
      name: "Local Committee Member", 
      affiliation: "Universidad de Valladolid", 
      bio: "Academic/Photochemistry-related bio placeholder: Assistant researcher and local coordinator for conference venue management." 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Segovia Team</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Local Organizing Committee</h1>
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

export default LocalCommittee;
