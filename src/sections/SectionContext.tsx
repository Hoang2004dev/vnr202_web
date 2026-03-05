// src/sections/SectionContext.tsx
// Phần I: Bối cảnh Việt Nam sau Cách mạng tháng Tám
// Layout: Documentary / Story — hai cột: khó khăn + quân sự, xen block stat nổi bật

import Reveal from "../components/Reveal"

const RED = "#c0132a"
const RED_RGB = "192,19,42"

export default function SectionContext() {
  return (
    <section
      id="context"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${RED_RGB},0.15)`,
        background: `radial-gradient(900px 700px at 0% 25%, rgba(${RED_RGB},0.06), transparent 55%)`,
      }}
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute right-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: RED, fontSize: "clamp(180px, 28vw, 380px)", lineHeight: 1 }}
      >
        I
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
              style={{ background: `rgba(${RED_RGB},0.10)`, border: `1px solid rgba(${RED_RGB},0.28)`, color: "#9b0e1f" }}
            >
              <span className="h-2 w-2 rounded-full bg-red-700" />
              Phần I • Bối cảnh
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Việt Nam sau Cách mạng
              <br />
              <span style={{ color: RED }}>tháng Tám 1945</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 max-w-2xl leading-relaxed">
              Độc lập vừa được tuyên bố — nhưng chính quyền cách mạng đứng trên nền
              tảng cực kỳ mong manh, bị bao vây từ nhiều phía trong và ngoài.
            </p>
          </div>
        </Reveal>

        {/* ── Stat strip ── */}
        <Reveal delay={0.05}>
            <div
            className="mb-10 grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl"
            style={{
                border: `1px solid rgba(${RED_RGB},0.18)`,
                background: `rgba(${RED_RGB},0.04)`
            }}
            >
            {[
              { v: "2/9/1945", l: "Ngày tuyên bố Độc lập" },
              { v: "2 triệu", l: "Người chết vì nạn đói" },
              { v: "95%", l: "Dân số mù chữ" },
              { v: "≈ 0", l: "Ngân khố quốc gia" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center py-5 px-3 text-center" style={{ borderRight: i < 3 ? `1px solid rgba(${RED_RGB},0.12)` : undefined }}>
                <p className="text-2xl font-black" style={{ color: RED }}>{s.v}</p>
                <p className="mt-1 text-[10px] text-gray-500 leading-snug max-w-[80px]">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Two column: kinh tế + quân sự ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Khó khăn kinh tế–xã hội */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: `1px solid rgba(${RED_RGB},0.18)` }}>
              <div className="px-6 py-3 flex items-center gap-2" style={{ background: `rgba(${RED_RGB},0.07)`, borderBottom: `1px solid rgba(${RED_RGB},0.12)` }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#9b0e1f" }}>Khó khăn • Kinh tế–Xã hội</span>
              </div>
              <div className="px-6 py-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Chính quyền cách mạng cực kỳ non trẻ</h3>
                <div className="space-y-3">
                  {[
                    "Nền kinh tế kiệt quệ sau nhiều năm chiến tranh và bóc lột thực dân",
                    "Nạn đói 1945 khiến hơn 2 triệu người chết — thảm họa nhân đạo lớn nhất lịch sử",
                    "95% dân số mù chữ, không thể xây dựng nhà nước dân chủ từ nền tảng đó",
                    "Ngân khố gần như trống rỗng, chỉ còn 1,25 triệu đồng Đông Dương, phần lớn tiền rách",
                    "Bộ máy nhà nước mới thành lập, thiếu kinh nghiệm điều hành và quản lý",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-1.5 h-4 w-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: `rgba(${RED_RGB},0.12)` }}>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                      </span>
                      <p className="text-sm leading-relaxed text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl px-4 py-3 text-sm italic text-gray-500" style={{ background: `rgba(${RED_RGB},0.05)`, borderLeft: `3px solid rgba(${RED_RGB},0.35)` }}>
                  → Chính quyền cách mạng rất yếu về kinh tế, quân sự và ngoại giao
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bị bao vây quân sự */}
          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: `1px solid rgba(${RED_RGB},0.18)` }}>
              <div className="px-6 py-3 flex items-center gap-2" style={{ background: `rgba(${RED_RGB},0.07)`, borderBottom: `1px solid rgba(${RED_RGB},0.12)` }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#9b0e1f" }}>Khó khăn • Quân sự–Chính trị</span>
              </div>
              <div className="px-6 py-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Bị bao vây bởi nhiều thế lực</h3>
                <div className="space-y-3">
                  {[
                    { zone: "Miền Nam", content: "Quân Anh vào giải giáp Nhật nhưng lại tạo điều kiện cho Pháp quay trở lại xâm lược từ tháng 9/1945" },
                    { zone: "Miền Bắc", content: "Hơn 20 vạn quân Tưởng Giới Thạch kéo vào, mang theo Việt Quốc, Việt Cách với âm mưu \"diệt Cộng, cầm Hồ\"" },
                    { zone: "Toàn quốc", content: "Vẫn còn 6 vạn quân Nhật chưa giải giáp, tạo khoảng trống an ninh nguy hiểm trên khắp lãnh thổ" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl p-3" style={{ background: `rgba(${RED_RGB},0.04)`, border: `1px solid rgba(${RED_RGB},0.12)` }}>
                      <p className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: RED }}>{item.zone}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl px-4 py-3 text-sm italic text-gray-500" style={{ background: `rgba(${RED_RGB},0.05)`, borderLeft: `3px solid rgba(${RED_RGB},0.35)` }}>
                  → Việt Nam phải đối phó cùng lúc nhiều kẻ thù
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ── Full-width conclusion block ── */}
        <Reveal delay={0.18}>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: `rgba(${RED_RGB},0.07)`, border: `1px solid rgba(${RED_RGB},0.22)` }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: RED }}>Tổng kết bối cảnh</p>
            <p className="text-2xl md:text-3xl font-bold italic text-gray-800">
              "Ngàn cân treo sợi tóc"
            </p>
            <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Đây là cụm từ lịch sử dùng để mô tả tình thế Việt Nam năm 1945 — nền độc
              lập vừa giành được có thể sụp đổ bất cứ lúc nào nếu một sai lầm chiến
              lược xảy ra.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}