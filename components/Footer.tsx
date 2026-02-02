import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Sponsors Band (gris claro) */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-10">
            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">
              Sponsors & Support
            </h4>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <img
              src="/assets/logo-grufo.png"
              alt="GRUFO"
              className="h-20 md:h-24 w-auto opacity-95 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
            <img
              src="/assets/logo-rseq.png"
              alt="RSEQ"
              className="h-14 md:h-16 w-auto opacity-95 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>

        <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* LOGO (2/5) — limitado en altura para no comerse el footer */}
          <div className="lg:col-span-2">
            {/* La tarjeta ya no puede ser gigante: le ponemos un techo */}
            <div className="rounded-3xl bg-white px-8 py-8 shadow-sm border border-slate-200">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/logo-jif26-texto.png"
                  alt="JIF 2026"
                  className="w-full h-auto max-h-[260px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Badge espectral */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-200/80">
                Segovia · 2026
              </span>
            </div>
          </div>

          {/* CONTENIDO (3/5) */}
          <div className="lg:col-span-3">
            {/* Bloque editorial con mejor ritmo */}
            <h3 className="text-white font-black text-lg md:text-xl leading-snug uppercase tracking-tight">
              IX Jornadas Ibéricas de Fotoquímica & II Franco-Iberian Conference on Photochemistry
            </h3>

            <p className="mt-4 text-slate-300/80 text-sm leading-relaxed max-w-2xl font-medium">
              The premier international meeting for the Spanish, Portuguese, and French photochemistry communities.
              Held at Campus María Zambrano, Segovia, Spain. September 2nd to 4th, 2026.
            </p>

            {/* Aquí empujamos los bloques de links hacia abajo con aire controlado */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.22em] pb-3 border-b border-white/10">
                  Venue
                </h4>
                <ul className="space-y-3 text-[13px] font-medium">
                  <li>
                    <Link to="/venue/location" className="text-slate-300/80 hover:text-white transition-colors">
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link to="/venue/how-to-get" className="text-slate-300/80 hover:text-white transition-colors">
                      Travel Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/venue/tourist-info" className="text-slate-300/80 hover:text-white transition-colors">
                      Segovia Info
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.22em] pb-3 border-b border-white/10">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-[13px] font-medium">
                  <li>
                    <Link to="/program/overview" className="text-slate-300/80 hover:text-white transition-colors">
                      Scientific Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/abstracts/submission" className="text-slate-300/80 hover:text-white transition-colors">
                      Submissions
                    </Link>
                  </li>
                  <li>
                    <Link to="/registration/fees" className="text-slate-300/80 hover:text-white transition-colors">
                      Fees
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.22em] pb-3 border-b border-white/10">
                  Contact
                </h4>

                <a
                  href="mailto:jif2026.segovia@gmail.com"
                  className="inline-flex items-center gap-2 text-white font-black text-sm hover:opacity-90 transition"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
                  jif2026.segovia@gmail.com
                </a>

                <p className="mt-3 text-[13px] text-slate-300/80 font-medium leading-relaxed">
                  Universidad de Valladolid
                  <br />
                  Campus María Zambrano
                  <br />
                  Segovia, Spain
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
            © 2026 JIF Organizing Committee. All rights reserved.
          </p>
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
            Website by{" "}
            <a href="#" className="text-white hover:opacity-90 transition">
              El Gordo y El Flaco
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
