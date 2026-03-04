// FeatureCard.tsx
// src/components/FeatureCard.tsx
import { motion } from "framer-motion"

const ACCENTS = [
  { border: "rgba(192,19,42,0.40)",  glow: "rgba(192,19,42,0.07)", tagBg: "rgba(192,19,42,0.10)", tagBorder: "rgba(192,19,42,0.30)", tagText: "#9b0e1f",  titleColor: "#7f0d19" },
  { border: "rgba(181,106,0,0.40)",  glow: "rgba(181,106,0,0.07)", tagBg: "rgba(181,106,0,0.10)", tagBorder: "rgba(181,106,0,0.30)", tagText: "#92400e",  titleColor: "#78350f" },
  { border: "rgba(91,33,182,0.35)",  glow: "rgba(91,33,182,0.07)", tagBg: "rgba(91,33,182,0.08)", tagBorder: "rgba(91,33,182,0.28)", tagText: "#4c1d95",  titleColor: "#3b1a7a" },
  { border: "rgba(12,107,95,0.35)",  glow: "rgba(12,107,95,0.07)", tagBg: "rgba(12,107,95,0.08)", tagBorder: "rgba(12,107,95,0.28)", tagText: "#065f52",  titleColor: "#064e3b" },
]

export default function FeatureCard({
  tag, title, children, index = 0,
}: {
  tag?: string; title: string; children: React.ReactNode; index?: number
}) {
  const a = ACCENTS[index % ACCENTS.length]

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden cursor-default glass"
      style={{ border: `1px solid ${a.border}` }}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${a.border}, transparent)` }} />

      {/* Subtle glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: `radial-gradient(380px 260px at 50% 0%, ${a.glow}, transparent 70%)` }}
      />

      <div className="relative p-6">
        {tag && (
          <span
            className="caps mb-3 inline-flex rounded-full px-3 py-1 text-[10px] font-medium"
            style={{ background: a.tagBg, border: `1px solid ${a.tagBorder}`, color: a.tagText }}
          >
            {tag}
          </span>
        )}
        <h3 className="text-xl font-semibold" style={{ color: a.titleColor }}>{title}</h3>
        <div className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{children}</div>
      </div>
    </motion.div>
  )
}