import React from 'react';

const PDF_URL = "/JIF2026-Book-of-Abstracts.pdf";

const AbstractBook: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-12 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Conference Proceedings</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Book of Abstracts</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          The official Book of Abstracts with all plenary, invited, oral and poster contributions presented at JIF 2026.
        </p>
        <div className="mt-8">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-black rounded-xl uppercase tracking-widest text-xs shadow-xl hover:bg-slate-800 transition active:scale-[0.99]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Full Version (PDF)
          </a>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
        <object data={PDF_URL} type="application/pdf" className="w-full h-[85vh] min-h-[600px]">
          <div className="p-12 text-center">
            <p className="text-slate-600 font-medium mb-6">Your browser can't display the PDF inline.</p>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-slate-900 text-white font-black rounded-xl uppercase tracking-widest text-xs">
              Open the Book of Abstracts PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default AbstractBook;
