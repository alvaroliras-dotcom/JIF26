
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden bg-slate-900">
        {/* Background Image: Segovia Aqueduct */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620216654245-051874400e26?q=80&w=2500&auto=format&fit=crop" 
            alt="Segovia Aqueduct" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-slate-950/60"></div>
          {/* Animated Spectrum Overlay */}
          <div className="absolute inset-0 spectrum-overlay opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content (~70%) */}
            <div className="lg:col-span-8 space-y-10 text-white">
              <div className="inline-flex items-center gap-4 bg-blue-600 px-5 py-2 rounded-sm text-[11px] font-black uppercase tracking-[0.3em] shadow-lg">
                Segovia — September 2nd–4th, 2026
              </div>
              
              <div className="space-y-4">
                <h1 className="tracking-tight leading-none">
                  <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">
                    IX Jornadas Ibéricas de Fotoquímica
                  </span>
                  <span className="block text-2xl md:text-4xl lg:text-5xl font-medium text-blue-200 mt-6 max-w-3xl leading-tight">
                    II Franco-Iberian Conference on Photochemistry
                  </span>
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-10 text-xl md:text-2xl font-medium text-blue-50 opacity-90">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  September 2nd to 4th, 2026
                </span>
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Segovia, Spain
                </span>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <Link to="/registration/fees" className="px-12 py-5 bg-blue-600 text-white font-black rounded-xl text-sm shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all transform hover:-translate-y-1 uppercase tracking-widest active:scale-95">
                  Register Now
                </Link>
                <Link to="/abstracts/submission" className="px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black rounded-xl text-sm hover:bg-white/20 transition-all uppercase tracking-widest active:scale-95">
                  Submit Abstract
                </Link>
              </div>
            </div>

            {/* Right Column: Logo Leyenda (~30%) */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
              <div className="w-full max-w-[340px] transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/ai-studio-assets/jif-2026/main/LOGO-JIF26-LEYENDA.png" 
                  alt="JIF 2026 Leyenda" 
                  className="w-full h-auto brightness-0 invert opacity-95 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Welcome / Intro */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Welcome</h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-12"></div>
          <div className="prose prose-xl text-slate-600 max-w-none space-y-8 leading-relaxed">
            <p className="font-bold text-slate-900 italic text-2xl">
              Welcome to the IX Jornadas Ibéricas de Fotoquímica (9’JIF) & II Franco-Iberian Conference on Photochemistry (2’FICP)
            </p>
            <p>
              The Grupo Especializado de Fotoquímica of the Real Sociedad Española de Química (GRUFO-RSEQ) and the Grupo de Fotoquímica of the Sociedade Portuguesa de Química (SPQ) cordially invite you to participate in the Ninth Jornadas Ibéricas de Fotoquímica (9’JIF). To strengthen the cooperation with the Photochimie, Photophysique et Photosciences division (SP2P) of the Société Chimique de France (SCF), we are pleased to host the II Franco-Iberian Conference on Photochemistry (2’FICP).
            </p>
            <p>
              The meeting will be held from <strong>September 2nd to 4th, 2026</strong> at the Campus María Zambrano Segovia, Universidad de Valladolid, in Segovia (Castilla y León), Spain.
            </p>
            <p className="font-black text-slate-900 text-3xl pt-8">We hope to see you in Segovia!</p>
          </div>
        </div>
      </section>

      {/* 2. Important Dates */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Important Dates</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">(Tentative Schedule)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-8 border-b border-slate-100 pb-2 w-full">Abstract Submission</h4>
              <div className="space-y-6 w-full text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Opens</span>
                  <span className="font-black text-slate-900">15th March, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-red-500 font-black uppercase tracking-widest text-[10px]">Deadline</span>
                  <span className="font-black text-red-600">1st May, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Notification</span>
                  <span className="font-black text-slate-900">15th June, 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-8 border-b border-slate-100 pb-2 w-full">Registration</h4>
              <div className="space-y-6 w-full text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Opens</span>
                  <span className="font-black text-slate-900">1st March, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Early Bird</span>
                  <span className="font-black text-slate-900">30th June, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Regular</span>
                  <span className="font-black text-slate-900">1st September, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scientific Formats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Scientific Formats</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:bg-blue-600 hover:text-white group">
              <span className="text-5xl font-black text-blue-100 group-hover:text-blue-400 block mb-6 transition-colors">PL</span>
              <h4 className="text-lg font-black uppercase tracking-tight mb-2">Plenary Lectures</h4>
              <p className="text-sm opacity-70">40 min + 5 min Q&A</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:bg-blue-600 hover:text-white group">
              <span className="text-5xl font-black text-blue-100 group-hover:text-blue-400 block mb-6 transition-colors">IL</span>
              <h4 className="text-lg font-black uppercase tracking-tight mb-2">Invited Lectures</h4>
              <p className="text-sm opacity-70">25 min + 5 min Q&A</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:bg-blue-600 hover:text-white group">
              <span className="text-5xl font-black text-blue-100 group-hover:text-blue-400 block mb-6 transition-colors">OC</span>
              <h4 className="text-lg font-black uppercase tracking-tight mb-2">Oral Sessions</h4>
              <p className="text-sm opacity-70">12 min + 3 min Q&A</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-2xl hover:bg-blue-600 hover:text-white group">
              <span className="text-5xl font-black text-blue-100 group-hover:text-blue-400 block mb-6 transition-colors">PP</span>
              <h4 className="text-lg font-black uppercase tracking-tight mb-2">Poster Session</h4>
              <p className="text-sm opacity-70">Size A0 Portrait</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-24 bg-blue-600 overflow-hidden relative">
        <div className="absolute inset-0 spectrum-overlay opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">Participate in JIF 2026</h2>
          <p className="text-xl text-blue-100 font-medium mb-12">Submit your research and join the leading photochemistry conference in the Iberian Peninsula.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <Link to="/registration/fees" className="px-12 py-5 bg-white text-blue-600 font-black rounded-full text-sm shadow-2xl hover:bg-blue-50 transition-all uppercase tracking-widest">
               Register Now
             </Link>
             <Link to="/abstracts/submission" className="px-12 py-5 bg-blue-700 text-white font-black rounded-full text-sm shadow-2xl hover:bg-blue-800 border border-blue-500 transition-all uppercase tracking-widest">
               Submit Abstract
             </Link>
          </div>
        </div>
      </section>

      {/* 5. Sponsors Section is now in the Footer as a Band */}
    </div>
  );
};

export default Home;
