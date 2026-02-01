
import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const PhDPrize: React.FC = () => {
  const winners = [
    { 
      year: "2023",
      name: "Dra. Eva Vos", 
      affiliation: "Universidad Autónoma de Madrid", 
      thesisTitle: "The impact of oxo functionalization in the photophysics and photochemistry of nucleobases: implications in prebiotic chemistry and the current composition of nucleic acids",
      bio: "Researcher recognized for outstanding contributions to photochemistry during PhD studies. This academic bio highlights her extensive research in prebiotic chemistry and molecular photophysics."
    },
    { 
      year: "2024",
      name: "Dr. Jaume R. Otaegui Rabanal", 
      affiliation: "Universitat Autònoma de Barcelona", 
      thesisTitle: "New optical systems based on organic phase change materials: from fluorochromic inks and sensors to smart windows",
      bio: "Awarded for exceptional doctoral research in photochemistry. His work focuses on the development of innovative optical systems and smart materials for environmental applications."
    },
    { 
      year: "2025",
      name: "Dr. Javier Carmona García", 
      affiliation: "Universitat de València", 
      thesisTitle: "Atmospheric chemistry of mercury and sulfur induced by sunlight: Quantum-chemical modelling and environmental implications",
      bio: "Winner of the GRUFO best thesis prize for the year 2025. His research utilizes quantum-chemical modelling to explore sunlight-induced atmospheric processes."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Award Recipients</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Best PhD Thesis Prize</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-32">
        {winners.map((winner, idx) => (
          <div key={idx} className="relative">
            <div className="hidden xl:block absolute -left-16 top-0 bottom-0 w-px bg-slate-100"></div>
            <div className="xl:pl-20">
               <div className="flex items-center gap-6 mb-12">
                 <span className="text-7xl font-black text-blue-600/10 tracking-tighter shrink-0">{winner.year}</span>
                 <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Academic Achievement</h2>
               </div>
               <div className="max-w-3xl">
                 <SpeakerCard {...winner} role={`Prize ${winner.year}`} />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhDPrize;
