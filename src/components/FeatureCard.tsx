import { motion } from "framer-motion"

export default function FeatureCard({
  tag,
  title,
  children,
}: {
  tag?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl p-[1px] gradient-stroke"
    >
      <div className="glass rounded-2xl bg-[color:var(--panel)] p-6">
        {tag && (
          <p className="caps mb-3 inline-flex rounded-full bg-black/[0.04] px-3 py-1 text-[10px] text-[color:var(--text)] ring-1 ring-black/10">
            {tag}
          </p>
        )}
        <h3 className="text-xl font-semibold text-[color:var(--text)]">{title}</h3>
        <div className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
          {children}
        </div>
      </div>
    </motion.div>
  )
}