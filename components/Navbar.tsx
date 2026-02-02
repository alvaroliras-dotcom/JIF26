import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra menú móvil al volver a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const NavContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="relative group px-2 py-6">
      <div className="flex items-center text-slate-900 font-extrabold hover:text-blue-700 cursor-default transition-colors uppercase text-[11px] tracking-[0.18em]">
        {title}
        <svg className="ml-1.5 w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>

      <div className="hidden group-hover:block absolute left-0 top-full w-72 bg-white/95 backdrop-blur border border-slate-100 shadow-2xl z-50 rounded-2xl overflow-hidden py-2">
        {children}
      </div>
    </div>
  );

  const SubNavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-6 py-3 text-[13px] transition-all ${
          isActive
            ? 'bg-blue-50 text-blue-800 border-l-4 border-blue-600 font-bold'
            : 'text-slate-600 hover:bg-slate-50 hover:text-blue-700 border-l-4 border-transparent font-medium'
        }`
      }
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">
      {/* Capa premium: blanco semitransparente + blur */}
      <div className="bg-white/85 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-24 flex justify-between items-center">
            {/* Logo más grande */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/logo-jif26-solo.png"
                alt="JIF 2026"
                className="h-14 lg:h-16 w-auto"
                loading="eager"
              />
              {/* Micro claim opcional (si no lo quieres, bórralo sin miedo) */}
              <span className="hidden xl:inline text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
                Segovia · Sep 2–4, 2026
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center">
                <NavContainer title="Venue">
                  <SubNavItem to="/venue/location" label="Venue Location" />
                  <SubNavItem to="/venue/how-to-get" label="How to get to Segovia" />
                  <SubNavItem to="/venue/tourist-info" label="Tourist Information" />
                </NavContainer>

                <NavContainer title="Committees">
                  <SubNavItem to="/committees/international" label="International Organizing Committee" />
                  <SubNavItem to="/committees/scientific" label="Scientific Committee" />
                  <SubNavItem to="/committees/local" label="Local Organizing Committee" />
                </NavContainer>

                <NavContainer title="Speakers">
                  <SubNavItem to="/speakers/plenary" label="Plenary Lectures" />
                  <SubNavItem to="/speakers/invited" label="Invited Lectures" />
                  <SubNavItem to="/speakers/phd-prize" label="Best PhD Thesis Prize" />
                </NavContainer>

                <NavContainer title="Program">
                  <SubNavItem to="/program/overview" label="Program Overview" />
                  <SubNavItem to="/program/full" label="Full Scientific Program" />
                </NavContainer>

                <NavContainer title="Abstracts">
                  <SubNavItem to="/abstracts/book" label="Abstract’s Book" />
                  <SubNavItem to="/abstracts/submission" label="Abstract Submission" />
                  <SubNavItem to="/abstracts/presentations" label="Presentation Guidelines" />
                </NavContainer>

                <NavContainer title="Registration">
                  <SubNavItem to="/registration/fees" label="Registration Fees" />
                  <SubNavItem to="/registration/accommodation" label="Accommodation" />
                </NavContainer>
              </div>

              {/* CTA dominante (uno) */}
              <Link
                to="/registration/fees"
                className="ml-6 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg hover:bg-blue-700 transition active:scale-[0.99]"
              >
                Register
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 focus:outline-none p-2 rounded-xl hover:bg-slate-50 transition"
                aria-label="Open menu"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Línea espectral (leitmotiv controlado) */}
        <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.22em] mb-4">Venue</p>
                <div className="space-y-3">
                  <Link to="/venue/location" className="block text-slate-900 font-extrabold" onClick={() => setIsOpen(false)}>
                    Venue Location
                  </Link>
                  <Link to="/venue/how-to-get" className="block text-slate-900 font-extrabold" onClick={() => setIsOpen(false)}>
                    How to get to Segovia
                  </Link>
                  <Link to="/venue/tourist-info" className="block text-slate-900 font-extrabold" onClick={() => setIsOpen(false)}>
                    Tourist Information
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.22em] mb-4">Quick</p>
                <div className="space-y-3">
                  <Link to="/program/overview" className="block text-slate-900 font-extrabold" onClick={() => setIsOpen(false)}>
                    Program Overview
                  </Link>
                  <Link to="/abstracts/submission" className="block text-slate-900 font-extrabold" onClick={() => setIsOpen(false)}>
                    Abstract Submission
                  </Link>
                  <Link to="/registration/fees" className="block text-slate-900 font-extrabold" onClick={() => setIsOpen(false)}>
                    Registration Fees
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/registration/fees"
              className="block w-full rounded-2xl bg-blue-600 text-white font-black px-4 py-4 text-center uppercase tracking-[0.2em] text-[11px] hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>

            <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
