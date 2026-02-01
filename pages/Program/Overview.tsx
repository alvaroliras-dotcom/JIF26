
import React from 'react';

const ProgramOverview: React.FC = () => {
  const days = [
    {
      date: "September 2nd",
      title: "Wednesday",
      events: [
        { time: "8:00 – 9:00", activity: "Registration" },
        { time: "9:00 – 9:30", activity: "Opening Ceremony" },
        { time: "9:30 – 10:15", activity: "Plenary Lecture (PL1)" },
        { time: "10:15 – 10:45", activity: "Invited Lecture (IL1)" },
        { time: "10:45 – 11:15", activity: "Coffee Break" },
        { time: "11:15 – 11:45", activity: "Invited Lecture (IL2)" },
        { time: "11:45 – 13:00", activity: "Oral Sessions (OC1-OC3)" },
        { time: "13:00 – 14:00", activity: "Lunch time" },
        { time: "14:00 – 16:00", activity: "Poster Session I & Coffee" },
        { time: "20:00 – 21:30", activity: "Welcome Reception" },
      ]
    },
    {
      date: "September 3rd",
      title: "Thursday",
      events: [
        { time: "9:00 – 9:45", activity: "Plenary Lecture (PL2)" },
        { time: "9:45 – 10:15", activity: "Invited Lecture (IL7)" },
        { time: "10:15 – 10:45", activity: "Coffee Break" },
        { time: "10:45 – 13:00", activity: "Invited & Oral (IL8-OC15)" },
        { time: "13:00 – 14:00", activity: "Lunch time" },
        { time: "16:45 – 17:00", activity: "Monardes Award" },
        { time: "21:00 – 24:00", activity: "Gala Dinner" },
      ]
    },
    {
      date: "September 4th",
      title: "Friday",
      events: [
        { time: "9:00 – 10:30", activity: "Scientific Sessions" },
        { time: "10:30 – 11:00", activity: "Coffee Break" },
        { time: "11:00 – 12:30", activity: "Concluding Lectures" },
        { time: "12:30 – 13:00", activity: "Closing Remarks" },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Scientific Schedule</p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Program Overview</h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {days.map((day, idx) => (
          <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="bg-slate-900 text-white p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">{day.title}</p>
              <h3 className="text-2xl font-black uppercase tracking-tight">{day.date}</h3>
            </div>
            <div className="p-8 space-y-6">
              {day.events.map((event, eIdx) => (
                <div key={eIdx} className="flex gap-4 border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                  <span className="w-24 text-[10px] font-black text-blue-600 uppercase tracking-widest shrink-0 pt-1">{event.time}</span>
                  <span className="text-sm text-slate-700 font-bold leading-tight">{event.activity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOverview;
