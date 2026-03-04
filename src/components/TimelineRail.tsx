// src\components\TimelineRail.tsx
// src/components/TimelineRail.tsx
import { motion, useScroll } from "framer-motion"

const steps = [
  { id: "c1945", label: "1945–46",  title: "Giữ chính quyền",       color: "#c0132a", ring: "rgba(192,19,42,0.25)" },
  { id: "c1946", label: "1946–50",  title: "Chiến tranh nhân dân",   color: "#5b21b6", ring: "rgba(91,33,182,0.22)"  },
  { id: "c1951", label: "1951–54",  title: "Quyết chiến chiến lược", color: "#0c6b5f", ring: "rgba(12,107,95,0.22)"  },
  { id: "logic", label: "Tổng kết", title: "Logic toàn chương",      color: "#b56a00", ring: "rgba(181,106,0,0.22)"  },
]

export default function TimelineRail({ activeId }: { activeId: string }) {
  const { scrollYProgress } = useScroll()

  return (
    <aside className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <div className="glass relative rounded-2xl px-4 py-5">
        {/* Track */}
        <div className="absolute left-5 top-5 bottom-5 w-px bg-black/10" />
        {/* Progress */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="origin-top absolute left-5 top-5 bottom-5 w-px"
        >
          <div className="h-full w-full" style={{ background: "linear-gradient(to bottom, #c0132a, #5b21b6, #0c6b5f, #b56a00)" }} />
        </motion.div>

        <div className="grid gap-5">
          {steps.map((s) => {
            const on = activeId === s.id
            return (
              <a key={s.id} href={`#${s.id}`} className="group flex items-start gap-3">
                <span
                  className="mt-[6px] h-2.5 w-2.5 rounded-full transition-all duration-300"
                  style={on
                    ? { background: s.color, boxShadow: `0 0 0 3px ${s.ring}`, outline: `2px solid ${s.color}` }
                    : { background: "rgba(38,18,8,0.18)", border: "2px solid rgba(38,18,8,0.12)" }
                  }
                />
                <div className="min-w-[160px]">
                  <p className="caps text-[10px]" style={{ color: on ? s.color : "rgba(38,18,8,0.42)" }}>{s.label}</p>
                  <p
                    className="text-sm transition"
                    style={{ color: on ? "rgba(38,18,8,0.90)" : "rgba(38,18,8,0.55)", fontWeight: on ? 600 : 400 }}
                  >
                    {s.title}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}