import React from "react";

const HowToGet: React.FC = () => {
  const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-black text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition"
    >
      {children}
    </a>
  );

  const TransportCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    badge?: string;
    children: React.ReactNode;
  }> = ({ icon, title, badge, children }) => (
    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
      <div className="flex items-start justify-between gap-4">
        <div className="p-4 bg-slate-50 text-slate-900 rounded-2xl inline-block mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
          {icon}
        </div>
        {badge ? (
          <div className="mt-1 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
            {badge}
          </div>
        ) : null}
      </div>

      <h4 className="font-black text-slate-900 text-xl mb-6 uppercase tracking-tight">
        {title}
      </h4>

      <div className="text-sm text-slate-600 space-y-4 font-medium leading-relaxed">
        {children}
      </div>
    </div>
  );

  // Simple inline SVG icons (representativos)
  const IconTrain = (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 16l-2 2m14-2l2 2M7 3h10a3 3 0 013 3v9a4 4 0 01-4 4H8a4 4 0 01-4-4V6a3 3 0 013-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 10h12M8 14h1m6 0h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const IconBus = (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 17h12M7 21l1.5-3M17 21l-1.5-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 5h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 9h10M7 12h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const IconTaxi = (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 14l1-4h8l1 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 14h14a2 2 0 012 2v2H3v-2a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 18h0M17 18h0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M10 6h4M11 6V4h2v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const IconCar = (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 16l1-5a2 2 0 012-2h6a2 2 0 012 2l1 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 16h14a2 2 0 012 2v1H3v-1a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7.5 19h0M16.5 19h0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );

  const IconRideshare = (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 11a3 3 0 10-6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 20v-1a4 4 0 014-4h2a4 4 0 014 4v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 10a3 3 0 110-6 3 3 0 010 6z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 20v-1a4 4 0 014-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-20 text-center">
        <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
          Travel Information
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          How to get to Segovia
        </h1>
        <div className="h-1.5 w-16 bg-slate-900 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-32">
        {/* FROM AIRPORT */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight shrink-0">
              From Madrid-Barajas Airport (MAD)
            </h2>
            <div className="h-px bg-slate-200 grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TransportCard title="By Train" badge="Fastest" icon={IconTrain}>
              <p>
                <strong>Duration:</strong> ~1 h 03 min (including transfer).
              </p>
              <p>
                <strong>Route:</strong> From Terminal 4, take Renfe Cercanías{" "}
                <strong>C1</strong> or <strong>C10</strong> to{" "}
                <strong>Madrid Chamartín</strong> (≈15 min). Then take Renfe{" "}
                <strong>Avant</strong> or <strong>AVE</strong> high-speed train to{" "}
                <strong>Segovia Guiomar</strong> (≈27 min).
              </p>
              <p>
                <strong>Price:</strong> €10–€50 (depending on class and booking time).
              </p>
              <p>
                <strong>Frequency:</strong> Avant trains run frequently from Chamartín
                (first train ~06:20, last ~21:30).
              </p>
              <p>
                <strong>Tip:</strong> Book on{" "}
                <ExternalLink href="https://www.renfe.com">renfe.com</ExternalLink>{" "}
                or{" "}
                <ExternalLink href="https://www.thetrainline.com">
                  thetrainline.com
                </ExternalLink>
                .
              </p>
            </TransportCard>

            <TransportCard title="By Bus" badge="Cheapest" icon={IconBus}>
              <p>
                <strong>Duration:</strong> ~2 h 10 min (with transfers).
              </p>
              <p>
                <strong>Route:</strong> From the airport, take a bus or metro to{" "}
                <strong>Madrid Moncloa</strong>. Then take an{" "}
                <strong>Avanza</strong> bus to Segovia (≈1 h 20 min).
              </p>
              <p>
                <strong>Price:</strong> €8–€16.
              </p>
              <p>
                <strong>Note:</strong> No direct airport-to-Segovia bus; you must
                transfer in Madrid.
              </p>
            </TransportCard>

            <TransportCard title="By Taxi / Private Transfer" icon={IconTaxi}>
              <p>
                <strong>Duration:</strong> ~1 h 15 min.
              </p>
              <p>
                <strong>Price:</strong> €120–€150 (standard taxi). Private transfers
                can cost €140–€180.
              </p>
              <p>
                <strong>Tip:</strong> Official taxi ranks are outside Terminals 1, 2
                and 4.
              </p>
            </TransportCard>

            <TransportCard title="By Car" icon={IconCar}>
              <p>
                <strong>Distance:</strong> ~93–106 km.
              </p>
              <p>
                <strong>Driving time:</strong> ~1 h 10–1 h 20 min via A-6 and AP-61.
              </p>
              <p>
                <strong>Estimated cost:</strong> €15–€22 (fuel + tolls).
              </p>
            </TransportCard>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            <strong className="text-slate-700">Booking links:</strong>{" "}
            <ExternalLink href="https://www.renfe.com">Renfe</ExternalLink> ·{" "}
            <ExternalLink href="https://www.thetrainline.com">Trainline</ExternalLink>
          </div>
        </section>

        {/* FROM CITY CENTER */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight shrink-0">
              From Madrid City Center
            </h2>
            <div className="h-px bg-slate-200 grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TransportCard title="By Train (AVE / Avant)" badge="Fastest" icon={IconTrain}>
              <p>
                <strong>Duration:</strong> 25–30 min on AVE/Avant high-speed trains.
              </p>
              <p>
                <strong>Departure:</strong> Madrid Chamartín Clara Campoamor Station.
              </p>
              <p>
                <strong>Arrival:</strong> Segovia Guiomar Station (≈6 km from historic
                center; local bus or taxi needed).
              </p>
              <p>
                <strong>Price:</strong> From €7–€45 (average €12–€25 if booked early).
              </p>
              <p>
                <strong>Frequency:</strong> About every hour from 06:20 to 21:30.
              </p>
              <p>
                <strong>Tip:</strong> Book on{" "}
                <ExternalLink href="https://www.renfe.com">renfe.com</ExternalLink>{" "}
                or{" "}
                <ExternalLink href="https://www.thetrainline.com">
                  thetrainline.com
                </ExternalLink>
                .
              </p>
            </TransportCard>

            <TransportCard title="By Bus (Direct to city center)" badge="Cheapest" icon={IconBus}>
              <p>
                <strong>Duration:</strong> ~1 h 15–1 h 30 min.
              </p>
              <p>
                <strong>Departure:</strong> Moncloa Bus Station (Metro Lines 3 & 6).
              </p>
              <p>
                <strong>Arrival:</strong> Segovia Bus Station (near Aqueduct / historic
                center).
              </p>
              <p>
                <strong>Price:</strong> €5–€11.
              </p>
              <p>
                <strong>Frequency:</strong> Every 30 min from early morning until late
                evening.
              </p>
              <p>
                <strong>Operator:</strong> Avanza Grupo.
              </p>
              <p>
                <strong>Tip:</strong> Buy tickets at Moncloa or online via{" "}
                <ExternalLink href="https://www.omio.com">omio.com</ExternalLink>.
              </p>
            </TransportCard>

            <TransportCard title="By Car" icon={IconCar}>
              <p>
                <strong>Distance:</strong> ~93–97 km.
              </p>
              <p>
                <strong>Driving time:</strong> ~1 h 10–1 h 20 min via A-6 and AP-61.
              </p>
              <p>
                <strong>Estimated cost:</strong> €15–€22 (fuel + tolls).
              </p>
              <p>
                <strong>Tip:</strong> Good option if you want flexibility or plan to
                visit nearby towns like La Granja.
              </p>
            </TransportCard>

            <TransportCard title="Rideshare" icon={IconRideshare}>
              <p>
                <strong>Duration:</strong> ~1 h 30 min.
              </p>
              <p>
                <strong>Price:</strong> €3–€9 (e.g., BlaBlaCar).
              </p>
              <p>
                <strong>Tip:</strong> Cheapest option if you find a ride at the right
                time.
              </p>
            </TransportCard>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            <strong className="text-slate-700">Useful links:</strong>{" "}
            <ExternalLink href="https://www.renfe.com">Renfe</ExternalLink> ·{" "}
            <ExternalLink href="https://www.thetrainline.com">Trainline</ExternalLink>{" "}
            · <ExternalLink href="https://www.omio.com">Omio</ExternalLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToGet;
