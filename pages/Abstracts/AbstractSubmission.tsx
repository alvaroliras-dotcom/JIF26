
import React from 'react';

const AbstractSubmission: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Call for Papers</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Abstract Submission</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 space-y-12">
          <div className="bg-blue-600 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            {/* Prism decorative effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">General rules for abstracts submission</h3>
            <p className="text-blue-50 font-medium text-lg leading-relaxed">
              All participants are invited to send one abstract with the results of their research work for its presentation during the celebration of the IX Jornadas Ibéricas de Fotoquímica (9’JIF) & II Franco-Iberian Conference on Photochemistry (2’FICP).
            </p>
          </div>

          <div className="prose prose-xl max-w-none text-slate-600">
            <h4 className="text-slate-900 font-black uppercase tracking-tight text-xl mb-8">Important Instructions</h4>
            <ul className="space-y-6 list-none p-0">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="font-medium italic text-slate-800">Abstracts submission is only allowed through this official website.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="font-medium text-slate-800">Format: All abstracts must strictly follow the official template and be sent to <a href="mailto:jif2026.segovia@gmail.com" className="text-blue-600 font-bold hover:underline">jif2026.segovia@gmail.com</a>.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                   <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <span className="font-black text-red-600 uppercase tracking-tight">Final Deadline: May 1st, 2026.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="font-medium text-slate-800">Notification of acceptance: Authors will be informed by June 15th, 2026.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 sticky top-32 shadow-inner text-center">
            <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600 shadow-xl">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Abstract Template</h4>
            <p className="text-sm text-slate-500 font-medium mb-10">Prepare your contribution according to the guidelines.</p>
            <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Template
            </button>
            <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-[0.2em] font-black italic">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractSubmission;
