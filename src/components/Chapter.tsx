// Chapter.tsx
// src/components/Chapter.tsx
import Reveal from "./Reveal"
import FeatureCard from "./FeatureCard"

type Card = { tag?: string; title: string; body: React.ReactNode }

const THEMES = {
  c1945: { accent: "#c0132a", rgb: "192 19 42",  kicker: { bg: "rgba(192,19,42,0.10)", border: "rgba(192,19,42,0.28)", text: "#9b0e1f", dot: "bg-red-700" },    thesis: { bg: "rgba(192,19,42,0.07)", border: "rgba(192,19,42,0.22)" } },
  c1946: { accent: "#5b21b6", rgb: "91 33 182",  kicker: { bg: "rgba(91,33,182,0.08)", border: "rgba(91,33,182,0.25)", text: "#4c1d95", dot: "bg-violet-700" }, thesis: { bg: "rgba(91,33,182,0.06)", border: "rgba(91,33,182,0.20)" } },
  c1951: { accent: "#0c6b5f", rgb: "12 107 95",  kicker: { bg: "rgba(12,107,95,0.08)",  border: "rgba(12,107,95,0.25)",  text: "#065f52", dot: "bg-teal-700" },   thesis: { bg: "rgba(12,107,95,0.06)",  border: "rgba(12,107,95,0.20)"  } },
}

export default function Chapter({ id, kicker, title, subtitle, thesis, cards }: {
  id: string; kicker: string; title: string; subtitle: string; thesis: string; cards: Card[]
}) {
  const t = THEMES[id as keyof typeof THEMES] ?? THEMES.c1945

  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24 relative">
      {/* Section tint */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(600px 400px at 0% 50%, rgba(${t.rgb},0.06), transparent 60%)` }}
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[300px_1fr]">

          {/* Sidebar */}
          <div className="relative">
            <div className="sticky top-28">
              <Reveal>
                <span
                  className="caps inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px]"
                  style={{ background: t.kicker.bg, border: `1px solid ${t.kicker.border}`, color: t.kicker.text }}
                >
                  <span className={`h-2 w-2 rounded-full ${t.kicker.dot}`} />
                  {kicker}
                </span>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="mt-5 text-3xl font-semibold text-[color:var(--text)] leading-snug">{title}</h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{subtitle}</p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-6 rounded-2xl p-5" style={{ background: t.thesis.bg, border: `1px solid ${t.thesis.border}` }}>
                  <p className="caps text-[9px] mb-2" style={{ color: t.accent }}>LUẬN ĐIỂM</p>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    <span style={{ color: t.accent }} className="font-bold">"</span>
                    {thesis}
                    <span style={{ color: t.accent }} className="font-bold">"</span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <FeatureCard tag={c.tag} title={c.title} index={i}>{c.body}</FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}