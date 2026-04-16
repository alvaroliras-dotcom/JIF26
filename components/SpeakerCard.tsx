import React from "react";

type SpeakerCardProps = {
  name: string;
  role?: string; // e.g. "Plenary Speaker"
  affiliation?: string; // e.g. "University of..."
  country?: string; // e.g. "Spain"
  image?: string; // url/path
  bio?: string;
  tags?: string[]; // e.g. ["Photocatalysis", "Ultrafast spectroscopy"]
  links?: {
    website?: string;
    scholar?: string;
    linkedin?: string;
    x?: string;
    email?: string;
  };
  onClick?: () => void; // opcional: abrir modal o ir a ficha
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  affiliation,
  country,
  image,
  bio,
  tags,
  links,
  onClick,
}) => {
  const hasLinks =
    !!links?.website || !!links?.scholar || !!links?.linkedin || !!links?.x || !!links?.email;

  return (
    <article
      className={[
        "group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        onClick ? "cursor-pointer" : "",
      ].join(" ")}
      onClick={onClick}
    >
      {/* TOP: Imagen protagonista */}
      <div className="relative">
        <div className="aspect-square w-full bg-slate-100 overflow-hidden">
          <img
            src={image || "/assets/speakers/placeholder.jpg"}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Cinta espectral (leitmotiv controlado) */}
        <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500 opacity-90" />

        {/* Badge role */}
        {role && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur">
              {role}
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <header className="space-y-2">
          <h3 className="text-lg font-black text-slate-900 leading-tight">{name}</h3>

          {(affiliation || country) && (
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
              {affiliation}
              {affiliation && country ? " · " : ""}
              {country}
            </p>
          )}
        </header>

        {/* Bio (limitada para que la card sea elegante) */}
        {bio && (
          <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-4">
            {bio}
          </p>
        )}

        {/* Tags */}
        {tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-600 border border-slate-100"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Links */}
        {hasLinks && (
          <div className="mt-6 flex flex-wrap gap-2">
            {links?.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Website
              </a>
            )}

            {links?.scholar && (
              <a
                href={links.scholar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Scholar
              </a>
            )}

            {links?.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                onClick={(e) => e.stopPropagation()}
              >
                LinkedIn
              </a>
            )}

            {links?.x && (
              <a
                href={links.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                onClick={(e) => e.stopPropagation()}
              >
                X
              </a>
            )}

            {links?.email && (
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Email
              </a>
            )}
          </div>
        )}
      </div>

      {/* Bottom action hint (solo si hay onClick) */}
      {onClick && (
        <div className="px-6 pb-6">
          <div className="rounded-2xl bg-slate-950 text-white px-4 py-3 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-[0.22em] opacity-90">
              View speaker
            </span>
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 via-lime-400 via-sky-500 to-violet-500" />
          </div>
        </div>
      )}
    </article>
  );
};

export default SpeakerCard;
