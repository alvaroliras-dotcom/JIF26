
import React from 'react';

const Presentations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Presentation Rules</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Presentation Guidelines</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        <section className="bg-white border border-slate-100 rounded-[2.5rem] p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center uppercase tracking-tight">
                <span className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4 text-xs font-black">ORAL</span>
                Oral Presentation
              </h2>
              <p className="text-slate-500 font-medium italic">Format for Plenary, Invited, and regular Oral contributions.</p>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none text-slate-600">
              <p className="font-bold text-slate-900">General Timing:</p>
              <ul className="list-none p-0 space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span><strong>Plenary Lectures (PL):</strong> 40 min + 5 min Q&A</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span><strong>Invited Lectures (IL):</strong> 25 min + 5 min Q&A</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span><strong>Oral Presentations (OC):</strong> 12 min + 3 min Q&A</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <p className="text-sm m-0">Presenters are requested to bring their presentations on a USB memory stick in PowerPoint or PDF format. Please contact the session chair or technical staff at least 15 minutes before your session begins.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-100 rounded-[2.5rem] p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center uppercase tracking-tight">
                <span className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4 text-xs font-black">POST</span>
                Poster Presentation
              </h2>
              <p className="text-slate-500 font-medium italic">General guidelines for visual poster exhibition.</p>
            </div>
            <div className="md:w-2/3 prose prose-slate max-w-none text-slate-600">
              <p className="font-bold text-slate-900">Poster Format & Dimensions:</p>
              <ul className="list-none p-0 space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span><strong>Size:</strong> A0 (841 x 1189 mm)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span><strong>Orientation:</strong> Vertical (Portrait)</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <p className="text-sm m-0">Materials for mounting posters will be provided at the registration desk. Authors are expected to be present during their assigned poster sessions to discuss their work with other participants.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Presentations;
