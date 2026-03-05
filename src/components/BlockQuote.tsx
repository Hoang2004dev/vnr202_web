// BlockQuote.tsx
export default function BlockQuote({
  quote,
  author,
}: {
  quote: string
  author?: string
}) {
  return (
    <div className="my-16 flex justify-center">
      <blockquote className="max-w-3xl text-center">
        <p className="text-2xl md:text-3xl font-semibold italic text-red-700 leading-relaxed">
          “{quote}”
        </p>

        {author && (
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            — {author}
          </p>
        )}
      </blockquote>
    </div>
  )
}