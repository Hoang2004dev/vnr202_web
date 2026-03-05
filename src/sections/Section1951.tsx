// src/components/Section1951.tsx
// Layout: Hero Battle — dramatic full-width panels, high contrast, climax build-up
// Cảm giác: đang tiến đến Điện Biên Phủ — cao trào kịch tính

import { motion } from "framer-motion"
import Reveal from "../components/Reveal"

const TEAL = "#0c6b5f"
const TEAL_RGB = "12,107,95"

export default function Section1951() {
  return (
    <section
      id="c1951"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${TEAL_RGB},0.15)`,
        background: `radial-gradient(1000px 600px at 50% 100%, rgba(${TEAL_RGB},0.07), transparent 55%)`,
      }}
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute right-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: TEAL, fontSize: "clamp(200px, 30vw, 420px)", lineHeight: 1 }}
      >
        III
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Chapter header ── */}
        <Reveal>
          <div className="mb-12">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase"
              style={{
                background: `rgba(${TEAL_RGB},0.08)`,
                border: `1px solid rgba(${TEAL_RGB},0.25)`,
                color: "#065f52",
              }}
            >
              <span className="h-2 w-2 rounded-full bg-teal-700" />
              Chương 3 • 1951–1954
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Đẩy mạnh kháng chiến
              <br />
              <span style={{ color: TEAL }}>đến thắng lợi</span>
            </h2>

            <div className="mt-4 flex flex-wrap items-start gap-6">
              <p className="text-base text-gray-500 max-w-xl leading-relaxed">
                Chủ động tiến công chiến lược — từ đánh để tồn tại sang đánh để
                quyết định số phận cuộc chiến.
              </p>
              <div
                className="inline-block rounded-2xl px-5 py-4 flex-shrink-0"
                style={{
                  background: `rgba(${TEAL_RGB},0.06)`,
                  border: `1px solid rgba(${TEAL_RGB},0.18)`,
                }}
              >
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: TEAL }}>Luận điểm</p>
                <p className="text-sm font-medium text-gray-700 max-w-[220px]">
                  <span style={{ color: TEAL }}>"</span>
                  Từ đánh để tồn tại sang đánh để quyết định.
                  <span style={{ color: TEAL }}>"</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Phase 1: Đại hội + Chiến dịch ── */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-5 mb-5">

            {/* Đại hội II */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid rgba(${TEAL_RGB},0.18)` }}
            >
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${TEAL}, transparent)` }}
              />
              <div className="p-6">
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                  Đại hội II • 2/1951
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">Bước trưởng thành của Đảng</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Đại hội II là cột mốc: Đảng ra hoạt động công khai trở lại dưới tên{" "}
                  <strong>Đảng Lao động Việt Nam</strong>, xác định rõ con đường cách
                  mạng dân tộc dân chủ nhân dân tiến lên chủ nghĩa xã hội. Đây là nền
                  tảng tư tưởng cho toàn bộ giai đoạn quyết chiến 1951–1954.
                </p>
              </div>
            </div>

            {/* Cải cách ruộng đất */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid rgba(${TEAL_RGB},0.18)` }}
            >
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${TEAL}, transparent)` }}
              />
              <div className="p-6">
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                  Hậu phương
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">Cải cách ruộng đất</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Song song mặt trận quân sự, cải cách ruộng đất trao ruộng cho nông
                  dân nghèo. Vừa củng cố hậu phương kinh tế, vừa tạo thêm hàng triệu
                  nông dân sẵn sàng hy sinh — vì họ chiến đấu để bảo vệ ruộng đất của
                  chính mình.
                </p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ── Phase 2: Các chiến dịch lớn ── */}
        <Reveal delay={0.1}>
          <div
            className="rounded-2xl p-6 mb-5"
            style={{
              background: `rgba(${TEAL_RGB},0.04)`,
              border: `1px solid rgba(${TEAL_RGB},0.15)`,
            }}
          >
            <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: TEAL }}>
              Chiến trường • 1951–1953
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900">Mở các chiến dịch tiêu diệt sinh lực địch</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 mb-5">
              Các chiến dịch liên tiếp nhằm tiêu diệt sinh lực địch, mở rộng vùng
              giải phóng và chuẩn bị cho đòn quyết chiến cuối cùng.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Chiến dịch Trung Du", year: "1951", result: "Tiêu hao sinh lực Pháp ở trung du Bắc Bộ" },
                { name: "Chiến dịch Hòa Bình", year: "1951–52", result: "Phá thế kiểm soát của Pháp ở Tây Bắc" },
                { name: "Chiến dịch Tây Bắc", year: "1952", result: "Giải phóng vùng Tây Bắc rộng lớn" },
              ].map((cd) => (
                <div
                  key={cd.name}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: `rgba(${TEAL_RGB},0.06)`,
                    border: `1px solid rgba(${TEAL_RGB},0.15)`,
                  }}
                >
                  <p className="text-[9px] text-gray-400 mb-1">{cd.year}</p>
                  <p className="text-xs font-bold text-gray-800 leading-tight">{cd.name}</p>
                  <p className="mt-2 text-[10px] text-gray-500 leading-snug">{cd.result}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── CLIMAX: Điện Biên Phủ ── Full-width dramatic panel ── */}
        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden mb-5"
            style={{
              background: `linear-gradient(135deg, rgba(${TEAL_RGB},0.12) 0%, rgba(${TEAL_RGB},0.05) 100%)`,
              border: `1.5px solid rgba(${TEAL_RGB},0.30)`,
            }}
          >
            {/* Dramatic accent bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background: `linear-gradient(90deg, ${TEAL} 0%, rgba(${TEAL_RGB},0.3) 50%, transparent 100%)`,
              }}
            />

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex-1">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest"
                    style={{
                      background: `rgba(${TEAL_RGB},0.12)`,
                      border: `1px solid rgba(${TEAL_RGB},0.30)`,
                      color: TEAL,
                    }}
                  >
                    ⚔ Quyết chiến chiến lược • 13/3 – 7/5/1954
                  </span>

                  <h3 className="mt-4 text-3xl md:text-4xl font-black leading-tight" style={{ color: TEAL }}>
                    Điện Biên Phủ
                  </h3>
                  <p className="text-lg font-medium text-gray-500 mt-1">56 ngày đêm quyết định</p>
                </div>

                {/* Stats */}
                <div className="flex gap-4 flex-wrap">
                  {[
                    { v: "56", l: "ngày đêm" },
                    { v: "13/3", l: "khai hỏa" },
                    { v: "7/5", l: "toàn thắng" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="text-3xl font-black" style={{ color: TEAL }}>{s.v}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                <p className="text-sm leading-relaxed text-gray-600">
                  Tập đoàn cứ điểm Điện Biên Phủ là <em>"pháo đài bất khả xâm phạm"</em>{" "}
                  mà Pháp và Mỹ cùng xây dựng nhằm nghiền nát chủ lực ta. Gần 16.000
                  quân tinh nhuệ với đầy đủ pháo binh, không quân và công sự kiên cố.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Sau 56 ngày đêm chiến đấu kiên cường, toàn bộ tập đoàn cứ điểm bị
                  tiêu diệt và bắt sống. Đây là chiến thắng vang dội nhất — chấm dứt
                  hoàn toàn sự hiện diện quân sự của Pháp tại Đông Dương.
                </p>
              </div>

              {/* Battle progress bar — decorative */}
              <div className="mt-6">
                <div className="flex justify-between text-[9px] text-gray-400 mb-1.5">
                  <span>13/3 — Khai hỏa</span>
                  <span>30/3 — Đợt 2</span>
                  <span>1/5 — Tổng công kích</span>
                  <span>7/5 — Toàn thắng</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: `rgba(${TEAL_RGB},0.12)` }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${TEAL}, rgba(${TEAL_RGB},0.5))` }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* ── Resolution: Hiệp định Giơnevơ ── */}
        <Reveal delay={0.2}>
          <div
            className="rounded-2xl p-6 flex flex-wrap items-center gap-6"
            style={{
              background: `rgba(${TEAL_RGB},0.05)`,
              border: `1px solid rgba(${TEAL_RGB},0.18)`,
            }}
          >
            <div className="flex-1">
              <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: TEAL }}>
                Ngoại giao • 21/7/1954
              </span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">Hiệp định Giơnevơ — văn kiện lịch sử</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Ngày 21/7/1954, Hiệp định Giơnevơ được ký kết — văn kiện quốc tế đầu
                tiên công nhận <em>độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ</em>{" "}
                của Việt Nam. Pháp phải rút quân. Miền Bắc hoàn toàn giải phóng, tạo căn
                cứ địa vững chắc cho giai đoạn đấu tranh tiếp theo vì thống nhất đất nước.
              </p>
            </div>
            <div
              className="rounded-2xl px-6 py-5 text-center flex-shrink-0"
              style={{
                background: `rgba(${TEAL_RGB},0.10)`,
                border: `1px solid rgba(${TEAL_RGB},0.25)`,
              }}
            >
              <p className="text-4xl font-black" style={{ color: TEAL }}>1954</p>
              <p className="text-xs text-gray-500 mt-1">Pháp rút quân</p>
              <p className="text-xs text-gray-500">Miền Bắc giải phóng</p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}