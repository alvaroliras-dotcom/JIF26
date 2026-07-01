import React, { useEffect, useState } from "react";

const Home: React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("earlyBirdPopup2026");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("earlyBirdPopup2026", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">

      {/* 🔴 POPUP PRO */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md px-4" onClick={() => setShowPopup(false)}>
          <div className="relative w-full max-w-xl rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-slate-700 to-slate-600 px-10 py-12 text-center text-white shadow-[0_20px_80px_rgba(0,0,0,0.4)]" onClick={(e) => e.stopPropagation()}>

            <button type="button" onClick={() => setShowPopup(false)} className="absolute right-6 top-5 text-2xl text-white/50 hover:text-white transition">
              ×
            </button>

            <div className="mx-auto mb-6 w-44 rounded-2xl bg-white/15 p-3">
              <img src="/assets/logo-jif26-texto.png" alt="JIF 2026" className="w-full opacity-100" />
            </div>

            <h3 className="text-xl md:text-2xl font-black mb-3">Early Bird Fee</h3>

            <p className="text-lg font-semibold text-fuchsia-300 mb-6">Until 30th June 2026</p>

            <div className="text-sm text-white/80 mb-8 leading-relaxed text-left max-w-sm mx-auto">
              <p className="font-semibold text-white/90 mb-3 text-center">Registration includes:</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Attendance to the congress</li>
                <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Delegate documentation</li>
                <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Coffee services and lunches</li>
                <li className="flex gap-2"><span className="text-fuchsia-300">•</span> Welcome cocktail and conference dinner</li>
              </ul>
            </div>

            <button type="button" onClick={() => { setShowPopup(false); window.location.href = "/#/registration/fees"; }} className="inline-block px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-500 rounded-xl font-black text-sm uppercase tracking-wide shadow-lg hover:scale-105 transition">
              Register Now
            </button>

          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[720px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src="/assets/hero/background-segovia-well.png" alt="Segovia Aqueduct" className="w-full h-full object-cover scale-[1.03]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/10" />
          <div className="absolute inset-0 spectrum-overlay opacity-75 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-white">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/90">Segovia · Sep 2–4, 2026</span>
              </div>

              <div className="mt-10 space-y-6">
                <h1 className="tracking-tight leading-[0.95]">
                  <span className="block text-5xl md:text-7xl lg:text-8xl font-black drop-shadow-2xl">IX Jornadas Ibéricas de Fotoquímica</span>
                  <span className="block text-2xl md:text-4xl lg:text-5xl font-medium text-white/80 mt-6 max-w-3xl leading-tight">II Franco-Iberian Conference on Photochemistry</span>
                  <span className="block text-sm md:text-base font-black uppercase tracking-[0.28em] text-white/60 mt-6">(IX JIF) &amp; (II FICP)</span>
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-base md:text-lg font-semibold text-white/80">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    September 2nd to 4th, 2026
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Segovia, Spain
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="/#/registration/fees" className="px-10 py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-fuchsia-500 transition active:scale-[0.99]">Register Now</a>
                  <a href="/#/abstracts/submission" className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-white/10 hover:border-white/30 transition active:scale-[0.99]">Submit Abstract</a>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
              <div className="w-full max-w-[360px] rounded-3xl bg-white/95 border border-slate-200 shadow-xl p-10">
                <img src="/assets/logo-jif26-texto.png" alt="JIF 2026" className="w-full h-auto object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Welcome</h2>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full mb-12"></div>

          <div className="prose prose-xl text-slate-600 max-w-none space-y-8 leading-relaxed">
            <p className="font-bold text-slate-900 italic text-2xl">
              Welcome to the IX Jornadas Ibéricas de Fotoquímica (IX JIF) &amp; II Franco-Iberian Conference on Photochemistry (II FICP)
            </p>
            <p>
              The Grupo Especializado de Fotoquímica of the Real Sociedad Española de Química (GRUFO-RSEQ) and the Grupo de Fotoquímica of the Sociedade Portuguesa de Química (SPQ) cordially invite you to participate in the Ninth Jornadas Ibéricas de Fotoquímica (IX JIF). To strengthen the cooperation with the Photochimie, Photophysique et Photosciences division (SP2P) of the Société Chimique de France (SCF), we are pleased to host the II Franco-Iberian Conference on Photochemistry (II FICP).
            </p>
            <p>
              The meeting will be held from <strong>September 2nd to 4th, 2026</strong> at the <strong>Campus María Zambrano Segovia, Universidad de Valladolid</strong>, in Segovia (Castilla y León), Spain.
            </p>
            <p>
              The IX JIF meeting builds on the tradition of the previous ones (Santiago de Compostela in 2003, Faro in 2007, Granada in 2011, Lisbon in 2014, Toledo in 2016, Aveiro in 2018, Alcalá de Henares in 2022 and Lisbon in 2024) to foster collaboration among Spanish, Portuguese, and French photochemistry communities.
            </p>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Important Dates</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">(Tentative Schedule)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
              <div className="p-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">Abstract Submission</h4>
                  <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">2026</div>
                </div>
                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Opens</span>
                    <span className="font-black text-slate-900 text-base">15th March</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-fuchsia-600 font-black uppercase tracking-widest text-[10px]">Deadline</span>
                    <span className="font-black text-fuchsia-700 text-base">1st May</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Notification</span>
                    <span className="font-black text-slate-900 text-base">15th June</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
              <div className="p-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">Registration</h4>
                  <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">2026</div>
                </div>
                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Opens</span>
                    <span className="font-black text-slate-900 text-base">1st March</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Early Registration</span>
                    <span className="font-black text-slate-900 text-base">30th June</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Late Registration</span>
                    <span className="font-black text-slate-900 text-base">After June 30th</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/#/abstracts/submission" className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-50 transition">
              Abstract Submission Details
            </a>
          </div>
        </div>
      </section>

      {/* PRESENTATION GUIDELINES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Presentation Guidelines</h2>
            <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: "PL", title: "Plenary Lectures", desc: "40 minutes + 5 minutes Q&A" },
              { code: "IL", title: "Invited Lectures", desc: "25 minutes + 5 minutes Q&A" },
              { code: "OC", title: "Oral Presentations", desc: "12 minutes + 3 minutes Q&A" },
              { code: "PP", title: "Poster Presentations", desc: "A0 Portrait (841 x 1189 mm)" },
            ].map((f) => (
              <div key={f.code} className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-950 hover:text-white overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-0 group-hover:opacity-80 transition" />
                <span className="mt-6 block text-5xl font-black text-slate-200 group-hover:text-white/20 transition-colors">{f.code}</span>
                <h4 className="mt-6 text-lg font-black uppercase tracking-tight">{f.title}</h4>
                <p className="mt-2 text-sm opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEALS AND SOCIAL EVENTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Meals and Social Events</h2>
            <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Welcome Reception",
                subtitle: "September 2nd (evening/late afternoon)",
                text: "Welcome reception with drinks and snacks will be held at the Conference Venue on the evening/late afternoon of September 2nd.",
              },
              {
                title: "Lunches",
                subtitle: "Included with registration",
                text: "Lunches are included with the registration fee and will be served in the conference venue.",
              },
              {
                title: "Conference Dinner",
                subtitle: "September 3rd (to be determined)",
                text: "The registration fee includes the Conference Dinner. It will be held on September 3rd at Convento de Minimos",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
                <div className="p-10">
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-slate-400">{item.subtitle}</p>
                  <p className="mt-6 text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS AND PRIZES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Awards and Prizes</h2>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full mb-10"></div>
          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10">
            <p className="text-slate-700 text-lg font-bold">To be determined</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 spectrum-overlay opacity-20 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white relative z-10">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/60">JIF 2026</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">Participate in JIF 2026</h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 font-medium">
            Submit your research and join the leading photochemistry conference in the Iberian Peninsula.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/#/registration/fees" className="px-10 py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-fuchsia-500 transition active:scale-[0.99]">Register Now</a>
            <a href="/#/abstracts/submission" className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-white/10 hover:border-white/30 transition active:scale-[0.99]">Submit Abstract</a>
          </div>
        </div>
      </section>

      {/* Sponsors Section is in Footer */}
    </div>
  );
};

export default Home;
