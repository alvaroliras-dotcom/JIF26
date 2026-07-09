import React from "react";

/* =========================================================================
   JIF 2026 — Program Overview (Schedule at a Glance)
   Data transcribed from the official "Overview Program FINAL" (Sep 2–4, 2026).
   Common items span full width; parallel sessions split into two columns,
   one per room (Salón de Actos / Salón de Grados). Stacks on mobile.
   ========================================================================= */

const PDF_URL = "/JIF2026-Program-Overview.pdf";

type Slot = { time: string; code: string; who: string; aff: string };
type Track = { room: string; chair: string; topic: string; slots: Slot[] };

type Row =
  | { kind: "reg" | "break" | "lunch" | "social" | "meeting" | "closing"; time: string; label: string }
  | { kind: "plenary" | "invited"; time: string; room?: string; chair?: string; code: string; who: string; title: string }
  | { kind: "ceremony"; time: string; room?: string; chair?: string; label: string }
  | { kind: "parallel"; a: Track; b: Track };

type Day = { date: string; weekday: string; rows: Row[] };

const PROGRAM: Day[] = [
  {
    weekday: "Wednesday",
    date: "2 September 2026",
    rows: [
      { kind: "reg", time: "08:00 – 09:00", label: "Registration · Campus María Zambrano (Fase 2)" },
      { kind: "ceremony", time: "09:00 – 09:15", room: "Salón de Actos", label: "Opening Ceremony — Marta Liras, João Carlos Lima, Olivier Soppera" },
      { kind: "plenary", time: "09:15 – 10:00", room: "Salón de Actos", chair: "Marta Liras", code: "PL1", who: "João Sérgio Seixas de Melo", title: "Photochemistry and Photophysics of Emissive and Non-Emissive Organic Molecules: From Molecular Design to Functional Applications" },
      { kind: "invited", time: "10:00 – 10:30", code: "IL1", who: "Sergio Navalón", title: "Metal-Organic Frameworks for Photocatalytic Water Splitting: Structure-Activity Relationships" },
      { kind: "invited", time: "10:30 – 11:00", code: "IL2", who: "Vitor Brasiliense", title: "Optical methodologies for analysing micro and nanoscale photoreactivity" },
      { kind: "break", time: "11:00 – 11:30", label: "Coffee break & Posters' Session (I)" },
      {
        kind: "parallel",
        a: {
          room: "Salón de Actos", chair: "María González Béjar", topic: "Photoactive Materials",
          slots: [
            { time: "11:30 – 11:45", code: "OC1", who: "Bresoli-Obach, Roger", aff: "Universitat Ramón Llull" },
            { time: "11:45 – 12:00", code: "OC2", who: "Contreras-Montoya, Rafael", aff: "Universidad de Granada" },
            { time: "12:00 – 12:15", code: "OC3", who: "Pischel, Uwe", aff: "Universidad de Huelva" },
            { time: "12:15 – 12:30", code: "OC4", who: "Galian, Raquel E.", aff: "Universitat de València" },
            { time: "12:30 – 12:45", code: "OC5", who: "Malval, Jean-Pierre", aff: "Université de Haute Alsace" },
            { time: "12:45 – 13:00", code: "OC6", who: "Marco, Arnau", aff: "Universitat Autónoma de Barcelona" },
          ],
        },
        b: {
          room: "Salón de Grados", chair: "Virginia Martínez Martínez", topic: "Photocatalysis",
          slots: [
            { time: "11:30 – 11:45", code: "OC7", who: "Büyükkanber, Kaan", aff: "Universitat Politècnica de València" },
            { time: "11:45 – 12:00", code: "OC8", who: "Jiménez, Elena", aff: "Universidad Castilla-La Mancha" },
            { time: "12:00 – 12:15", code: "OC9", who: "Lima, Diana L. D.", aff: "Politécnica de Coimbra" },
            { time: "12:15 – 12:30", code: "OC10", who: "Orellana, Guillermo", aff: "Universidad Complutense de Madrid" },
            { time: "12:30 – 12:45", code: "OC11", who: "Pastor, Adrián", aff: "Universidade de Lisboa" },
            { time: "12:45 – 13:00", code: "OC12", who: "Tejedor, Ana Athenea", aff: "Universitat Politècnica de València" },
          ],
        },
      },
      { kind: "lunch", time: "13:00 – 14:30", label: "Lunch time" },
      { kind: "invited", time: "14:30 – 15:00", room: "Salón de Actos", chair: "Diego Sampedro", code: "IL3", who: "Susana P. G. Costa", title: "Bio-inspired photonic and photosynthetic systems: from structural mimicry to energy transfer" },
      { kind: "invited", time: "15:00 – 15:30", code: "IL4", who: "Christoph Lescop", title: "Polymetallic Cu(I) Assemblies: Luminescence and Stimuli-Sensitive Behaviours" },
      {
        kind: "parallel",
        a: {
          room: "Salón de Actos", chair: "Diego Sampedro", topic: "Computational Photochemistry",
          slots: [
            { time: "15:30 – 15:45", code: "OC13", who: "Díez-Cabanes, Valentín", aff: "Université de Montpellier" },
            { time: "15:45 – 16:00", code: "OC14", who: "Frutos, Luis Manuel", aff: "Universidad de Alcalá" },
            { time: "16:00 – 16:15", code: "OC15", who: "Miranda-Sáenz, Edgar", aff: "CINN – CSIC" },
            { time: "16:15 – 16:30", code: "OC16", who: "Scoditti, Stefano", aff: "Euskal Herriko Unibertsitatea" },
          ],
        },
        b: {
          room: "Salón de Grados", chair: "Virginie Lhiaubet-Vallet", topic: "Photobiology",
          slots: [
            { time: "15:30 – 15:45", code: "OC17", who: "Cabrero-Tejero, Clara", aff: "ITQ – UPV/CSIC" },
            { time: "15:45 – 16:00", code: "OC18", who: "Colombari Neto, Jean", aff: "Universitat Jaume I" },
            { time: "16:00 – 16:15", code: "OC19", who: "Cora, Diego", aff: "Universidade de Santiago de Compostela" },
            { time: "16:15 – 16:30", code: "OC20", who: "Hernando, Jordi", aff: "Universitat Autónoma de Barcelona" },
          ],
        },
      },
      { kind: "break", time: "16:30 – 17:30", label: "Coffee break & Posters' Session (I)" },
      { kind: "invited", time: "17:30 – 18:00", room: "Salón de Actos", chair: "Raúl Pérez-Ruiz", code: "IL5", who: "Sophie Sobanska", title: "Photoreactivity of single particle with atmospheric interest" },
      { kind: "invited", time: "18:00 – 18:30", code: "IL6", who: "Leyre Marzo", title: "Acyl Azolium Salts for the Light-Mediated Acylation of Alkyl Halides: Synthesis and Photochemical Studies" },
      { kind: "ceremony", time: "18:30 – 18:45", label: "GRUFO Best PhD Award 2024 — Jaume R. Otaegui Rabanal" },
      { kind: "ceremony", time: "18:45 – 19:00", label: "GRUFO Best PhD Award 2025 — Javier Carmona García" },
      { kind: "social", time: "20:00 – 21:30", label: "Welcome Reception" },
    ],
  },
  {
    weekday: "Thursday",
    date: "3 September 2026",
    rows: [
      { kind: "plenary", time: "09:00 – 09:45", room: "Salón de Actos", chair: "João Carlos Lima", code: "PL2", who: "Dirk Guldi", title: "Materials for adaptive light management: dynamic control over light capture, spectral down- and up-conversion, and energy storage" },
      { kind: "invited", time: "09:45 – 10:15", code: "IL7", who: "Olga Crespo", title: "Copper(I) tetracoordinated emitters" },
      { kind: "invited", time: "10:15 – 10:45", code: "IL8", who: "Paulo Coelho", title: "Photochromic naphthopyrans: From colour change to photopolymerization" },
      { kind: "break", time: "10:45 – 11:15", label: "Coffee break & Posters' Session (II)" },
      {
        kind: "parallel",
        a: {
          room: "Salón de Actos", chair: "Jordi Hernando", topic: "Photoactive Materials",
          slots: [
            { time: "11:15 – 11:30", code: "OC21", who: "González-Béjar, María", aff: "Universitat de València" },
            { time: "11:30 – 11:45", code: "OC22", who: "Prieto-Montero, Ruth", aff: "Euskal Herriko Unibertsitatea" },
            { time: "11:45 – 12:00", code: "OC23", who: "Rodríguez, Laura", aff: "Universitat de Barcelona" },
            { time: "12:00 – 12:15", code: "OC24", who: "Sampedro, Diego", aff: "Universidad de La Rioja" },
            { time: "12:15 – 12:30", code: "OC25", who: "Sánchez, Francisco", aff: "Universidad Castilla-La Mancha" },
            { time: "12:30 – 12:45", code: "OC26", who: "Teixeira, Joana S.", aff: "Universidade do Porto" },
          ],
        },
        b: {
          room: "Salón de Grados", chair: "Stefan Haacke", topic: "Photophysics",
          slots: [
            { time: "11:15 – 11:30", code: "OC27", who: "Achelle, Sylvain", aff: "Université de Rennes" },
            { time: "11:30 – 11:45", code: "OC28", who: "Blas-Gómez, Sofía", aff: "Universidad Castilla-La Mancha" },
            { time: "11:45 – 12:00", code: "OC29", who: "Fellner, Jens", aff: "Université de Strasbourg" },
            { time: "12:00 – 12:15", code: "OC30", who: "García-Fresnadillo, David", aff: "Universidad Complutense de Madrid" },
            { time: "12:15 – 12:30", code: "OC31", who: "Martín, Cristina", aff: "Universidad Castilla-La Mancha" },
            { time: "12:30 – 12:45", code: "OC32", who: "Martínez, Virginia", aff: "Euskal Herriko Unibertsitatea" },
          ],
        },
      },
      { kind: "lunch", time: "12:45 – 14:15", label: "Lunch time" },
      { kind: "invited", time: "14:15 – 14:45", room: "Salón de Actos", chair: "Julien Boixel", code: "IL9", who: "Elsa Cassette", title: "Photophysics of size-controlled nanographenes from C78 to C132" },
      { kind: "invited", time: "14:45 – 15:15", code: "IL10", who: "Luis Bañares", title: "The importance of being a conical intersection in ultrafast photochemistry" },
      {
        kind: "parallel",
        a: {
          room: "Salón de Actos", chair: "Julien Boixel", topic: "Spectroscopy",
          slots: [
            { time: "15:15 – 15:30", code: "OC33", who: "de la Hoz, Mario", aff: "Universidad Castilla-La Mancha" },
            { time: "15:30 – 15:45", code: "OC34", who: "Gómez-Mendoza, Miguel", aff: "IMDEA Energía" },
            { time: "15:45 – 16:00", code: "OC35", who: "Hernández, Stella", aff: "Universidade de Santiago de Compostela" },
            { time: "16:00 – 16:15", code: "OC36", who: "Seijas, Ana", aff: "Universidade de Santiago de Compostela" },
          ],
        },
        b: {
          room: "Salón de Grados", chair: "Santi Nonell", topic: "Photobiology",
          slots: [
            { time: "15:15 – 15:30", code: "OC37", who: "Haacke, Stefan", aff: "Université de Strasbourg" },
            { time: "15:30 – 15:45", code: "OC38", who: "Larek, Ayman", aff: "Universitat Jaume I" },
            { time: "15:45 – 16:00", code: "OC39", who: "Marazzi, Marco", aff: "Universidad de Alcalá" },
            { time: "16:00 – 16:15", code: "OC40", who: "Montero-Galán, Carlos", aff: "ITQ – UPV/CSIC" },
          ],
        },
      },
      { kind: "break", time: "16:15 – 16:45", label: "Coffee break & Poster Session (II)" },
      { kind: "ceremony", time: "16:45 – 17:15", room: "Salón de Actos", chair: "Marta Liras & Raúl Pérez-Ruiz", label: "GRUFO “Medalla Nicolás Monardes” Award Ceremony" },
      { kind: "invited", time: "17:15 – 17:45", code: "IL11", who: "Inmaculada Andreu", title: "A double-edged sword: the bright and dark sides of tyrosine kinase inhibitors upon sunlight exposure" },
      { kind: "invited", time: "17:45 – 18:15", code: "IL12", who: "Elisabete Oliveira", title: "Low-Cost Dye-Doped Polymeric Materials for Environmental and Health Applications" },
      { kind: "meeting", time: "18:15 – 19:00", label: "GRUFO-RSEQ / GF-SPQ / SP2P-SCF Meetings" },
      { kind: "social", time: "21:00 – 24:00", label: "Conference Gala Dinner · Restaurante Convento de Mínimos" },
    ],
  },
  {
    weekday: "Friday",
    date: "4 September 2026",
    rows: [
      { kind: "plenary", time: "09:00 – 09:45", room: "Salón de Actos", chair: "Olivier Soppera", code: "PL3", who: "Marina K. Kuimova", title: "Mapping microscopic viscosity and temperature using molecular rotors" },
      { kind: "invited", time: "09:45 – 10:15", code: "IL13", who: "Gilles Lemercier", title: "Access to and use of excited states of 1,10-phenanthroline derivatives" },
      { kind: "invited", time: "10:15 – 10:45", code: "IL14", who: "Carla Casadevall", title: "From Molecular to Polymersome-Based Systems for Photocatalytic CO₂ Reduction" },
      { kind: "break", time: "10:45 – 11:15", label: "Coffee break" },
      {
        kind: "parallel",
        a: {
          room: "Salón de Actos", chair: "Nuno Basílico", topic: "Solar Fuels",
          slots: [
            { time: "11:15 – 11:30", code: "OC41", who: "Baldoví, Herme G.", aff: "Universitat Politècnica de València" },
            { time: "11:30 – 11:45", code: "OC42", who: "Barawi, Mariam", aff: "IMDEA Energía" },
            { time: "11:45 – 12:00", code: "OC43", who: "Fernandes de Almeida, Vitor", aff: "Universitat Politècnica de València" },
            { time: "12:00 – 12:15", code: "OC44", who: "García, Ángel H. L.", aff: "Universidad de La Rioja" },
            { time: "12:15 – 12:30", code: "OC45", who: "García-Ruiz, Joan", aff: "Universitat Politècnica de València" },
            { time: "12:30 – 12:45", code: "OC46", who: "González, Soranyel", aff: "Universitat de València" },
          ],
        },
        b: {
          room: "Salón de Grados", chair: "Iván Bravo", topic: "Miscellaneous",
          slots: [
            { time: "11:15 – 11:30", code: "OC47", who: "Braña-Coto, Pedro", aff: "CINN – CSIC" },
            { time: "11:30 – 11:45", code: "OC48", who: "Ciccone, Alessandro", aff: "Universitat de València" },
            { time: "11:45 – 12:00", code: "OC49", who: "Francés-Soriano, Laura", aff: "Universitat Politècnica de València" },
            { time: "12:00 – 12:15", code: "OC50", who: "Galhano, Joana", aff: "Universidade NOVA de Lisboa" },
            { time: "12:15 – 12:30", code: "OC51", who: "Encinas, Susana", aff: "Universitat Politècnica de València" },
            { time: "12:30 – 12:45", code: "OC52", who: "Rincón-Selis, Simon A.", aff: "Université de Strasbourg" },
          ],
        },
      },
      { kind: "lunch", time: "12:45 – 14:15", label: "Lunch time" },
      { kind: "invited", time: "14:15 – 14:45", room: "Salón de Actos", chair: "Nathan D. McClenaghan", code: "IL15", who: "Rute A. S. Ferreira", title: "Luminescent Solar Concentrators: From Sustainable Energy Harvesting to Smart Photonic Systems" },
      { kind: "invited", time: "14:45 – 15:15", code: "IL16", who: "Santi Nonell", title: "Push-Pull Aza-BODIPYs for Type-I Photodynamic Therapy and Theranostic Imaging" },
      { kind: "invited", time: "15:15 – 15:45", code: "IL17", who: "Ángel Orte", title: "Multiplexed Imaging of Kinase Activity Using Long-Lifetime Triangulenium-Based Peptide Biosensors" },
      { kind: "closing", time: "15:45 – 16:00", label: "Closing Session" },
    ],
  },
];

