// src/components/Chapter.tsx
// Each chapter occupies its own full-page section (min-height: 100vh)
// Cards are expanded with more text content

import Reveal from "./Reveal"
import FeatureCard from "./FeatureCard"

type Card = { tag?: string; title: string; body: React.ReactNode }

const THEMES = {
  c1945: {
    accent: "#c0132a",
    rgb: "192 19 42",
    kicker: { bg: "rgba(192,19,42,0.10)", border: "rgba(192,19,42,0.28)", text: "#9b0e1f", dot: "bg-red-700" },
    thesis: { bg: "rgba(192,19,42,0.07)", border: "rgba(192,19,42,0.22)" },
    pageBg: "radial-gradient(900px 600px at 0% 30%, rgba(192,19,42,0.07), transparent 55%), radial-gradient(600px 500px at 100% 80%, rgba(192,19,42,0.04), transparent 50%)",
    divider: "rgba(192,19,42,0.18)",
  },
  c1946: {
    accent: "#5b21b6",
    rgb: "91 33 182",
    kicker: { bg: "rgba(91,33,182,0.08)", border: "rgba(91,33,182,0.25)", text: "#4c1d95", dot: "bg-violet-700" },
    thesis: { bg: "rgba(91,33,182,0.06)", border: "rgba(91,33,182,0.20)" },
    pageBg: "radial-gradient(900px 600px at 0% 30%, rgba(91,33,182,0.07), transparent 55%), radial-gradient(600px 500px at 100% 80%, rgba(91,33,182,0.04), transparent 50%)",
    divider: "rgba(91,33,182,0.18)",
  },
  c1951: {
    accent: "#0c6b5f",
    rgb: "12 107 95",
    kicker: { bg: "rgba(12,107,95,0.08)", border: "rgba(12,107,95,0.25)", text: "#065f52", dot: "bg-teal-700" },
    thesis: { bg: "rgba(12,107,95,0.06)", border: "rgba(12,107,95,0.20)" },
    pageBg: "radial-gradient(900px 600px at 0% 30%, rgba(12,107,95,0.07), transparent 55%), radial-gradient(600px 500px at 100% 80%, rgba(12,107,95,0.04), transparent 50%)",
    divider: "rgba(12,107,95,0.18)",
  },
}

export default function Chapter({
  id,
  kicker,
  title,
  subtitle,
  thesis,
  cards,
  chapterNumber,
}: {
  id: string
  kicker: string
  title: string
  subtitle: string
  thesis: string
  cards: Card[]
  chapterNumber?: number
}) {
  const t = THEMES[id as keyof typeof THEMES] ?? THEMES.c1945

  return (
    <section
      id={id}
      className="scroll-mt-0 relative"
      style={{
        minHeight: "100vh",
        /* Each chapter starts on its own "page" via scroll-snap or just generous min-height */
        paddingTop: "7rem",
        paddingBottom: "5rem",
        borderTop: `1px solid ${t.divider}`,
      }}
    >
      {/* Full-page background tint */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: t.pageBg }}
      />

      {/* Large decorative chapter number */}
      <div
        className="pointer-events-none absolute right-4 top-10 select-none text-[180px] md:text-[260px] font-black leading-none opacity-[0.025]"
        style={{ color: t.accent }}
      >
        {chapterNumber ?? ""}
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">

        {/* ── Top header row ── */}
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <span
                className="caps inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px]"
                style={{
                  background: t.kicker.bg,
                  border: `1px solid ${t.kicker.border}`,
                  color: t.kicker.text,
                }}
              >
                <span className={`h-2 w-2 rounded-full ${t.kicker.dot}`} />
                {kicker}
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[color:var(--text)]"
              >
                {title}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)] max-w-2xl">
                {subtitle}
              </p>
            </Reveal>
          </div>

          {/* Thesis box – top-right */}
          <Reveal delay={0.18}>
            <div
              className="rounded-2xl p-5 md:w-72 self-start mt-1"
              style={{
                background: t.thesis.bg,
                border: `1px solid ${t.thesis.border}`,
              }}
            >
              <p className="caps text-[9px] mb-2 font-semibold" style={{ color: t.accent }}>
                LUẬN ĐIỂM TRUNG TÂM
              </p>
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                <span style={{ color: t.accent }} className="font-bold text-base">"</span>
                {thesis}
                <span style={{ color: t.accent }} className="font-bold text-base">"</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Horizontal divider ── */}
        <div
          className="mb-10 h-px w-full"
          style={{ background: `linear-gradient(90deg, ${t.accent}44, transparent)` }}
        />

        {/* ── Card grid ── */}
        {/* Auto-fill: 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <FeatureCard tag={c.tag} title={c.title} index={i}>
                {c.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}