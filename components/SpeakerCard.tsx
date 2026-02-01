
import React from 'react';

interface SpeakerCardProps {
  name: string;
  affiliation: string;
  bio: string;
  image?: string;
  role?: string;
  thesisTitle?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, affiliation, bio, image, role, thesisTitle }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group">
      {/* Square Portrait Container */}
      <div className="aspect-square overflow-hidden bg-slate-50 relative border-b border-slate-50">
        <img 
          src={image || `https://picsum.photos/seed/${name}/600/600`} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {role && (
          <div className="absolute top-6 left-6 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-sm shadow-2xl z-10">
            {role}
          </div>
        )}
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight tracking-tight">{name}</h3>
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-8">{affiliation}</p>
        
        {thesisTitle && (
          <div className="mb-8 p-5 bg-slate-50 rounded-2xl border-l-8 border-blue-500/20">
            <p className="text-sm italic text-slate-700 leading-relaxed font-semibold">
              "{thesisTitle}"
            </p>
          </div>
        )}
        
        <div className="mt-auto">
          <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
