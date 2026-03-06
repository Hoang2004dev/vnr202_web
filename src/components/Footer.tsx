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
                background: "linear-gradient(135deg, #c0132a, #b56a00, #5b21b6, #0c6b5f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "Chúng ta muốn hòa bình, chúng ta phải nhân nhượng.
              <br />
              Nhưng chúng ta càng nhân nhượng, thực dân càng lấn tới."
            </p>

            <p className="mt-3 text-xs text-[color:var(--muted2)]">
              — Hồ Chí Minh, Lời kêu gọi Toàn quốc kháng chiến, 19/12/1946
            </p>

            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              {[
                { l: "Bối cảnh",  c: "#c0132a", bg: "rgba(192,19,42,0.10)", b: "rgba(192,19,42,0.28)" },
                { l: "Hòa hoãn", c: "#b56a00", bg: "rgba(181,106,0,0.10)",  b: "rgba(181,106,0,0.28)"  },
                { l: "Leo thang", c: "#5b21b6", bg: "rgba(91,33,182,0.08)",  b: "rgba(91,33,182,0.25)" },
                { l: "Tất yếu",  c: "#0c6b5f", bg: "rgba(12,107,95,0.08)",  b: "rgba(12,107,95,0.25)" },
              ].map((x) => (
                <span
                  key={x.l}
                  className="caps rounded-full px-4 py-1.5 text-[10px] font-bold"
                  style={{ background: x.bg, border: `1px solid ${x.b}`, color: x.c }}
                >
                  {x.l}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-[color:var(--muted2)]">
              Nhóm 3
            </p>

          </div>
        </Reveal>
      </div>
    </footer>
  )
}