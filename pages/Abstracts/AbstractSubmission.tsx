import React, { useMemo, useState } from "react";

const AbstractSubmission: React.FC = () => {
  const TEMPLATE_URL = "/assets/downloads/IXJIF-Abstract-Template.docx";
  const EMAIL = "jif2026.segovia@gmail.com";

  // Form (contact)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Abstracts — Question");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${fullName || "-"}`,
      `Email: ${email || "-"}`,
      "",
      "Message:",
      message || "-",
      "",
      "Note: Abstract submissions must be sent by email using the official template (DOCX) as an attachment.",
    ].join("\n");

    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${EMAIL}?${params.toString()}`;
  }, [fullName, email, subject, message]);

  const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] bg-slate-900 text-white">
      {children}
    </span>
  );

  const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
      <div className="p-8">
        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{title}</h3>
        <div className="mt-5 text-slate-700">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
            Abstracts
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Abstract Submission
          </h1>
          <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
        </div>

        {/* Layout: main + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main */}
          <main className="lg:col-span-8 space-y-10">
            <Card title="General rules for abstracts submission">
              <p className="text-sm leading-relaxed text-slate-600">
                All participants are invited to send one abstract with the results of their research work
                for its presentation during the celebration of the IX Jornadas Ibéricas de Fotoquímica (9’JIF)
                & II Franco-Iberian Conference on Photochemistry (2’FICP).
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                  Please read these instructions carefully before sending your abstract
                </p>

                <ul className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span><strong>Abstracts submission is only allowed on this website.</strong></span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span>
                      <strong>Abstracts format</strong> must be sent in the abstract template you can find here (template) to{" "}
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
                      <strong>Last day</strong> of presentation for abstracts is <strong>May 1st, 2026</strong>.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span>
                      When the Technical Secretariat receives the abstract submission, you’ll receive an email confirming
                      that we have received your abstract. If you don’t receive it, please contact the Technical Secretariat.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span>
                      The Evaluation of the Scientific Committee will be notified by the authors before{" "}
                      <strong>June 15th, 2026</strong>.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span>
                      The presenting author of each abstract must be registered in the meeting. An author only can be presenting
                      author of one communication but can be co-author of other communications. Those abstracts with no presenting
                      author´s registration won’t be presented in the conference, and they won’t appear in the abstracts’ book.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span>If you send your abstract, you will accept these rules.</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card title="Abstract selection">
              <p className="text-sm leading-relaxed text-slate-600">
                All communications will be evaluated by the Scientific Committee. The selection criteria will include the scientific
                quality and relevance of the topic in relation to the subjects of the Meeting.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge>Decision before June 15th 2026</Badge>
                <Badge>Scientific Committee</Badge>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Before <strong>June 15th 2026</strong>, the Committee will notify the author of the final decision.
              </p>
            </Card>

            {/* Contact form section */}
            <section className="pt-4">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Contact form
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Use this form to contact the Technical Secretariat. For abstract submission, please use the official template
                  and send it by email as indicated above.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                        Full name
                      </label>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                        placeholder="you@email.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                        Subject
                      </label>
                      <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                        placeholder="Write your message…"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href={mailtoHref}
                      className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-800 transition"
                    >
                      Send message by email
                    </a>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex justify-center items-center px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-50 transition"
                    >
                      Open email client
                    </a>
                  </div>

                  <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                    Note: attachments cannot be sent via this form button. To submit an abstract, download the template and attach
                    it in your email to <strong>{EMAIL}</strong>.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
              <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
              <div className="p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-500">
                  Download
                </p>
                <h3 className="mt-3 text-xl font-black text-slate-900 uppercase tracking-tight">
                  Abstract Template
                </h3>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Use the official DOCX template and send the completed file to the Technical Secretariat.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={TEMPLATE_URL}
                    download
                    className="block w-full text-center px-8 py-4 rounded-2xl bg-fuchsia-600 text-white font-black text-[11px] uppercase tracking-[0.22em] shadow-xl hover:bg-fuchsia-500 transition"
                  >
                    Download Template (.docx)
                  </a>

                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Abstract submission (JIF 2026)")}`}
                    className="block w-full text-center px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-50 transition"
                  >
                    Email Technical Secretariat
                  </a>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500">
                    Deadlines
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-bold">Submission deadline</span>
                      <span className="font-black text-slate-900">May 1st, 2026</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-bold">Decision</span>
                      <span className="font-black text-slate-900">June 15th, 2026</span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-xs text-slate-500 break-all">
                  File path: <span className="font-bold">{TEMPLATE_URL}</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AbstractSubmission;
