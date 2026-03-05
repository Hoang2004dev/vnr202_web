// src/sections/SectionNegotiation.tsx
// Phần II: Chủ trương hòa hoãn – nhân nhượng của Việt Nam
// Layout: Split-panel — trái: chủ trương + nguyên tắc; phải: timeline nhượng bộ

import { motion } from "framer-motion"
import Reveal from "../components/Reveal"

const AMBER = "#b56a00"
const AMBER_RGB = "181,106,0"

export default function SectionNegotiation() {
  return (
    <section
      id="negotiation"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${AMBER_RGB},0.18)`,
        background: `radial-gradient(900px 700px at 100% 30%, rgba(${AMBER_RGB},0.07), transparent 55%)`,
      }}
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: AMBER, fontSize: "clamp(180px, 28vw, 380px)", lineHeight: 1 }}
      >
        II
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
              style={{ background: `rgba(${AMBER_RGB},0.10)`, border: `1px solid rgba(${AMBER_RGB},0.30)`, color: "#92400e" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: AMBER }} />
              Phần II • Chủ trương
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Hòa hoãn và nhân nhượng
              <br />
              <span style={{ color: AMBER }}>để bảo vệ độc lập</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 max-w-2xl leading-relaxed">
              Trước tình thế cực kỳ yếu, Đảng chủ trương tránh chiến tranh sớm, tranh
              thủ thời gian xây dựng lực lượng — nhân nhượng chiến lược, không phải đầu hàng.
            </p>
          </div>
        </Reveal>

        {/* ── Core principle — full width ── */}
        <Reveal delay={0.06}>
          <div
            className="mb-8 rounded-2xl p-6 md:p-8"
            style={{ background: `rgba(${AMBER_RGB},0.07)`, border: `1px solid rgba(${AMBER_RGB},0.22)` }}
          >
            <div className="flex flex-wrap items-start gap-8">
              <div className="flex-1">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: AMBER }}>Chủ trương "Hòa để tiến"</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dĩ bất biến, ứng vạn biến</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kẻ thù chính là thực dân Pháp — nhưng cần tránh đối đầu ngay lập tức
                  khi chưa đủ lực. Đảng xác định nguyên tắc bất biến là độc lập dân tộc,
                  còn chiến thuật ngoại giao thì linh hoạt tuyệt đối.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                {[
                  { label: "Với Tưởng", policy: "Mềm dẻo hòa hoãn", sub: "Nhường ghế, tránh đụng độ" },
                  { label: "Với Pháp", policy: "Nhân nhượng có nguyên tắc", sub: "Ký hiệp định, kéo dài thời gian" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-3 text-center" style={{ background: `rgba(${AMBER_RGB},0.10)`, border: `1px solid rgba(${AMBER_RGB},0.20)` }}>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wide">{item.label}</p>
                    <p className="mt-1 text-xs font-bold" style={{ color: AMBER }}>{item.policy}</p>
                    <p className="mt-1 text-[10px] text-gray-500 leading-snug">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Three concession blocks ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: `1px solid rgba(${AMBER_RGB},0.20)` }}>
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${AMBER}, transparent)` }} />
              <div className="p-5">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: AMBER }}>Nhượng bộ 1</p>
                <h3 className="text-base font-bold text-gray-900 mb-3">Hiệp định Sơ bộ 6/3/1946</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Việt Nam <strong>chấp nhận</strong> cho 15.000 quân Pháp ra miền Bắc thay thế quân Tưởng Giới Thạch.</p>
                  <p className="text-xs text-gray-400 italic">Đổi lại: Pháp công nhận Việt Nam là "quốc gia tự do" trong Liên hiệp Pháp.</p>
                </div>
                <div className="mt-3 rounded-lg px-3 py-2 text-xs" style={{ background: `rgba(${AMBER_RGB},0.08)`, borderLeft: `2px solid rgba(${AMBER_RGB},0.4)` }}>
                  Mục tiêu: Đẩy 20 vạn quân Tưởng về nước — mối đe dọa trực tiếp hơn
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: `1px solid rgba(${AMBER_RGB},0.20)` }}>
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${AMBER}, transparent)` }} />
              <div className="p-5">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: AMBER }}>Nhượng bộ 2</p>
                <h3 className="text-base font-bold text-gray-900 mb-3">Tạm ước 14/9/1946</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Việt Nam <strong>tiếp tục nhượng thêm</strong> một số quyền kinh tế và văn hóa cho Pháp tại Việt Nam.</p>
                  <p className="text-xs text-gray-400 italic">Đây là nhượng bộ sau khi các hội nghị đàm phán đều thất bại.</p>
                </div>
                <div className="mt-3 rounded-lg px-3 py-2 text-xs" style={{ background: `rgba(${AMBER_RGB},0.08)`, borderLeft: `2px solid rgba(${AMBER_RGB},0.4)` }}>
                  Mục tiêu: Tránh chiến tranh, kéo dài hòa bình để chuẩn bị
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: `1px solid rgba(${AMBER_RGB},0.20)` }}>
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${AMBER}, transparent)` }} />
              <div className="p-5">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: AMBER }}>Đàm phán ngoại giao</p>
                <h3 className="text-base font-bold text-gray-900 mb-3">Hội nghị Đà Lạt & Fontainebleau</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Việt Nam <strong>tham gia đàm phán</strong> cả ở trong nước lẫn tại Pháp để tìm giải pháp hòa bình lâu dài.</p>
                  <p className="text-xs text-gray-400 italic">Cả hai hội nghị đều thất bại vì Pháp không chịu công nhận độc lập thật sự.</p>
                </div>
                <div className="mt-3 rounded-lg px-3 py-2 text-xs" style={{ background: `rgba(${AMBER_RGB},0.08)`, borderLeft: `2px solid rgba(${AMBER_RGB},0.4)` }}>
                  Mục tiêu: Chứng minh thiện chí hòa bình trước cộng đồng quốc tế
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ── Significance — full width ── */}
        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-5">

            <div className="rounded-2xl p-5" style={{ background: `rgba(${AMBER_RGB},0.05)`, border: `1px solid rgba(${AMBER_RGB},0.18)` }}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: AMBER }}>Ý nghĩa chiến lược của nhượng bộ</p>
              <div className="space-y-2">
                {[
                  "Đẩy quân Tưởng rút về nước — loại bỏ một mặt trận đối phó",
                  "Củng cố chính quyền non trẻ, tăng cường bộ máy nhà nước",
                  "Xây dựng lực lượng vũ trang, tích lũy vũ khí đạn dược",
                  "Chuẩn bị căn cứ địa và hậu phương cho kháng chiến lâu dài",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="mt-1 text-amber-600 font-bold flex-shrink-0">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-5" style={{ background: `rgba(${AMBER_RGB},0.08)`, border: `1.5px solid rgba(${AMBER_RGB},0.28)` }}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: AMBER }}>Nhân nhượng ≠ Đầu hàng</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Ranh giới cốt lõi: nhân nhượng mà vẫn giữ được độc lập và chủ quyền
                quốc gia — đó là <strong>sách lược hòa bình có nguyên tắc</strong>.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg p-2.5 text-center" style={{ background: `rgba(${AMBER_RGB},0.10)` }}>
                  <p className="font-bold text-amber-700 mb-1">Nhân nhượng</p>
                  <p className="text-gray-500 text-[10px]">Giữ chủ quyền, linh hoạt chiến thuật</p>
                </div>
                <div className="rounded-lg p-2.5 text-center bg-gray-50">
                  <p className="font-bold text-gray-500 mb-1">Đầu hàng</p>
                  <p className="text-gray-400 text-[10px]">Mất chủ quyền, bị đặt dưới sự cai trị</p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}