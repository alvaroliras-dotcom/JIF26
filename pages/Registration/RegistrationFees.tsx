import React from "react";

const RegistrationFees: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-black text-center text-slate-900 mb-12">
        Registration Fees
      </h1>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Before June 30th, 2026</th>
              <th className="px-6 py-4">After June 30th, 2026</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold">Senior researcher</td>
              <td className="px-6 py-4">480 € / 400 € (GRUFO members)</td>
              <td className="px-6 py-4">550 € / 480 € (GRUFO members)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold">Student</td>
              <td className="px-6 py-4">280 € / 200 € (GRUFO members)</td>
              <td className="px-6 py-4">350 € / 280 € (GRUFO members)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4 mb-12">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
          <h3 className="font-bold text-lg mb-4">Senior researcher</h3>
          <div className="space-y-2 text-slate-700">
            <p>
              <span className="font-semibold">Before June 30th, 2026:</span><br />
              480 € / 400 € (GRUFO members)
            </p>
            <p>
              <span className="font-semibold">After June 30th, 2026:</span><br />
              550 € / 480 € (GRUFO members)
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6">
          <h3 className="font-bold text-lg mb-4">Student</h3>
          <div className="space-y-2 text-slate-700">
            <p>
              <span className="font-semibold">Before June 30th, 2026:</span><br />
              280 € / 200 € (GRUFO members)
            </p>
            <p>
              <span className="font-semibold">After June 30th, 2026:</span><br />
              350 € / 280 € (GRUFO members)
            </p>
          </div>
        </div>
      </div>

      {/* RESTO */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
          <h2 className="text-xl font-bold mb-4">Registration includes</h2>
          <ul className="space-y-2 text-slate-700">
            <li>• Attendance to the congress</li>
            <li>• Delegate documentation</li>
            <li>• Coffee services and lunches</li>
            <li>• Welcome cocktail and conference dinner</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
          <h2 className="text-xl font-bold mb-4">Payment</h2>
          <p className="text-slate-700 mb-6">
            Registration payment must be completed through the external payment platform.
          </p>

          <a
            href="https://app.scitoevents.com/JIF26/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition"
          >
            Proceed to payment
          </a>
        </div>
      </div>

      <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100">
        <h2 className="text-xl font-bold mb-4">Student registration validation</h2>
        <p className="text-slate-700">
          Ph.D. students must send a letter from the supervisor to validate student registration at:
        </p>

        <a
          href="mailto:jif2026.segovia@gmail.com"
          className="font-bold underline mt-3 inline-block"
        >
          jif2026.segovia@gmail.com
        </a>
      </div>

      {/* SP2P support notice */}
      <div className="mt-8 bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-3xl">
        <div className="flex gap-3 items-start">
          <span className="text-amber-500 text-xl mt-0.5">⚠️</span>
          <p className="text-slate-700 leading-relaxed">
            The French subdivision <strong>SP2P</strong> will support the registration fees for a limited
            number of PhD students and postdoctoral researchers. If you would like to apply, please
            contact us for further details by email:{" "}
            <a href="mailto:olivier.soppera@uha.fr" className="font-semibold underline hover:text-amber-700">
              olivier.soppera@uha.fr
            </a>{" "}
            and{" "}
            <a href="mailto:julien.boixel@univ-rennes.fr" className="font-semibold underline hover:text-amber-700">
              julien.boixel@univ-rennes.fr
            </a>
            . <strong>Deadline for abstract submission: 29th May 2026.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFees;