import React from "react";
import { Link } from "react-router-dom";

const TouristInfo: React.FC = () => {
  const attractions = [
    {
      title: "Roman Aqueduct",
      img: "/assets/otras/09-acueducto-segovia.jpg",
      desc:
        "Built in the 1st century, this engineering marvel has 167 arches and dominates Plaza del Azoguejo.",
      tip: "Best views: daytime for photos, nighttime when illuminated.",
    },
    {
      title: "Alcázar of Segovia",
      img: "/assets/otras/08-alcazar-segovia.jpg",
      desc:
        "A fairy-tale castle that inspired Disney’s Snow White castle.",
      tip: "Don’t miss the Tower of Juan II for panoramic views.",
    },
    {
      title: "Segovia Cathedral",
      img: "/assets/otras/07-catedral-segovia.jpg",
      desc:
        "Known as the “Lady of Cathedrals,” this late Gothic masterpiece stands in Plaza Mayor.",
      tip: "Go near sunset for the best light in Plaza Mayor.",
    },
    {
      title: "Historic Quarter & Jewish Quarter",
      img: "/assets/otras/06-barrio-judio.jpg",
      desc:
        "Wander through narrow streets, noble mansions, and Romanesque churches — it feels like stepping back in time.",
      tip: "Perfect for a relaxed walk between talks.",
    },
    {
      title: "Casa de los Picos & Torreón de Lozoya",
      img: "/assets/otras/05-casa-de-los-picos.jpg",
      desc:
        "Unique Renaissance buildings with striking façades — a classic Segovia photo stop.",
      tip: "Great spot if you like architecture details.",
    },
  ];

  const cuisine = [
    {
      title: "Cochinillo Asado",
      img: "/assets/otras/04-cochinillo-asado.jpg",
      desc:
        "Roast suckling pig — Segovia’s signature dish, cooked in wood-fired ovens and famously tender.",
    },
    {
      title: "Cordero Asado",
      img: "/assets/otras/03-cordero-asado.jpg",
      desc: "Roast lamb — another Castilian classic.",
    },
    {
      title: "Judiones de La Granja",
      img: "/assets/otras/02-judiones-granja.jpg",
      desc: "Hearty bean stew with chorizo and pork.",
    },
    {
      title: "Sopa Castellana",
      img: "/assets/otras/01-sopa-castellana.jpg",
      desc: "Garlic soup with paprika and egg.",
    },
  ];

  const links = [
    {
      label: "Go Ask A Local — Segovia Travel Guide",
      url: "https://goaskalocal.com/blog/segovia-spain-travel-guide",
    },
    {
      label: "Spain.info — Segovia",
      url: "https://www.spain.info/en/destination/segovia/",
    },
    {
      label: "Nomads Travel Guide — Segovia",
      url: "https://www.nomads-travel-guide.com/city/segovia/",
    },
    {
      label: "The Tourist Checklist — Things to do in Segovia",
      url: "https://thetouristchecklist.com/things-to-do-in-segovia/",
    },
    {
      label: "The Crazy Tourist — Best things in Segovia",
      url: "https://www.thecrazytourist.com/15-best-things-segovia-spain/",
    },
    {
      label: "Tourism Attractions — Segovia Local Food Guide",
      url: "https://tourismattractions.net/spain/segovia-local-food-guide",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="/assets/otras/hero-acueducto-segovia.jpg"
            alt="Segovia Roman Aqueduct"
            className="w-full h-full object-cover scale-[1.02]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/10" />
          <div className="absolute inset-0 spectrum-overlay opacity-35 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/90">
                Segovia · Tourist information
              </span>
            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
              Discover Segovia
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/75 font-medium leading-relaxed">
              Segovia is a UNESCO World Heritage city in Castile y León, famous for its Roman Aqueduct,
              Alcázar castle, and Gothic Cathedral. Its cobblestone streets, Renaissance palaces,
              and medieval walls make it feel like stepping back in time. The city is easily accessible
              from Madrid (about 30 minutes by train) and is perfect for a day trip or a weekend getaway.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/venue"
                className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-white/90 transition active:scale-[0.99]"
              >
                Venue & Campus
              </Link>
              <Link
                to="/how-to-get"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-white/10 hover:border-white/30 transition active:scale-[0.99]"
              >
                How to get to Segovia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP ATTRACTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Top Attractions
            </h2>
            <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {attractions.map((a) => (
              <article
                key={a.title}
                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <h3 className="absolute bottom-5 left-6 right-6 text-white text-lg font-black uppercase tracking-tight">
                    {a.title}
                  </h3>
                </div>

                <div className="p-8 space-y-4">
                  <p className="text-slate-600 leading-relaxed">{a.desc}</p>
                  <div className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-black">
                      i
                    </span>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {a.tip}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CUISINE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Local Cuisine
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Segovia is a paradise for food lovers. Pair these dishes with a local Castilian red wine for the full experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cuisine.map((c) => (
              <div
                key={c.title}
                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                  <h3 className="absolute bottom-5 left-6 right-6 text-white text-lg font-black uppercase tracking-tight">
                    {c.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USEFUL LINKS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                Useful links for planning
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                More information about tourism and cultural events can be found on the following websites.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-slate-100 shadow-xl p-8">
                <ul className="space-y-4">
                  {links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition"
                      >
                        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-slate-900 font-black leading-snug">
                            {l.label}
                          </p>
                          <p className="text-xs text-slate-500 mt-1 break-all">
                            {l.url}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to="/"
                    className="inline-flex w-full justify-center px-8 py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-fuchsia-500 transition active:scale-[0.99]"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristInfo;
