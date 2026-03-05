// App.tsx
import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TimelineRail from "./components/TimelineRail"
import Reveal from "./components/Reveal"
import Footer from "./components/Footer"
import { useActiveSection } from "./hooks/useActiveSection"

import BlockQuote from "./components/BlockQuote"
import HistoricalImage from "./components/HistoricalImage"
import Gallery from "./components/Gallery"

// 3 section components — each has a distinct layout
import Section1945 from "./sections/Section1945"   // Story / documentary
import Section1946 from "./sections/Section1946"   // Timeline
import Section1951 from "./sections/Section1951"   // Hero battle / climax

export default function App() {
  const sectionIds = ["c1945", "c1946", "c1951", "logic"]
  const activeId = useActiveSection(sectionIds)

  return (
    <div>
      <Backdrop />
      <Navbar activeId={activeId} />
      <TimelineRail activeId={activeId} />

      {/* ── HERO ── */}
      <Hero />

      {/* ── Opening image ── */}
      <HistoricalImage
        src="/images/tuyen-ngon-doc-lap.jpg"
        caption="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, ngày 2/9/1945."
      />

      {/* ════════════════════════════════════════════
          CHƯƠNG 1: Story / documentary layout
          ════════════════════════════════════════════ */}
      <Section1945 />

      <Gallery
        images={[
          { src: "/images/nan-doi-1945.jpg",       caption: "Nạn đói năm 1945 khiến hơn 2 triệu người chết" },
          { src: "/images/binh-dan-hoc-vu.jpg",    caption: "Phong trào Bình dân học vụ" },
          { src: "/images/tong-tuyen-cu-1946.jpg", caption: "Cuộc Tổng tuyển cử đầu tiên năm 1946" },
        ]}
      />

      <BlockQuote
        quote="Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, không chịu làm nô lệ."
        author="Hồ Chí Minh – Lời kêu gọi Toàn quốc kháng chiến (19/12/1946)"
      />

      {/* ════════════════════════════════════════════
          CHƯƠNG 2: Timeline layout
          ════════════════════════════════════════════ */}
      <Section1946 />

      <Gallery
        images={[
          { src: "/images/ha-noi-1946.jpg",          caption: "Chiến đấu tại Hà Nội 1946" },
          { src: "/images/viet-bac-1947.jpg",         caption: "Chiến thắng Việt Bắc Thu Đông 1947" },
          { src: "/images/chien-dich-bien-gioi.jpg",  caption: "Chiến dịch Biên giới 1950" },
        ]}
      />

      {/* ════════════════════════════════════════════
          CHƯƠNG 3: Hero battle / climax layout
          ════════════════════════════════════════════ */}
      <Section1951 />

      <Gallery
        images={[
          { src: "/images/dien-bien-phu.jpg",  caption: "Chiến dịch Điện Biên Phủ 1954" },
          { src: "/images/vo-nguyen-giap.jpg", caption: "Đại tướng Võ Nguyên Giáp chỉ huy chiến dịch" },
          { src: "/images/geneva-1954.jpg",    caption: "Hội nghị Giơnevơ 1954" },
        ]}
      />

      {/* ════════════════════════════════════════════
          LOGIC CHIẾN LƯỢC
          ════════════════════════════════════════════ */}
      <section id="logic" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="rounded-3xl border p-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Logic chiến lược toàn chương</h2>
              <p className="text-lg text-[color:var(--muted)]">
                1945–46: giữ chính quyền •
                1946–50: chiến tranh nhân dân •
                1951–54: quyết chiến chiến lược.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}