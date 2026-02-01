
import React from 'react';

const RegistrationFees: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Congress Participation</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Registration Fees</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden mb-20">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Category</th>
                <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs text-center bg-slate-800" colSpan={2}>Before June 30th 2026</th>
                <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs text-center" colSpan={2}>After June 30th 2026</th>
              </tr>
              <tr className="bg-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">
                <th className="px-8 py-3"></th>
                <th className="px-8 py-3 text-center border-r border-slate-200">Non-members</th>
                <th className="px-8 py-3 text-center border-r border-slate-200">Members</th>
                <th className="px-8 py-3 text-center border-r border-slate-200">Non-members</th>
                <th className="px-8 py-3 text-center">Members</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-8 font-black text-slate-900 text-lg">Senior Researcher</td>
                <td className="px-8 py-8 text-center text-slate-500 font-bold border-r border-slate-100">480 €</td>
                <td className="px-8 py-8 text-center font-black text-blue-600 text-2xl border-r border-slate-100">400 €</td>
                <td className="px-8 py-8 text-center text-slate-500 font-bold border-r border-slate-100">550 €</td>
                <td className="px-8 py-8 text-center text-slate-500 font-bold">480 €</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-8 font-black text-slate-900 text-lg">Student</td>
                <td className="px-8 py-8 text-center text-slate-500 font-bold border-r border-slate-100">280 €</td>
                <td className="px-8 py-8 text-center font-black text-blue-600 text-2xl border-r border-slate-100">200 €</td>
                <td className="px-8 py-8 text-center text-slate-500 font-bold border-r border-slate-100">350 €</td>
                <td className="px-8 py-8 text-center text-slate-500 font-bold">280 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl">
            <h3 className="text-xl font-black uppercase tracking-widest mb-8">Registration fee includes:</h3>
            <ul className="space-y-4 text-blue-50 font-medium">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-4 shrink-0 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Full attendance to the scientific sessions
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-4 shrink-0 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Complete delegate documentation and abstract book
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-4 shrink-0 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                All coffee services and daily scientific lunches
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-4 shrink-0 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Welcome cocktail and official conference gala dinner
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-blue-500/50">
               <p className="text-xs font-black uppercase tracking-[0.2em] italic opacity-80">Accommodation and travel are not included.</p>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <h4 className="text-slate-900 font-black uppercase tracking-tight text-xl">Conditions of registration</h4>
            <p className="text-slate-600 font-medium">To finalize your registration, please complete the online form and process the payment according to your category.</p>
            <div className="mt-8">
              <button className="px-8 py-4 bg-slate-100 text-slate-400 font-black rounded-xl text-xs uppercase tracking-widest cursor-not-allowed">
                Registration Form Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 shadow-inner">
          <h4 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tight">Payment Options</h4>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-blue-600 mb-6">1. Bank Transfer</h5>
              <div className="grid grid-cols-1 gap-y-4 text-sm font-medium">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">Account Holder:</span> <span className="text-slate-900">GRUFO - JIF 2026</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">Bank Entity:</span> <span className="text-slate-900 italic">TBA</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">IBAN:</span> <span className="text-slate-900 font-mono">TBA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">BIC / SWIFT:</span> <span className="text-slate-900 font-mono">TBA</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-blue-600 mb-6">2. Credit Card</h5>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">Secure online payment via our dedicated platform will be available soon.</p>
              <div className="flex gap-4 grayscale opacity-40">
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFees;
