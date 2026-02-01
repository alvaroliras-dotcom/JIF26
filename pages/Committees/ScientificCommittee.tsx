
import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const ScientificCommittee: React.FC = () => {
  const members = [
    { 
      name: "Scientific Committee Member 1", 
      affiliation: "Academic Institution", 
      bio: "Academic/Photochemistry-related bio placeholder: Researcher specialized in molecular photophysics and light-induced phenomena within the Franco-Iberian community." 
    },
    { 
      name: "Scientific Committee Member 2", 
      affiliation: "Academic Institution", 
      bio: "Academic/Photochemistry-related bio placeholder: Specialist in advanced spectroscopic techniques and photochemical reactions in biological systems." 
    },
    { 
      name: "Scientific Committee Member 3", 
      affiliation: "Academic Institution", 
      bio: "Academic/Photochemistry-related bio placeholder: Leading expert in sustainable photochemistry and the development of new photoactive materials." 
    },
    { 
      name: "Scientific Committee Member 4", 
      affiliation: "Academic Institution", 
      bio: "Academic/Photochemistry-related bio placeholder: Focused on the study of excited-state processes in organic and inorganic molecular systems." 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Academic Oversight</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Scientific Committee</h1>
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

export default ScientificCommittee;
