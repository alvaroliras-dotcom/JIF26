import React from "react";

const LocalOrganizingCommittee: React.FC = () => {
  const members = [
    "Jorge C. Herrera Luna",
    "Miguel Gómez Mendoza",
    "Soranyel González",
    "Carlos Montero",
    "Clara Cabrero",
    "Stella Hernández",
    "Ana Seijas",
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
            Committees
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Local Organizing Committee
          </h1>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </div>

        {/* Panel */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />

          <div className="p-10 md:p-12">
            <p className="text-slate-600 font-medium max-w-3xl">
              Local committee members supporting logistics and on-site coordination.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {members.map((name, i) => (
                <div
                  key={name}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 hover:bg-white hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-slate-900 text-white text-xs font-black tracking-widest">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-slate-900 font-black text-base leading-snug truncate">
                        {name}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 font-bold uppercase tracking-[0.22em]">
                        Local organizing committee
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Alternativa: si prefieres más "lista elegante" */}
            {/* <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-10">
              {members.map((name) => (
                <div key={name} className="break-inside-avoid mb-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4">
                    <p className="font-black text-slate-900">{name}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalOrganizingCommittee;
