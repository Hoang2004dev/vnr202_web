// HistoricalImage.tsx
import Reveal from "./Reveal"

export default function HistoricalImage({
  src,
  caption,
}: {
  src: string
  caption: string
}) {
  return (
    <Reveal>
      <figure className="my-16">

        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={src}
            className="w-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <figcaption className="mt-4 text-sm text-center text-[color:var(--muted)]">
          {caption}
        </figcaption>

      </figure>
    </Reveal>
  )
}