// src/components/Navbar.tsx
import { motion, useScroll } from "framer-motion"

const items = [
  { id: "context",     label: "Bối cảnh 1945" },
  { id: "negotiation", label: "Hòa hoãn" },
  { id: "aggression",  label: "Leo thang Pháp" },
  { id: "conclusion",  label: "Kết luận" },
]

const COLORS: Record<string, { text: string; bg: string; underline: string }> = {
  context:     { text: "#9b0e1f", bg: "rgba(192,19,42,0.08)",  underline: "#c0132a" },
  negotiation: { text: "#92400e", bg: "rgba(181,106,0,0.08)",  underline: "#b56a00" },
  aggression:  { text: "#4c1d95", bg: "rgba(91,33,182,0.08)",  underline: "#5b21b6" },
  conclusion:  { text: "#065f52", bg: "rgba(12,107,95,0.08)",  underline: "#0c6b5f" },
}

export default function Navbar({ activeId }: { activeId: string }) {
  const { scrollYProgress } = useScroll()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="origin-left h-[3px] w-full progress-bar"
      />
      <div className="mx-auto max-w-6xl px-4 pt-3">
        <div className="glass rounded-2xl backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between px-4 py-3">

            <a href="#top" className="group flex items-baseline gap-3">
              <span
                className="caps text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #c0132a, #b56a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KHÁNG CHIẾN
              </span>
              <span className="text-base font-semibold text-[color:var(--muted)] group-hover:text-[color:var(--text)] transition">
                1945–1946
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {items.map((it) => {
                const on = activeId === it.id
                const c = COLORS[it.id]
                return (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    className="relative rounded-xl px-4 py-2 text-sm transition"
                    style={{
                      color: on ? c.text : "rgba(38,18,8,0.55)",
                      background: on ? c.bg : "transparent",
                    }}
                  >
                    {it.label}
                    {on && (
                      <span
                        className="absolute inset-x-3 -bottom-[6px] h-[2px] rounded-full"
                        style={{ background: c.underline }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            <a
              href="#context"
              className="md:hidden rounded-xl border border-black/12 bg-black/[0.04] px-3 py-2 text-sm text-[color:var(--muted)]"
            >
              Bắt đầu
            </a>

          </div>
        </div>
      </div>
    </header>
  )
}