import React from "react";

type EventType =
  | "PL"
  | "IL"
  | "OC"
  | "BREAK"
  | "LUNCH"
  | "POSTER"
  | "AWARD"
  | "SOCIAL"
  | "CEREMONY"
  | "REG"
  | "MEETING";

type ProgramEvent = {
  time: string;
  activity: string;
  type?: EventType; // si no viene, se infiere
};

const ProgramOverview: React.FC = () => {
  const days: Array<{
    date: string;
    title: string;
    events: ProgramEvent[];
  }> = [
    {
      date: "September 2nd",
      title: "Wednesday",
      events: [
        { time: "8:00 – 9:00", activity: "Registration", type: "REG" },
        { time: "9:00 – 9:30", activity: "Opening Ceremony", type: "CEREMONY" },
        { time: "9:30 – 10:15", activity: "PL1:", type: "PL" },
        { time: "10:15 – 10:45", activity: "IL1:", type: "IL" },
        { time: "10:45 – 11:15", activity: "Coffee break", type: "BREAK" },
        { time: "11:15 – 11:45", activity: "IL2:", type: "IL" },
        { time: "11:45 – 12:00", activity: "OC1:", type: "OC" },
        { time: "12:00 – 12:15", activity: "OC2:", type: "OC" },
        { time: "12:15 – 12:30", activity: "OC3:", type: "OC" },
        { time: "12:30 – 13:00", activity: "IL3:", type: "IL" },
        { time: "13:00 – 14:00", activity: "Lunch time", type: "LUNCH" },
        { time: "14:00 – 14:30", activity: "IL4:", type: "IL" },
        { time: "14:30 – 14:45", activity: "OC4:", type: "OC" },
        { time: "14:45 – 15:00", activity: "OC5:", type: "OC" },
        { time: "15:00 – 15:15", activity: "OC6:", type: "OC" },
        { time: "15:15 – 15:30", activity: "OC7:", type: "OC" },
        { time: "15:30 – 16:00", activity: "IL5:", type: "IL" },
        { time: "16:00 – 16:45", activity: "Coffee break\nPoster Session", type: "POSTER" },
        { time: "16:45 – 17:15", activity: "IL6:", type: "IL" },
        { time: "17:15 – 17:30", activity: "OC8:", type: "OC" },
        { time: "17:30 – 17:50", activity: "Award Best PhD 2023", type: "AWARD" },
        { time: "17:50 – 18:10", activity: "Award Best PhD 2024", type: "AWARD" },
        { time: "18:10 – 18:30", activity: "Award Best PhD 2025", type: "AWARD" },
        { time: "20:00 – 21.30", activity: "Welcome reception", type: "SOCIAL" },
      ],
    },
    {
      date: "September 3rd",
      title: "Thursday",
      events: [
        { time: "9:00 – 9:45", activity: "PL2:", type: "PL" },
        { time: "9:45 – 10:15", activity: "IL7:", type: "IL" },
        { time: "10:15 – 10:30", activity: "OC9:", type: "OC" },
        { time: "10:30 – 10:45", activity: "OC10:", type: "OC" },
        { time: "10:45 – 11:15", activity: "Coffee break", type: "BREAK" },
        { time: "11:15 – 11:45", activity: "IL8:", type: "IL" },
        { time: "11:45 – 12:00", activity: "OC11:", type: "OC" },
        { time: "12:00 – 12:15", activity: "OC12:", type: "OC" },
        { time: "12:15 – 12:30", activity: "OC13:", type: "OC" },
        { time: "12:30 – 13:00", activity: "IL9:", type: "IL" },
        { time: "13:00 – 14:00", activity: "Lunch time", type: "LUNCH" },
        { time: "14:00 – 14:30", activity: "IL10:", type: "IL" },
        { time: "14:30 – 14:45", activity: "OC14:", type: "OC" },
        { time: "14:45 – 15:00", activity: "OC15:", type: "OC" },
        { time: "15:00 – 15:15", activity: "OC16:", type: "OC" },
        { time: "15:15 – 15:30", activity: "OC17:", type: "OC" },
        { time: "15:30 – 16:00", activity: "IL11:", type: "IL" },
        { time: "16:00 – 16:45", activity: "Coffee break\nPoster Session", type: "POSTER" },
        { time: "16:45 – 17:00", activity: "“Medalla Nicolás Monardes” Award", type: "AWARD" },
        { time: "17:00 – 17:30", activity: "IL12:", type: "IL" },
        { time: "17:30 – 17:45", activity: "OC18:", type: "OC" },
        { time: "17:45 – 18:00", activity: "OC19:", type: "OC" },
        { time: "18:00 – 19:00", activity: "Soc. Group meetings", type: "MEETING" },
        { time: "21:00 – 24:00", activity: "Conference Gala Dinner", type: "SOCIAL" },
      ],
    },
    {
      date: "September 4th",
      title: "Friday",
      events: [
        { time: "9:00 – 9:45", activity: "PL3:", type: "PL" },
        { time: "9:45 – 10:15", activity: "IL13:", type: "IL" },
        { time: "10:15 – 10:30", activity: "OC20:", type: "OC" },
        { time: "10:30 – 10:45", activity: "OC21:", type: "OC" },
        { time: "10:45 – 11:15", activity: "Coffee break", type: "BREAK" },
        { time: "11:15 – 11:45", activity: "IL14:", type: "IL" },
        { time: "11:45 – 12:00", activity: "OC22:", type: "OC" },
        { time: "12:00 – 12:15", activity: "OC23:", type: "OC" },
        { time: "12:15 – 12:30", activity: "OC24:", type: "OC" },
        { time: "12:30 – 13:00", activity: "IL15:", type: "IL" },
        { time: "13:00 – 14:00", activity: "Lunch time", type: "LUNCH" },
        { time: "14:00 – 14:30", activity: "IL16:", type: "IL" },
        { time: "14:30 – 14:45", activity: "OC25:", type: "OC" },
        { time: "14:45 – 15:00", activity: "OC26:", type: "OC" },
        { time: "15:00 – 15:15", activity: "OC27:", type: "OC" },
        { time: "15:15 – 15:30", activity: "OC28:", type: "OC" },
        { time: "15:30 – 16:00", activity: "IL17:", type: "IL" },
        { time: "16:00 – 16:30", activity: "Closing Session", type: "CEREMONY" },
      ],
    },
  ];

  const legend: Array<{ type: EventType; label: string }> = [
    { type: "PL", label: "Plenary Lecture (PL)" },
    { type: "IL", label: "Invited Lecture (IL)" },
    { type: "OC", label: "Oral Communication (OC)" },
    { type: "BREAK", label: "Coffee break" },
    { type: "POSTER", label: "Poster Session" },
    { type: "LUNCH", label: "Lunch" },
    { type: "AWARD", label: "Awards" },
    { type: "SOCIAL", label: "Social events" },
    { type: "CEREMONY", label: "Ceremony / Closing" },
    { type: "MEETING", label: "Meetings" },
  ];

  const styleByType: Record<
    EventType,
    { chip: string; border: string; row: string; text: string }
  > = {
    PL: {
      chip: "bg-fuchsia-600 text-white",
      border: "border-fuchsia-600",
      row: "bg-fuchsia-50/70",
      text: "text-fuchsia-900",
    },
    IL: {
      chip: "bg-sky-600 text-white",
      border: "border-sky-600",
      row: "bg-sky-50/70",
      text: "text-sky-900",
    },
    OC: {
      chip: "bg-slate-900 text-white",
      border: "border-slate-900",
      row: "bg-slate-50",
      text: "text-slate-800",
    },
    BREAK: {
      chip: "bg-amber-500 text-white",
      border: "border-amber-500",
      row: "bg-amber-50/70",
      text: "text-amber-900",
    },
    POSTER: {
      chip: "bg-emerald-600 text-white",
      border: "border-emerald-600",
      row: "bg-emerald-50/70",
      text: "text-emerald-900",
    },
    LUNCH: {
      chip: "bg-lime-600 text-white",
      border: "border-lime-600",
      row: "bg-lime-50/70",
      text: "text-lime-900",
    },
    AWARD: {
      chip: "bg-rose-600 text-white",
      border: "border-rose-600",
      row: "bg-rose-50/70",
      text: "text-rose-900",
    },
    SOCIAL: {
      chip: "bg-red-600 text-white",
      border: "border-red-600",
      row: "bg-red-50/70",
      text: "text-red-900",
    },
    CEREMONY: {
      chip: "bg-indigo-600 text-white",
      border: "border-indigo-600",
      row: "bg-indigo-50/70",
      text: "text-indigo-900",
    },
    REG: {
      chip: "bg-slate-600 text-white",
      border: "border-slate-600",
      row: "bg-slate-50",
      text: "text-slate-800",
    },
    MEETING: {
      chip: "bg-teal-700 text-white",
      border: "border-teal-700",
      row: "bg-teal-50/70",
      text: "text-teal-900",
    },
  };

  const inferType = (e: ProgramEvent): EventType => {
    if (e.type) return e.type;
    const a = e.activity.toLowerCase();
    if (a.startsWith("pl")) return "PL";
    if (a.startsWith("il")) return "IL";
    if (a.startsWith("oc")) return "OC";
    if (a.includes("poster")) return "POSTER";
    if (a.includes("coffee")) return "BREAK";
    if (a.includes("lunch")) return "LUNCH";
    if (a.includes("award") || a.includes("medalla")) return "AWARD";
    if (a.includes("welcome") || a.includes("gala") || a.includes("dinner"))
      return "SOCIAL";
    if (a.includes("opening") || a.includes("closing")) return "CEREMONY";
    if (a.includes("registration")) return "REG";
    if (a.includes("meeting")) return "MEETING";
    return "OC";
  };

  const TypeChip: React.FC<{ type: EventType }> = ({ type }) => (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${styleByType[type].chip}`}
    >
      {type}
    </span>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
          Scientific Schedule
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Program Overview
        </h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* LEGEND */}
      <div className="mb-10">
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-500 mb-6">
            Color code
          </p>
          <div className="flex flex-wrap gap-3">
            {legend.map((l) => (
              <div
                key={l.type}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <TypeChip type={l.type} />
                <span className="text-sm font-bold text-slate-700">
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {days.map((day, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            <div className="bg-slate-900 text-white p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">
                {day.title}
              </p>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                {day.date}
              </h3>
            </div>

            <div className="p-8 space-y-4">
              {day.events.map((event, eIdx) => {
                const type = inferType(event);
                const styles = styleByType[type];
                const lines = event.activity.split("\n");

                return (
                  <div
                    key={eIdx}
                    className={`rounded-2xl border-l-4 ${styles.border} ${styles.row} p-4`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 shrink-0">
                        {event.time}
                      </span>
                      <TypeChip type={type} />
                    </div>

                    <div className={`mt-3 text-sm font-black leading-tight ${styles.text}`}>
                      {lines.map((l, i) => (
                        <div key={i}>{l}</div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOverview;
