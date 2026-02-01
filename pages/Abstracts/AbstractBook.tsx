
import React from 'react';

const AbstractBook: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Conference Proceedings</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Abstract's Book</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] p-12 lg:p-24 shadow-2xl flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="bg-blue-50 w-32 h-32 rounded-3xl flex items-center justify-center mb-10 text-blue-600 shadow-inner">
          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Full Book of Abstracts</h2>
        <p className="text-slate-500 font-medium max-w-2xl mb-12 text-lg leading-relaxed">
          The official Book of Abstracts containing all Plenary, Invited, Oral, and Poster contributions will be available for download here shortly before the conference begins.
        </p>
        <div className="flex flex-col items-center space-y-4">
           <button className="px-12 py-5 bg-slate-900 text-white font-black rounded-xl opacity-40 cursor-not-allowed uppercase tracking-widest text-xs shadow-2xl transition-all">
             Download Full Version (PDF)
           </button>
           <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic">Available August 2026</p>
        </div>
      </div>
    </div>
  );
};

export default AbstractBook;
