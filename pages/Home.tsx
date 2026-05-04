import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("deadlinePopup");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("deadlinePopup", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-1000">

      {/* 🔴 POPUP */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 backdrop-blur-sm px-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[2rem] border border-white/15 bg-slate-900/75 px-8 py-9 text-center text-white shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-5 top-4 text-2xl text-white/60 hover:text-white"
            >
              ×
            </button>

            <p className="text-sm font-bold mb-4">
              Deadline extended until May 10
            </p>

            <a
              href="/#/abstracts/submission"
              className="inline-block mt-4 px-6 py-3 bg-fuchsia-600 rounded-xl"
            >
              Submit Abstract
            </a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[720px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/background-segovia-well.png"
            alt="Segovia Aqueduct"
            className="w-full h-full object-cover scale-[1.03]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/10" />
          <div className="absolute inset-0 spectrum-overlay opacity-75 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-white">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/90">
                  Segovia · Sep 2–4, 2026
                </span>
              </div>

              <div className="mt-10 space-y-6">
                <h1 className="tracking-tight leading-[0.95]">
                  <span className="block text-5xl md:text-7xl lg:text-8xl font-black">
                    IX Jornadas Ibéricas de Fotoquímica
                  </span>
                  <span className="block text-2xl md:text-4xl lg:text-5xl text-white/80 mt-6">
                    II Franco-Iberian Conference on Photochemistry
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="/#/registration/fees" className="px-10 py-4 bg-fuchsia-600 text-white rounded-2xl">
                    Register Now
                  </a>
                  <a href="/#/abstracts/submission" className="px-10 py-4 border border-white/20 rounded-2xl">
                    Submit Abstract
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
              <div className="w-full max-w-[360px] bg-white p-10 rounded-3xl">
                <img src="/assets/logo-jif26-texto.png" alt="JIF 2026" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black mb-6">Welcome</h2>

          <p className="text-lg text-slate-600">
            Welcome to the IX Jornadas Ibéricas de Fotoquímica.
          </p>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10">
            Important Dates
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-2xl">
              <h4 className="font-bold">Abstract Submission</h4>
              <p>Deadline: May 10</p>
            </div>

            <div className="bg-white p-10 rounded-2xl">
              <h4 className="font-bold">Registration</h4>
              <p>Opens: March 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 text-center">
        <h2 className="text-4xl font-black">Participate in JIF 2026</h2>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/#/registration/fees" className="px-10 py-4 bg-fuchsia-600 rounded-2xl">
            Register Now
          </a>
          <a href="/#/abstracts/submission" className="px-10 py-4 border border-white/20 rounded-2xl">
            Submit Abstract
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
