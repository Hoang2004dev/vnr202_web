// Navbar.tsx
import { motion, useScroll } from "framer-motion"

type NavItem = { id: string; label: string }

const items: NavItem[] = [
  { id: "c1945", label: "1945–1946" },
  { id: "c1946", label: "1946–1950" },
  { id: "c1951", label: "1951–1954" },
  { id: "logic", label: "Logic" },
]

export default function Navbar({ activeId }: { activeId: string }) {
  const { scrollYProgress } = useScroll()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* progress line */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="origin-left h-[3px] w-full bg-gradient-to-r from-[var(--amber)] via-[var(--sky)] to-[var(--mint)]"
      />
      <div className="mx-auto max-w-6xl px-4 pt-3">
        <div className="glass rounded-2xl backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group flex items-baseline gap-3">
              <span className="caps text-sm text-[var(--amber)]">BIÊN NIÊN</span>
              <span className="text-base font-semibold text-[color:var(--text)] group-hover:text-white transition">
                1945–1954
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {items.map((it) => {
                const isActive = activeId === it.id
                return (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    className={[
                      "relative rounded-xl px-3 py-2 text-sm transition",
                      "hover:bg-black/5",
                      isActive ? "text-[var(--amber)]" : "text-[color:var(--muted)]",
                    ].join(" ")}
                  >
                    {it.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-[6px] h-[2px] rounded-full bg-[var(--amber)] opacity-90" />
                    )}
                  </a>
                )
              })}
            </nav>

            <a
              href="#c1945"
              className="md:hidden rounded-xl bg-white/8 px-3 py-2 text-sm text-[color:var(--text)] ring-1 ring-black/10"
            >
              Bắt đầu
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}