const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={"inline-block rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-widest " + className}>{children}</span>
);

const TimeCell: React.FC<{ time: string }> = ({ time }) => (
  <div className="shrink-0 sm:w-32 font-black text-slate-900 text-sm tabular-nums tracking-tight">{time}</div>
);

const LectureRow: React.FC<{ row: Extract<Row, { kind: "plenary" | "invited" }> }> = ({ row }) => {
  const isPlenary = row.kind === "plenary";
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 sm:px-8 py-4 border-b border-slate-100 hover:bg-slate-50/70 transition-colors">
      <TimeCell time={row.time} />
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <Pill className={isPlenary ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}>
            {row.code} · {isPlenary ? "Plenary" : "Invited"}
          </Pill>
          <span className="font-black text-slate-900">{row.who}</span>
        </div>
        {(row.room || row.chair) && (
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            {row.room}{row.room && row.chair ? " · " : ""}{row.chair ? "Chair: " + row.chair : ""}
          </p>
        )}
        <p className="text-slate-600 text-sm leading-relaxed">{row.title}</p>
      </div>
    </div>
  );
};

const SimpleRow: React.FC<{ time: string; label: string; tone: string; tag?: string }> = ({ time, label, tone, tag }) => (
  <div className={"flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 sm:px-8 py-3.5 border-b border-slate-100 " + tone}>
    <TimeCell time={time} />
    <div className="flex-1 flex flex-wrap items-center gap-2">
      {tag && <Pill className="bg-white/70 text-slate-500 border border-slate-200">{tag}</Pill>}
      <span className="font-bold text-slate-700">{label}</span>
    </div>
  </div>
);

