import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="nav-dropdown relative group px-3 py-5">
      <div className="flex items-center text-slate-900 font-bold hover:text-blue-600 cursor-default transition-colors uppercase text-xs tracking-[0.15em]">
        {title}
        <svg className="ml-1.5 w-3 h-3 fill-current opacity-40" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
      <div className="nav-dropdown-menu hidden absolute left-0 top-full w-72 bg-white border border-slate-100 shadow-2xl z-50 rounded-b-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-1 duration-200">
        {children}
      </div>
    </div>
  );

  const SubNavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-6 py-3 text-[13px] font-medium transition-all ${
          isActive
            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
            : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600 border-l-4 border-transparent'
        }`
      }
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/assets/logo-jif26-solo.png"
              alt="JIF 2026"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
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
              <SubNavItem to="/abstracts/book" label="Abstract's Book" />
              <SubNavItem to="/abstracts/submission" label="Abstract Submission" />
              <SubNavItem to="/abstracts/presentations" label="Presentation Guidelines" />
            </NavContainer>

            <NavContainer title="Registration">
              <SubNavItem to="/registration/fees" label="Registration Fees" />
              <SubNavItem to="/registration/accommodation" label="Accommodation" />
            </NavContainer>

            <Link
              to="/registration/fees"
              className="ml-6 px-8 py-3 font-extrabold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/40 transition-all transform active:scale-95 uppercase tracking-widest text-[11px]"
            >
              Register
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none p-2"
            >
              <svg classN
