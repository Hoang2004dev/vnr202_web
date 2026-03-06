// src/components/Timeline.tsx
type Step = { id: string; part: string; title: string; desc: string; color: string }

const steps: Step[] = [
  {
    id: "context",
    part: "Phần I",
    title: "Bối cảnh 1945",
    desc: "Chính quyền non trẻ, nạn đói, quân thù bao vây — tình thế ngàn cân treo sợi tóc.",
    color: "#c0132a",
  },
  {
    id: "negotiation",
    part: "Phần II",
    title: "Hòa hoãn – Nhân nhượng",
    desc: "Dĩ bất biến ứng vạn biến — nhân nhượng chiến thuật để giữ độc lập lâu dài.",
    color: "#b56a00",
  },
  {
    id: "aggression",
    part: "Phần III",
    title: "Dã tâm leo thang của Pháp",
    desc: "Phá đàm phán, tấn công Hải Phòng, tối hậu thư 18/12 — mọi cửa hòa bình bị đóng lại.",
    color: "#5b21b6",
  },
  {
    id: "conclusion",
    part: "Phần IV",
    title: "Chiến tranh không thể tránh",
    desc: "Kháng chiến là tất yếu — không phải lựa chọn, mà là nghĩa vụ giữ gìn độc lập.",
    color: "#0c6b5f",
  },
]

export default function Timeline({ activeId }: { activeId: string }) {
  return (
    <section className="py-10 font-inherit">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-black/10 bg-black/[0.04] p-6 md:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[color:var(--text)] md:text-3xl">
              Cấu trúc thuyết trình
            </h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              4 phần — 1 luận điểm:{" "}
              <span className="text-amber-200">bối cảnh</span> →{" "}
              <span className="text-amber-200">hòa hoãn</span> →{" "}
              <span className="text-amber-200">leo thang</span> →{" "}
              <span className="text-amber-200">tất yếu kháng chiến</span>.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((s) => {
              const isActive = activeId === s.id
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={[
                    "group rounded-2xl border p-5 transition",
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-black/10 bg-black/[0.03] hover:bg-white/[0.06]",
                  ].join(" ")}
                  style={isActive ? { borderColor: `${s.color}33`, background: `${s.color}12` } : {}}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="grid h-8 w-8 place-items-center rounded-xl text-xs font-bold flex-shrink-0"
                      style={
                        isActive
                          ? { background: `${s.color}22`, color: s.color }
                          : { background: "rgba(255,255,255,0.08)", color: "rgba(38,18,8,0.55)" }
                      }
                    >
                      {s.part.replace("Phần ", "")}
                    </span>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest" style={{ color: isActive ? s.color : "rgba(38,18,8,0.40)" }}>
                        {s.part}
                      </p>
                      <p className="text-sm font-semibold text-[color:var(--text)] leading-tight">{s.title}</p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-[color:var(--muted)]">{s.desc}</p>

                  <div className="mt-4 h-px w-full" style={{ background: `linear-gradient(90deg, ${s.color}30, transparent)` }} />
                  <p className="mt-3 text-[10px] text-[color:var(--muted2)] group-hover:text-[color:var(--muted)] transition">
                    Nhấn để chuyển đến phần
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