const TrackColumn: React.FC<{ track: Track }> = ({ track }) => (
  <div className="flex-1 min-w-0">
    <div className="mb-3 border-b-2 border-blue-100 pb-3">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-700">{track.room}</p>
      <p className="text-sm font-black text-slate-900">{track.topic}</p>
      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Chair: {track.chair}</p>
    </div>
    <ul className="space-y-2.5">
      {track.slots.map((s) => (
        <li key={s.code} className="flex gap-3 text-sm">
          <span className="shrink-0 w-24 font-black text-slate-500 tabular-nums text-xs pt-0.5">{s.time}</span>
          <span>
            <span className="font-black text-blue-700 mr-1.5">{s.code}</span>
            <span className="font-bold text-slate-800">{s.who}</span>
            <span className="block text-[12px] text-slate-500">{s.aff}</span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const ParallelRow: React.FC<{ row: Extract<Row, { kind: "parallel" }> }> = ({ row }) => (
  <div className="px-4 sm:px-8 py-6 border-b border-slate-100 bg-gradient-to-b from-blue-50/40 to-transparent">
    <div className="flex items-center gap-3 mb-5">
      <span className="h-2 w-2 rounded-full bg-blue-600" />
      <p className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-700">Parallel Sessions</p>
      <div className="flex-1 h-px bg-blue-100" />
    </div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <TrackColumn track={row.a} />
      <div className="hidden md:block w-px bg-slate-200" />
      <TrackColumn track={row.b} />
    </div>
  </div>
);

const toneFor: Record<string, string> = {
  reg: "bg-slate-50/60",
  break: "bg-amber-50/50",
  lunch: "bg-amber-50/50",
  social: "bg-fuchsia-50/50",
  meeting: "bg-slate-50/60",
  closing: "bg-blue-50/60",
};
const tagFor: Record<string, string> = {
  reg: "Registration",
  break: "Break",
  lunch: "Lunch",
  social: "Social",
  meeting: "Meeting",
  closing: "Closing",
};

const ProgramOverview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-14 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Schedule at a Glance</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Program Overview</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          Three days of plenary and invited lectures, oral communications in parallel sessions and poster sessions. Campus María Zambrano, Segovia · 2–4 September 2026.
        </p>
        <div className="mt-8">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-black rounded-xl uppercase tracking-widest text-xs shadow-xl hover:bg-blue-700 transition active:scale-[0.99]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download PDF Program
          </a>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Pill className="bg-blue-600 text-white">PL · Plenary</Pill>
        <Pill className="bg-blue-50 text-blue-700">IL · Invited</Pill>
        <Pill className="bg-white text-slate-500 border border-slate-200">OC · Oral Communication</Pill>
        <Pill className="bg-blue-50 text-blue-700">Parallel Sessions · 2 rooms</Pill>
      </div>

      <div className="space-y-14">
        {PROGRAM.map((day) => (
          <section key={day.date} className="scroll-mt-28">
            <div className="flex items-baseline gap-4 mb-5">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">{day.weekday}</h2>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">{day.date}</span>
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden">
              {day.rows.map((row, i) => {
                if (row.kind === "plenary" || row.kind === "invited") return <LectureRow key={i} row={row} />;
                if (row.kind === "parallel") return <ParallelRow key={i} row={row} />;
                if (row.kind === "ceremony")
                  return (
                    <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 sm:px-8 py-4 border-b border-slate-100 bg-blue-50/40">
                      <TimeCell time={row.time} />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Pill className="bg-blue-100 text-blue-800">Ceremony</Pill>
                          <span className="font-black text-slate-900">{row.label}</span>
                        </div>
                        {(row.room || row.chair) && (
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                            {row.room}{row.room && row.chair ? " · " : ""}{row.chair ? "Chair: " + row.chair : ""}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                return <SimpleRow key={i} time={row.time} label={row.label} tone={toneFor[row.kind]} tag={tagFor[row.kind]} />;
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="text-center text-[12px] text-slate-400 font-medium mt-12 max-w-2xl mx-auto">
        Programme subject to change. For the full detailed schedule see the{" "}
        <a href="/#/program/full" className="text-blue-600 font-bold hover:underline">Full Scientific Program</a>.
      </p>
    </div>
  );
};

export default ProgramOverview;
