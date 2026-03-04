// Chapter.tsx
import Reveal from "./Reveal"
import FeatureCard from "./FeatureCard"

type Card = { tag?: string; title: string; body: React.ReactNode }

export default function Chapter({
  id,
  kicker,
  title,
  subtitle,
  thesis,
  cards,
}: {
  id: string
  kicker: string
  title: string
  subtitle: string
  thesis: string
  cards: Card[]
}) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[280px_1fr]">
          <div className="relative">
            <div className="sticky top-28">
              <Reveal>
                <p className="caps inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-[10px] text-[color:var(--text)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--amber)]" />
                  {kicker}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="mt-4 text-3xl font-semibold text-[color:var(--text)]">
                  {title}
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-6 rounded-2xl border border-black/20 bg-white/60 p-5 shadow-sm">
                  <p className="caps text-[10px] text-[color:var(--muted2)]">LUẬN ĐIỂM</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text)]">
                    “{thesis}”
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <FeatureCard tag={c.tag} title={c.title}>
                  {c.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}