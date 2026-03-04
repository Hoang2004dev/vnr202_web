import { motion, useScroll } from "framer-motion"

const steps = [
  { id: "c1945", label: "1945–46", title: "Giữ chính quyền" },
  { id: "c1946", label: "1946–50", title: "Chiến tranh nhân dân" },
  { id: "c1951", label: "1951–54", title: "Quyết chiến chiến lược" },
  { id: "logic", label: "Tổng kết", title: "Logic toàn chương" },
]

export default function TimelineRail({ activeId }: { activeId: string }) {
  const { scrollYProgress } = useScroll()

  return (
    <aside className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <div className="relative rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-5 backdrop-blur-xl">
        <div className="absolute left-5 top-5 bottom-5 w-px bg-white/10" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="origin-top absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[var(--amber)] via-[var(--sky)] to-[var(--mint)]"
        />

        <div className="grid gap-4">
          {steps.map((s) => {
            const on = activeId === s.id
            return (
              <a key={s.id} href={`#${s.id}`} className="group flex items-start gap-3">
                <span
                  className={[
                    "mt-[6px] h-2.5 w-2.5 rounded-full ring-2 transition",
                    on
                      ? "bg-[var(--amber)] ring-[rgba(246,193,119,0.35)]"
                      : "bg-white/25 ring-black/10 group-hover:bg-white/40",
                  ].join(" ")}
                />
                <div className="min-w-[170px]">
                  <p className={["caps text-[10px]", on ? "text-[var(--amber)]" : "text-[color:var(--muted2)]"].join(" ")}>
                    {s.label}
                  </p>
                  <p className={["text-sm", on ? "text-[color:var(--text)]" : "text-[color:var(--muted)] group-hover:text-[color:var(--text)]"].join(" ")}>
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