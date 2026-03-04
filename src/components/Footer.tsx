// Footer.tsx
// src/components/Footer.tsx
import Reveal from "./Reveal"

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="rainbow-divider mb-10" />
          <div className="glass rounded-3xl p-10 text-center">
            <p
              className="text-xl font-semibold leading-relaxed"
              style={{
                background: "linear-gradient(135deg, #c0132a, #5b21b6, #0c6b5f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "Lấy độc lập dân tộc làm mục tiêu bất biến —
              <br />
              lấy nhân dân làm nền tảng sức mạnh."
            </p>

            <div className="mt-6 flex justify-center gap-3">
              {[
                { l: "GIỮ",      c: "#c0132a", bg: "rgba(192,19,42,0.10)",  b: "rgba(192,19,42,0.28)" },
                { l: "CẦM CỰ",   c: "#5b21b6", bg: "rgba(91,33,182,0.08)",  b: "rgba(91,33,182,0.25)" },
                { l: "KẾT THÚC", c: "#0c6b5f", bg: "rgba(12,107,95,0.08)",  b: "rgba(12,107,95,0.25)" },
              ].map((x) => (
                <span key={x.l} className="caps rounded-full px-4 py-1.5 text-[10px] font-bold"
                  style={{ background: x.bg, border: `1px solid ${x.b}`, color: x.c }}>
                  {x.l}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-[color:var(--muted2)]">
              Web thuyết trình • React + Tailwind + Motion
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}