// Hero.tsx
// src/components/Hero.tsx
import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section id="top" className="relative pt-28">
      {/* Subtle crimson spotlight from top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(700px 500px at 50% 0%, rgba(192,19,42,0.08), transparent 60%)" }}
      />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:pb-32">
        <div className="text-center">

          {/* Kicker */}
          <Reveal>
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-red-800/25 bg-red-700/10 px-4 py-2 text-xs text-red-800">
              <span className="h-2 w-2 rounded-full bg-red-700 dot-pulse" />
              Thuyết trình • Phân tích chiến lược • 1945–1954
            </p>
          </Reveal>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="mt-8 text-5xl font-semibold leading-[1.1] md:text-7xl text-[color:var(--text)]">
              Kháng chiến chống Pháp
            </h1>
            <h2
              className="mt-3 text-4xl font-semibold md:text-6xl"
              style={{
                background: "linear-gradient(135deg, #c0132a 0%, #b56a00 35%, #5b21b6 65%, #0c6b5f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Logic chiến lược của Đảng
            </h2>
          </motion.div>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Không kể sự kiện rời rạc — đi theo{" "}
              <span className="font-semibold text-[color:var(--text)]">mạch tư duy</span>:{" "}
              <span className="font-semibold text-red-700">giữ chính quyền</span> →{" "}
              <span className="font-semibold text-violet-700">chiến tranh nhân dân</span> →{" "}
              <span className="font-semibold text-teal-700">quyết chiến chiến lược</span>.
            </p>
          </Reveal>

          {/* Tag pills */}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { t: "Dĩ bất biến",         bg: "rgba(192,19,42,0.10)",  border: "rgba(192,19,42,0.30)",  text: "#9b0e1f" },
                { t: "Toàn dân–toàn diện",  bg: "rgba(91,33,182,0.08)",  border: "rgba(91,33,182,0.28)",  text: "#4c1d95" },
                { t: "Trường kỳ",            bg: "rgba(181,106,0,0.10)",  border: "rgba(181,106,0,0.30)",  text: "#92400e" },
                { t: "Dựa vào sức mình",     bg: "rgba(12,107,95,0.08)",  border: "rgba(12,107,95,0.28)",  text: "#065f52" },
              ].map((tag) => (
                <span
                  key={tag.t}
                  className="rounded-full px-4 py-1.5 text-xs font-semibold"
                  style={{ background: tag.bg, border: `1px solid ${tag.border}`, color: tag.text }}
                >
                  {tag.t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* 3-phase mini strip */}
          <Reveal delay={0.4}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-black/10 shadow-md">
              {[
                { year: "1945–1946", label: "GIỮ",      color: "#c0132a", bg: "rgba(192,19,42,0.08)"  },
                { year: "1946–1950", label: "CẦM CỰ",   color: "#5b21b6", bg: "rgba(91,33,182,0.07)"  },
                { year: "1951–1954", label: "KẾT THÚC", color: "#0c6b5f", bg: "rgba(12,107,95,0.07)"  },
              ].map((phase, i) => (
                <div
                  key={phase.label}
                  className="flex flex-col items-center py-5 px-3"
                  style={{
                    background: phase.bg,
                    borderRight: i < 2 ? "1px solid rgba(38,18,8,0.08)" : undefined,
                  }}
                >
                  <span className="caps text-[9px] text-[color:var(--muted2)]">{phase.year}</span>
                  <span className="mt-1 text-lg font-bold caps" style={{ color: phase.color }}>
                    {phase.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#c1945" className="relative rounded-2xl p-[1.5px] gradient-stroke">
                <span className="block rounded-2xl bg-white/80 px-6 py-3 text-sm font-semibold text-[color:var(--text)] hover:bg-white transition">
                  Bắt đầu Chương 1 →
                </span>
              </a>
              <a
                href="#logic"
                className="rounded-2xl border border-black/15 bg-black/[0.04] px-6 py-3 text-sm font-medium text-[color:var(--muted)] hover:bg-white/50 hover:text-[color:var(--text)] transition"
              >
                Xem logic toàn chương
              </a>
            </div>
          </Reveal>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <div className="h-10 w-px bg-gradient-to-b from-transparent via-red-700/40 to-transparent" />
            <a href="#c1945" className="caps text-[10px] text-[color:var(--muted2)] hover:text-red-700 transition">
              Cuộn xuống
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}