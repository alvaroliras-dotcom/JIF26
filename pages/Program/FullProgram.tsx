
import React from 'react';

const FullProgram: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Complete Schedule</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Full Scientific Program</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16 lg:p-24 text-center max-w-5xl mx-auto shadow-inner">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto shadow-xl text-blue-600">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Schedule Finalization</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            The full scientific program for JIF 2026 is currently being finalized by the Scientific Committee. It will include detailed session timings, room assignments, and specific lecture titles for all speakers.
          </p>
          <div className="pt-10">
            <button className="px-12 py-5 bg-blue-600 text-white font-black rounded-xl opacity-40 cursor-not-allowed uppercase tracking-widest text-xs shadow-2xl">
              Download PDF Program
            </button>
            <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-[0.3em] font-black italic">Expected Publication: June 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProgram;
