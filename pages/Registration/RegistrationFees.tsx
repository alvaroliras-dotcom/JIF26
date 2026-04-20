import React from "react";

const RegistrationFees: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-black text-center text-slate-900 mb-12">
        Registration Fees
      </h1>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-4 sm:px-6 py-4">Category</th>
                <th className="px-4 sm:px-6 py-4">Before June 30th, 2026</th>
                <th className="px-4 sm:px-6 py-4">After June 30th, 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 sm:px-6 py-4 font-semibold">Senior researcher</td>
                <td className="px-4 sm:px-6 py-4">480 € / 400 € (GRUFO members)</td>
                <td className="px-4 sm:px-6 py-4">550 € / 480 € (GRUFO members)</td>
              </tr>
              <tr>
                <td className="px-4 sm:px-6 py-4 font-semibold">Student</td>
                <td className="px-4 sm:px-6 py-4">280 € / 200 € (GRUFO members)</td>
                <td className="px-4 sm:px-6 py-4">350 € / 280 € (GRUFO members)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
    </div>
  );
};

export default RegistrationFees;