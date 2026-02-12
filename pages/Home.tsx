import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[720px] flex items-center overflow-hidden bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/background-segovia-well.png"
            alt="Segovia Aqueduct"
            className="w-full h-full object-cover scale-[1.03]"
            loading="eager"
          />
          {/* Overlay correcto (no plano) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/10" />
          {/* Overlay espectral (tu clase existente) */}
          <div className="absolute inset-0 spectrum-overlay opacity-75 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left (2/3 aprox) */}
            <div className="lg:col-span-8 text-white">
              {/* Chip superior */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/90">
                  Segovia · Sep 2–4, 2026
                </span>
              </div>

              <div className="mt-10 space-y-6">
                <h1 className="tracking-tight leading-[0.95]">
                  <span className="block text-5xl md:text-7xl lg:text-8xl font-black drop-shadow-2xl">
                    IX Jornadas Ibéricas de Fotoquímica
                  </span>
                  <span className="block text-2xl md:text-4xl lg:text-5xl font-medium text-white/80 mt-6 max-w-3xl leading-tight">
                    II Franco-Iberian Conference on Photochemistry
                  </span>
                  <span className="block text-sm md:text-base font-black uppercase tracking-[0.28em] text-white/60 mt-6">
                    (9’JIF) & (2’FICP)
                  </span>
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-base md:text-lg font-semibold text-white/80">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 opacity-80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    September 2nd to 4th, 2026
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 opacity-80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Segovia, Spain
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    to="/registration/fees"
                    className="px-10 py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-fuchsia-500 transition active:scale-[0.99]"
                  >
                    Register Now
                  </Link>
                  <Link
                    to="/abstracts/submission"
                    className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-white/10 hover:border-white/30 transition active:scale-[0.99]"
                  >
                    Submit Abstract
                  </Link>
                </div>
              </div>
            </div>

            {/* Right (1/3 aprox) */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
              <div className="w-full max-w-[360px] rounded-3xl bg-white/95 border border-slate-200 shadow-xl p-10">
                <img
                  src="/assets/logo-jif26-texto.png"
                  alt="JIF 2026"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Welcome
          </h2>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full mb-12"></div>

          <div className="prose prose-xl text-slate-600 max-w-none space-y-8 leading-relaxed">
            <p className="font-bold text-slate-900 italic text-2xl">
              Welcome to the IX Jornadas Ibéricas de Fotoquímica (9’JIF) & II
              Franco-Iberian Conference on Photochemistry (2’FICP)
            </p>

            <p>
              The Grupo Especializado de Fotoquímica of the Real Sociedad Española
              de Química (GRUFO-RSEQ) and the Grupo de Fotoquímica of the Sociedade
              Portuguesa de Química (SPQ) cordially invite you to participate in
              the Ninth Jornadas Ibéricas de Fotoquímica (9’JIF). To strengthen the
              cooperation with the Photochimie, Photophysique et Photosciences
              division (SP2P) of the Société Chimique de France (SCF), we are
              pleased to host the II Franco-Iberian Conference on Photochemistry
              (2’FICP).
            </p>

            <p>
              The meeting will be held from{" "}
              <strong>September 2nd to 4th, 2026</strong> at the{" "}
              <strong>
                Campus María Zambrano Segovia, Universidad de Valladolid
              </strong>
              , in Segovia (Castilla y León), Spain.
            </p>

            {/* ✅ FALTABA en tu HOME */}
            <p>
              The 9’JIF meeting builds on the tradition of the previous ones
              (Santiago de Compostela in 2003, Faro in 2007, Granada in 2011,
              Lisbon in 2014, Toledo in 2016, Aveiro in 2018, Alcalá de Henares
              in 2022 and Lisbon in 2024) to foster collaboration among Spanish,
              Portuguese, and French photochemistry communities. This event will
              delve into the latest advancements in both fundamental and applied
              photochemistry, spanning a broad array of chemical, physical, and
              biological processes studied using light.
            </p>

            <p className="font-black text-slate-900 text-3xl pt-8">
              We hope to see you in Segovia!
            </p>

            {/* ✅ Cierre extra del Word */}
            <p>
              We are excited to host this prestigious gathering of photochemistry
              researchers and students, and we look forward to your active
              participation in what promises to be an enriching and collaborative
              event.
            </p>

            <p>
              For any additional information or assistance, please do not hesitate
              to contact us.
            </p>

            {/* CTA suave a Contact (si existe ruta) */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-50 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Important Dates
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              (Tentative Schedule)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
              <div className="p-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">
                    Abstract Submission
                  </h4>
                  <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                    2026
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                      Opens
                    </span>
                    <span className="font-black text-slate-900 text-base">
                      15th March
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-fuchsia-600 font-black uppercase tracking-widest text-[10px]">
                      Deadline
                    </span>
                    <span className="font-black text-fuchsia-700 text-base">
                      1st May
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                      Notification
                    </span>
                    <span className="font-black text-slate-900 text-base">
                      15th June
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
              <div className="p-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">
                    Registration
                  </h4>
                  <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                    2026
                  </div>
                </div>

                <div className="mt-8 space-y-5 text-sm">
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                      Opens
                    </span>
                    <span className="font-black text-slate-900 text-base">
                      1st March
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                      Early Registration
                    </span>
                    <span className="font-black text-slate-900 text-base">
                      30th June
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                      Late Registration
                    </span>
                    <span className="font-black text-slate-900 text-base">
                      1st September
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini-CTA opcional */}
          <div className="mt-12 text-center">
            <Link
              to="/abstracts/submission"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-50 transition"
            >
              Abstract Submission Details
            </Link>
          </div>
        </div>
      </section>

      {/* PRESENTATION GUIDELINES / FORMATS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Presentation Guidelines
            </h2>
            <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: "PL", title: "Plenary Lectures", desc: "40 minutes + 5 minutes Q&A" },
              { code: "IL", title: "Invited Lectures", desc: "25 minutes + 5 minutes Q&A" },
              { code: "OC", title: "Oral Presentations", desc: "12 minutes + 3 minutes Q&A" },
              { code: "PP", title: "Poster Presentations", desc: "A0 Portrait (841 × 1189 mm)" },
            ].map((f) => (
              <div
                key={f.code}
                className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50 transition hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-950 hover:text-white overflow-hidden"
              >
                <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-0 group-hover:opacity-80 transition" />
                <span className="mt-6 block text-5xl font-black text-slate-200 group-hover:text-white/20 transition-colors">
                  {f.code}
                </span>
                <h4 className="mt-6 text-lg font-black uppercase tracking-tight">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MEALS AND SOCIAL EVENTS (FALTABA) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Meals and Social Events
            </h2>
            <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Welcome Reception",
                subtitle: "September 2nd (evening/late afternoon)",
                text:
                  "A small welcome reception with drinks and snacks will be held at the Conference Venue on the evening/late afternoon of September 2nd.",
              },
              {
                title: "Lunches",
                subtitle: "Included with registration",
                text:
                  "Lunches are included with the registration fee and will be served in the conference venue.",
              },
              {
                title: "Conference Dinner",
                subtitle: "September 3rd (to be determined)",
                text:
                  "The registration fee includes the Conference Dinner. It will be held on September 3rd, to be determined.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
                <div className="p-10">
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    {item.subtitle}
                  </p>
                  <p className="mt-6 text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ AWARDS AND PRIZES (FALTABA) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Awards and Prizes
          </h2>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full mb-10"></div>

          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10">
            <p className="text-slate-700 text-lg font-bold">
              To be determined
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 spectrum-overlay opacity-20 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white relative z-10">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/60">
            JIF 2026
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
            Participate in JIF 2026
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 font-medium">
            Submit your research and join the leading photochemistry conference in the Iberian Peninsula.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/registration/fees"
              className="px-10 py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-fuchsia-500 transition active:scale-[0.99]"
            >
              Register Now
            </Link>
            <Link
              to="/abstracts/submission"
              className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-white/10 hover:border-white/30 transition active:scale-[0.99]"
            >
              Submit Abstract
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section is in Footer */}
    </div>
  );
};

export default Home;
