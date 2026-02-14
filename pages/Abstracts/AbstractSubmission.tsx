import React, { useState } from "react";

const AbstractSubmission: React.FC = () => {
  const TEMPLATE_URL = "/assets/downloads/IXJIF-Abstract-Template.docx";
  const EMAIL = "jif2026.segovia@gmail.com";

  // Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgewkqk";

  const TOPICS = [
    "Photocatalysis",
    "Photobiology",
    "Photophysics",
    "Photoactive materials",
    "Solar fuels",
    "Spectroscopy",
    "Computational photochemistry",
    "Other",
  ];

  // Form (abstract submission metadata)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [presentationType, setPresentationType] = useState<"oral" | "poster" | "">("");
  const [topic, setTopic] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!firstName || !lastName || !contactEmail || !presentationType || !topic) {
      setStatus("error");
      setErrorMsg("Please complete all fields.");
      return;
    }

    try {
      const payload = {
        firstName,
        lastName,
        email: contactEmail,
        presentationType: presentationType === "oral" ? "Oral presentation" : "Poster presentation",
        topic,
        _subject: `Abstract submission (JIF 2026) — ${presentationType.toUpperCase()} — ${topic}`,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Formspree request failed");

      setStatus("sent");
      // Opcional: limpiar campos
      // setFirstName(""); setLastName(""); setContactEmail(""); setPresentationType(""); setTopic("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Could not send. Please try again or contact the Secretariat by email.");
    }
  }

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
                    <span>
                      <strong>Abstracts submission is processed through this website form.</strong>
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <span>
                      <strong>Abstracts format</strong> must use the official template{" "}
                      <a
                        href={TEMPLATE_URL}
                        className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
                        download
                      >
                        (download template)
                      </a>{" "}
                      and any questions can be sent to{" "}
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

            {/* Submission form section */}
            <section className="pt-4">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Abstract submission form
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Fill in the details below. The Technical Secretariat will receive your submission by email.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-80" />
                <div className="p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                          First name
                        </label>
                        <input
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          name="firstName"
                          type="text"
                          required
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                          placeholder="First name"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                          Last name
                        </label>
                        <input
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          name="lastName"
                          type="text"
                          required
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                          placeholder="Last name"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                          Email
                        </label>
                        <input
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          name="email"
                          type="email"
                          required
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                          placeholder="you@email.com"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                          Presentation type
                        </label>

                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 cursor-pointer">
                            <input
                              type="radio"
                              name="presentationType"
                              checked={presentationType === "oral"}
                              onChange={() => setPresentationType("oral")}
                              required
                            />
                            <span className="font-medium text-slate-800">Oral presentation</span>
                          </label>

                          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 cursor-pointer">
                            <input
                              type="radio"
                              name="presentationType"
                              checked={presentationType === "poster"}
                              onChange={() => setPresentationType("poster")}
                              required
                            />
                            <span className="font-medium text-slate-800">Poster presentation</span>
                          </label>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">
                          Topic
                        </label>
                        <select
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          name="topic"
                          required
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-900/20"
                        >
                          <option value="" disabled>
                            Select a topic…
                          </option>
                          {TOPICS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-800 transition disabled:opacity-60"
                      >
                        {status === "sending" ? "Sending…" : "Send"}
                      </button>

                      <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent("Abstract submission (JIF 2026)")}`}
                        className="inline-flex justify-center items-center px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.22em] hover:bg-slate-50 transition"
                      >
                        Email Technical Secretariat
                      </a>
                    </div>

                    {status === "sent" && (
                      <p className="mt-6 text-xs text-slate-600 leading-relaxed">
                        Submission sent. If you don’t receive a reply, contact <strong>{EMAIL}</strong>.
                      </p>
                    )}

                    {status === "error" && (
                      <p className="mt-6 text-xs text-red-600 leading-relaxed">
                        {errorMsg}
                      </p>
                    )}

                    <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                      Note: this form sends your submission details by email to the Technical Secretariat. The abstract document
                      must follow the official template.
                    </p>
                  </form>
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
