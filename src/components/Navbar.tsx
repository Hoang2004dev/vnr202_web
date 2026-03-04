// Navbar.tsx
// src/components/Navbar.tsx
import { motion, useScroll } from "framer-motion"

const items = [
  { id: "c1945", label: "1945–1946" },
  { id: "c1946", label: "1946–1950" },
  { id: "c1951", label: "1951–1954" },
  { id: "logic", label: "Logic" },
]

const COLORS: Record<string, { text: string; bg: string; underline: string }> = {
  c1945: { text: "#9b0e1f", bg: "rgba(192,19,42,0.08)",  underline: "#c0132a" },
  c1946: { text: "#4c1d95", bg: "rgba(91,33,182,0.08)",  underline: "#5b21b6" },
  c1951: { text: "#065f52", bg: "rgba(12,107,95,0.08)",  underline: "#0c6b5f" },
  logic: { text: "#78350f", bg: "rgba(181,106,0,0.08)",  underline: "#b56a00" },
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
                BIÊN NIÊN
              </span>
              <span className="text-base font-semibold text-[color:var(--muted)] group-hover:text-[color:var(--text)] transition">
                1945–1954
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
                    style={{ color: on ? c.text : "rgba(38,18,8,0.55)", background: on ? c.bg : "transparent" }}
                  >
                    {it.label}
                    {on && (
                      <span className="absolute inset-x-3 -bottom-[6px] h-[2px] rounded-full" style={{ background: c.underline }} />
                    )}
                  </a>
                )
              })}
            </nav>

            <a href="#c1945" className="md:hidden rounded-xl border border-black/12 bg-black/[0.04] px-3 py-2 text-sm text-[color:var(--muted)]">
              Bắt đầu
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}