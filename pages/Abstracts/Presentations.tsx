import React from "react";

const Presentations: React.FC = () => {
  const EMAIL = "jif2026.segovia@gmail.com";

  const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] bg-slate-900 text-white">
      {children}
    </span>
  );

  const Card: React.FC<{ title: string; tag: string; subtitle: string; children: React.ReactNode }> = ({
    title,
    tag,
    subtitle,
    children,
  }) => (
    <section className="bg-white border border-slate-100 rounded-[2.5rem] p-12 shadow-xl">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center uppercase tracking-tight">
            <span className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4 text-xs font-black">
              {tag}
            </span>
            {title}
          </h2>
          <p className="text-slate-500 font-medium italic">{subtitle}</p>
        </div>

        <div className="md:w-2/3 text-slate-600">{children}</div>
      </div>
    </section>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">
          Presentation Rules
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Presentation Guidelines
        </h1>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        {/* ORAL */}
        <Card
          title="Oral Presentations"
          tag="ORAL"
          subtitle="Guidelines for Plenary Lectures, Invited Lectures, and Oral Communications."
        >
          <div className="space-y-8">
            <div>
              <p className="font-black text-slate-900 uppercase tracking-tight">Timing</p>
              <ul className="mt-4 space-y-4 font-medium">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    <strong>Plenary Lectures (PL):</strong> 40 min + 5 min discussion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    <strong>Invited Lectures (IL):</strong> 25 min + 5 min discussion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    <strong>Oral Communications (OC):</strong> 12 min + 3 min discussion
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge>USB recommended</Badge>
                <Badge>Arrive early</Badge>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm m-0 leading-relaxed">
                A projector and a PC will be available in the room. Authors should load their PowerPoint
                presentation on the room computer <strong>one hour before</strong> the beginning of the session,
                or in the <strong>late afternoon of the day before</strong> in case of early morning presentations.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm m-0 leading-relaxed">
                If you plan to use your <strong>own computer</strong>, please check the connection with the projector
                in advance. We strongly recommend bringing your presentation on a <strong>USB memory stick</strong>.
                If you are using a <strong>Mac</strong>, please bring the appropriate adapter (compatibility cannot be guaranteed).
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm m-0 leading-relaxed">
                If your presentation includes <strong>videos</strong>, please bring them as <strong>separate files</strong>.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-sm m-0 leading-relaxed text-slate-700">
                If you need any other system or facility, please contact the organizers at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
                >
                  {EMAIL}
                </a>{" "}
                before <strong>July 31st, 2026</strong>.
              </p>
            </div>
          </div>
        </Card>

        {/* POSTER */}
        <Card
          title="Poster Presentations"
          tag="POST"
          subtitle="Guidelines for poster format, sessions, and logistics."
        >
          <div className="space-y-8">
            <div>
              <p className="font-black text-slate-900 uppercase tracking-tight">Poster Sessions</p>
              <ul className="mt-4 space-y-4 font-medium">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    There are <strong>two Poster Sessions</strong>, taking place on{" "}
                    <strong>Wednesday September 2nd</strong> and <strong>Thursday September 3rd</strong> (see program).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    Authors are requested to install posters on <strong>Wednesday September 2nd (morning)</strong> and
                    remove them on <strong>Friday September 5th (morning)</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    Authors should be present at their posters during the assigned poster time to discuss their work.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-black text-slate-900 uppercase tracking-tight">Format & Dimensions</p>
              <ul className="mt-4 space-y-4 font-medium">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                  <span>
                    <strong>Maximum board size:</strong> A0 (841 × 1189 mm)
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-sm m-0 leading-relaxed">
                  The Local Organizing Committee will provide the material to attach the poster.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-sm m-0 leading-relaxed text-slate-700">
                If you have any special need, please contact the organizers at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
                >
                  {EMAIL}
                </a>{" "}
                before <strong>August 31st, 2026</strong>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Presentations;
