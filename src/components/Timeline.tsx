type Step = { id: string; year: string; title: string; desc: string }

const steps: Step[] = [
  { id: "c1945", year: "1945–1946", title: "Giữ chính quyền", desc: "Mềm dẻo chiến thuật, kiên định mục tiêu." },
  { id: "c1946", year: "1946–1950", title: "Chiến tranh nhân dân", desc: "Toàn dân – toàn diện – lâu dài." },
  { id: "c1951", year: "1951–1954", title: "Quyết chiến chiến lược", desc: "Chủ động tiến công, kết thúc chiến tranh." },
]

export default function Timeline({ activeId }: { activeId: string }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-black/10 bg-black/[0.04] p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[color:var(--text)] md:text-3xl">
                Tiến trình chiến lược
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                3 chương – 1 mạch logic: <span className="text-amber-200">giữ</span> → <span className="text-amber-200">cầm cự</span> → <span className="text-amber-200">kết thúc</span>.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((s) => {
              const isActive = activeId === s.id
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={[
                    "group rounded-2xl border p-5 transition",
                    isActive ? "border-amber-200/30 bg-amber-200/10" : "border-black/10 bg-black/[0.03] hover:bg-white/[0.06]",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "grid h-9 w-9 place-items-center rounded-xl text-sm font-semibold",
                        isActive ? "bg-amber-200/20 text-amber-100" : "bg-white/10 text-[color:var(--text)]",
                      ].join(" ")}
                    >
                      {s.year.slice(2, 4)}
                    </span>
                    <div>
                      <p className="text-sm text-[color:var(--muted)]">{s.year}</p>
                      <p className="text-base font-semibold text-[color:var(--text)]">{s.title}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {s.desc}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="mt-3 text-xs text-[color:var(--muted2)] group-hover:text-[color:var(--muted)] transition">
                    Nhấn để chuyển đến chương
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}