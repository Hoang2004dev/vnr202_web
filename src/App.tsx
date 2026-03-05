// App.tsx
import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TimelineRail from "./components/TimelineRail"
import Footer from "./components/Footer"
import { useActiveSection } from "./hooks/useActiveSection"
import BlockQuote from "./components/BlockQuote"
import HistoricalImage from "./components/HistoricalImage"
import Gallery from "./components/Gallery"

import SectionContext      from "./sections/SectionContext"       // I:  Bối cảnh 1945
import SectionNegotiation  from "./sections/SectionNegotiation"   // II: Hòa hoãn – nhân nhượng
import SectionFrenchAggression from "./sections/SectionFrenchAggression" // III: Leo thang của Pháp
import SectionConclusion   from "./sections/SectionConclusion"    // IV: Chiến tranh không thể tránh

export default function App() {
  const sectionIds = ["context", "negotiation", "aggression", "conclusion"]
  const activeId = useActiveSection(sectionIds)

  return (
    <div>
      <Backdrop />
      <Navbar activeId={activeId} />
      <TimelineRail activeId={activeId} />

      {/* ── HERO ── */}
      <Hero />

      {/* ── Ảnh Tuyên ngôn Độc lập ── */}
      <HistoricalImage
        src="/images/tuyen-ngon-doc-lap.jpg"
        caption="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, ngày 2/9/1945."
      />

      {/* ════════════════════════════════
          PHẦN I: Bối cảnh 1945
          ════════════════════════════════ */}
      <SectionContext />

      <Gallery
        images={[
          { src: "/images/nan-doi-1945.jpg",       caption: "Nạn đói năm 1945 khiến hơn 2 triệu người chết" },
          { src: "/images/binh-dan-hoc-vu.jpg",    caption: "Phong trào Bình dân học vụ" },
          { src: "/images/tong-tuyen-cu-1946.jpg", caption: "Cuộc Tổng tuyển cử đầu tiên năm 1946" },
        ]}
      />

      {/* ════════════════════════════════
          PHẦN II: Hòa hoãn – nhân nhượng
          ════════════════════════════════ */}
      <SectionNegotiation />

      <BlockQuote
        quote="Dĩ bất biến, ứng vạn biến — giữ vững độc lập dân tộc, linh hoạt về sách lược."
        author="Hồ Chí Minh — Nguyên tắc chỉ đạo ngoại giao 1945–1946"
      />

      {/* ════════════════════════════════
          PHẦN III: Dã tâm leo thang của Pháp
          ════════════════════════════════ */}
      <SectionFrenchAggression />

      <Gallery
        images={[
          { src: "/images/nam-bo-khang-chien.jpg", caption: "Nam Bộ kháng chiến từ 23/9/1945" },
          { src: "/images/hai-phong-1946.jpg",     caption: "Pháp tấn công Hải Phòng tháng 11/1946" },
          { src: "/images/ha-noi-1946.jpg",        caption: "Khiêu khích quân sự tại Hà Nội cuối 1946" },
        ]}
      />

      {/* ════════════════════════════════
          PHẦN IV: Kết luận
          ════════════════════════════════ */}
      <SectionConclusion />

      <Footer />
    </div>
  )
}