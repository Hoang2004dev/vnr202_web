import Reveal from "./Reveal"

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="glass rounded-3xl p-8 text-center">
            <p className="text-sm text-[color:var(--text)]">
              “Lấy độc lập dân tộc làm mục tiêu bất biến — lấy nhân dân làm nền tảng sức mạnh.”
            </p>
            <p className="mt-2 text-xs text-[color:var(--muted2)]">
              Web thuyết trình • React + Tailwind + Motion
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}