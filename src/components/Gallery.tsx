// Gallery.tsx
import Reveal from "./Reveal"

export default function Gallery({
  images,
}: {
  images: { src: string; caption: string }[]
}) {
  return (
    <section className="py-24">

      <h3 className="text-2xl font-bold text-center mb-12">
        Hình ảnh lịch sử
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {images.map((img, i) => (
          <Reveal key={i}>

            <figure className="group">

              <div className="overflow-hidden rounded-xl shadow-xl">
                <img
                  src={img.src}
                  className="w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <figcaption className="mt-3 text-xs text-center text-[color:var(--muted)]">
                {img.caption}
              </figcaption>

            </figure>

          </Reveal>
        ))}

      </div>

    </section>
  )
}