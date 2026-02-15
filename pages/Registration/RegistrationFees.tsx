import React from "react";

const RegistrationFees: React.FC = () => {
  // En el Word aparece .es; en el resto de tu web usáis .com.
  // Si quieres que sea exactamente como el Word, cambia a "jif2026.segovia@gmail.es".
  const EMAIL = "jif2026.segovia@gmail.com";

  const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] bg-slate-900 text-white">
      {children}
    </span>
  );

  const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-80" />
      <div className="p-8">
        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{title}</h3>
        <div className="mt-5 text-slate-700">{children}</div>
      </div>
    </div>
  );

  // Fee data (según Word)
  const fees = [
    {
      category: "Senior researcher",
      before: { nonMembers: "480 €", members: "400 €" },
      after: { nonMembers: "550 €", members: "480 €" },
    },
    {
      category: "Student",
      before: { nonMembers: "280 €", members: "200 €" },
      after: { nonMembers: "350 €", members: "280 €" },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-16 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
          Congress Participation
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Registration Fees
        </h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Fees: Mobile cards (NO tabla en móvil) */}
      <div className="space-y-6 lg:hidden mb-16">
        {fees.map((row) => (
          <div key={row.category} className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{row.category}</h2>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                    Before June 30th, 2026
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-bold text-slate-700">Non-members</span>
                      <span className="font-black text-slate-900">{row.before.nonMembers}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-bold text-slate-700">GRUFO members</span>
                      <span className="font-black text-blue-600">{row.before.members}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                    After June 30th, 2026
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-bold text-slate-700">Non-members</span>
                      <span className="font-black text-slate-900">{row.after.nonMembers}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-bold text-slate-700">GRUFO members</span>
                      <span className="font-black text-slate-900">{row.after.members}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge>Fees include dinner</Badge>
                <Badge>VAT included</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fees: Desktop table */}
      <div className="hidden lg:block bg-white rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden mb-20">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Category</th>
                <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs text-center bg-slate-800" colSpan={2}>
                  Before June 30th, 2026
                </th>
                <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs text-center" colSpan={2}>
                  After June 30th, 2026
                </th>
              </tr>
              <tr className="bg-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200">
                <th className="px-8 py-3"></th>
                <th className="px-8 py-3 text-center border-r border-slate-200">Non-members</th>
                <th className="px-8 py-3 text-center border-r border-slate-200">GRUFO members</th>
                <th className="px-8 py-3 text-center border-r border-slate-200">Non-members</th>
                <th className="px-8 py-3 text-center">GRUFO members</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {fees.map((row) => (
                <tr key={row.category} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-8 font-black text-slate-900 text-lg">{row.category}</td>
                  <td className="px-8 py-8 text-center text-slate-500 font-bold border-r border-slate-100">
                    {row.before.nonMembers}
                  </td>
                  <td className="px-8 py-8 text-center font-black text-blue-600 text-2xl border-r border-slate-100">
                    {row.before.members}
                  </td>
                  <td className="px-8 py-8 text-center text-slate-500 font-bold border-r border-slate-100">
                    {row.after.nonMembers}
                  </td>
                  <td className="px-8 py-8 text-center text-slate-500 font-bold">{row.after.members}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Content blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-10">
          {/* Includes */}
          <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl">
            <h3 className="text-xl font-black uppercase tracking-widest mb-8">Registration fee includes</h3>
            <ul className="space-y-4 text-blue-50 font-medium">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-4 rounded-full bg-blue-200 shrink-0" />
                Attendance to the congress
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-4 rounded-full bg-blue-200 shrink-0" />
                Delegate documentation
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-4 rounded-full bg-blue-200 shrink-0" />
                Coffee services and lunches
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-4 rounded-full bg-blue-200 shrink-0" />
                Welcome cocktail and conference dinner
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-blue-500/50">
              <p className="text-xs font-black uppercase tracking-[0.2em] italic opacity-90">
                Registration does NOT include trip and accommodation.
              </p>
            </div>
          </div>

          {/* Student validation */}
          <Card title="Student registration validation">
            <p className="text-slate-600 leading-relaxed">
              Ph.D. students must send a letter from the supervisor to validate the student registration.
              Please email it to{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
              >
                {EMAIL}
              </a>
              .
            </p>
          </Card>

          {/* Conditions of registration */}
          <Card title="Conditions of registration">
            <p className="text-slate-600 leading-relaxed">
              Only those who are duly registered may participate in the congress. To make your registration effective:
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                <span>
                  Fill out the registration form available on this website{" "}
                  <span className="text-slate-500">(link will be enabled when the form page is ready)</span>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                <span>Pay the corresponding participation fee (see payment options).</span>
              </li>
            </ul>

            <div className="mt-8">
              {/* Lo dejamos “coming soon” como tenéis ahora; cuando creemos la nueva página lo cambiamos a Link */}
              <button className="px-8 py-4 bg-slate-100 text-slate-400 font-black rounded-xl text-xs uppercase tracking-widest cursor-not-allowed">
                Registration Form Coming Soon
              </button>
            </div>
          </Card>

          {/* Cancellation */}
          <Card title="Conditions for cancellation">
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                <span>
                  Cancellation must be made in writing by email to{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
                  >
                    {EMAIL}
                  </a>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                <span>
                  Until <strong>July 31st, 2026</strong>: <strong>15%</strong> will be withheld for administrative fees.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                <span>
                  As of <strong>August 1st, 2026</strong>: <strong>no refund</strong> can be processed. Documentation will be
                  sent to participants.
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-6">
              <p className="text-sm m-0 text-slate-600 leading-relaxed">
                To expedite the registration process, it is advisable to send a copy of the payment receipt to the organizers
                once the payment has been made.
              </p>
            </div>
          </Card>
        </div>

        {/* Payment options */}
        <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 shadow-inner">
          <h4 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tight">Payment options</h4>

          <div className="space-y-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-blue-600 mb-6">1. Bank transfer</h5>

              <div className="grid grid-cols-1 gap-y-4 text-sm font-medium">
                <div className="flex justify-between gap-6 border-b border-slate-50 pb-2">
                  <span className="text-slate-400">Account Holder:</span>
                  <span className="text-slate-900">GRUFO - JIF 2026</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-slate-50 pb-2">
                  <span className="text-slate-400">Bank entity:</span>
                  <span className="text-slate-900 italic">TBA</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-slate-50 pb-2">
                  <span className="text-slate-400">Address:</span>
                  <span className="text-slate-900 italic">TBA</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-slate-50 pb-2">
                  <span className="text-slate-400">Account Number:</span>
                  <span className="text-slate-900 font-mono">TBA</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-slate-50 pb-2">
                  <span className="text-slate-400">IBAN Code:</span>
                  <span className="text-slate-900 font-mono">TBA</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-slate-400">Swift Code:</span>
                  <span className="text-slate-900 font-mono">TBA</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h5 className="font-black text-[11px] uppercase tracking-[0.3em] text-blue-600 mb-6">2. Credit card</h5>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Through the payment platform, the payment of the registration fee can be made in a safe and fast way.
              </p>

              <div className="mt-6 flex gap-4 grayscale opacity-40">
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                Tip
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                After paying, you can email the payment receipt to{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
                >
                  {EMAIL}
                </a>{" "}
                to speed up the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFees;
