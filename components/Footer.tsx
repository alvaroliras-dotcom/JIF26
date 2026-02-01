import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      {/* Zone 1: Sponsors Band */}
      <div className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">
              Sponsors & Support
            </h4>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            <img
              src="/assets/logo-grufo.png"
              alt="GRUFO"
              className="h-20 md:h-24 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
            <img
              src="/assets/logo-RSEQ.png"
              alt="RSEQ"
              className="h-14 md:h-20 w-auto opacity-90 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Zone 2: Information */}
      <div className="bg-slate-50/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <div className="md:col-span-5">
              <img
                src="/assets/LOGO-JIF26-SOLO.png"
                alt="JIF 2026"
                className="h-16 w-auto mb-8"
                loading="lazy"
              />

              <h3 className="text-slate-900 font-black text-lg mb-4 leading-tight uppercase tracking-tight">
                IX Jornadas Ibéricas de Fotoquímica & II Franco-Iberian Conference on Photochemistry
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                The premier international meeting for the Spanish, Portuguese, and French photochemistry communities.
                Held at Campus María Zambrano, Segovia, Spain. September 2nd to 4th, 2026.
              </p>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest border-b border-slate-100 pb-3">
                  Venue
                </h4>
                <ul className="space-y-3 text-[13px] text-slate-500 font-medium">
                  <li>
                    <Link to="/venue/location" className="hover:text-blue-600 transition-colors">
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link to="/venue/how-to-get" className="hover:text-blue-600 transition-colors">
                      Travel Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/venue/tourist-info" className="hover:text-blue-600 transition-colors">
                      Segovia Info
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest border-b border-slate-100 pb-3">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-[13px] text-slate-500 font-medium">
                  <li>
                    <Link to="/program/overview" className="hover:text-blue-600 transition-colors">
                      Scientific Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/abstracts/submission" className="hover:text-blue-600 transition-colors">
                      Submissions
                    </Link>
                  </li>
                  <li>
                    <Link to="/registration/fees" className="hover:text-blue-600 transition-colors">
                      Fees
                    </Link>
                  </li>
                  <li>
                    <Link to="/committees/international" className="hover:text-blue-600 transition-colors">
                      Committees
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="space-y-6">
                <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest border-b border-slate-100 pb-3">
                  Contact
                </h4>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                  Universidad de Valladolid
                  <br />
                  Campus María Zambrano
                  <br />
                  Segovia, Spain
                </p>
                <a
                  href="mailto:jif2026.segovia@gmail.com"
                  className="inline-flex text-blue-600 font-black text-sm hover:underline decoration-2 underline-offset-4"
                >
                  jif2026.segovia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone 3: Credits */}
      <div className="bg-white py-8 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
              © 2026 JIF Organizing Committee. All rights reserved.
            </p>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
              Website by{' '}
              <a href="#" className="text-slate-900 hover:text-blue-600 transition-colors">
                El Gordo y El Flaco
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
