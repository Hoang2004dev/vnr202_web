// Hero.tsx
import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section id="top" className="pt-28">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24">
        <div className="text-center">
          <Reveal>
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-xs text-[color:var(--text)]">
              <span className="h-2 w-2 rounded-full bg-[var(--amber)]" />
              Thuyết trình • Phân tích chiến lược • 1945–1954
            </p>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-7 text-4xl font-semibold leading-tight md:text-6xl"
          >
            Kháng chiến chống Pháp
            <span className="block bg-gradient-to-r from-[var(--amber)] via-slate-100 to-[var(--sky)] bg-clip-text text-transparent">
              Logic chiến lược của Đảng
            </span>
          </motion.h1>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Không kể sự kiện rời rạc — đi theo <span className="text-[color:var(--text)]">mạch tư duy</span>:
              <span className="text-[var(--amber)]"> giữ chính quyền</span> →{" "}
              <span className="text-[var(--sky)]">chiến tranh nhân dân</span> →{" "}
              <span className="text-[var(--mint)]">quyết chiến chiến lược</span>.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["Dĩ bất biến", "Toàn dân–toàn diện", "Trường kỳ", "Dựa vào sức mình"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-[color:var(--text)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#c1945"
                className="relative rounded-2xl p-[1px] gradient-stroke"
              >
                <span className="block rounded-2xl bg-white/70 px-5 py-3 text-sm font-medium text-[color:var(--text)] hover:bg-white/85 transition">
                  Bắt đầu chương 1
                </span>
              </a>

              <a
                href="#logic"
                className="rounded-2xl bg-black/[0.04] px-5 py-3 text-sm font-medium text-[color:var(--text)] ring-1 ring-black/10 hover:bg-white/[0.07] transition"
              >
                Xem logic toàn chương
              </a>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <a href="#c1945" className="text-xs text-[color:var(--muted2)] hover:text-[color:var(--text)] transition">
              Cuộn xuống ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}