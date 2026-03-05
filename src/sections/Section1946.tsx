// src/components/Section1946.tsx
// Layout: Vertical Timeline — diễn tiến chiến tranh theo thời gian
// Cảm giác: theo dõi diễn biến từng giai đoạn chiến tranh

import { motion } from "framer-motion"
import Reveal from "../components/Reveal"

const VIOLET = "#5b21b6"
const VIOLET_RGB = "91,33,182"

type TimelineEvent = {
  date: string
  tag: string
  title: string
  body: React.ReactNode
  milestone?: boolean
  stat?: { value: string; label: string }
}

const events: TimelineEvent[] = [
  {
    date: "19/12/1946",
    tag: "Khởi đầu",
    title: "Lời kêu gọi Toàn quốc kháng chiến",
    body: (
      <p>
        Tối 19/12/1946, Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến. Đây
        không phải quyết định bốc đồng — mà là hệ quả tất yếu sau nhiều tháng
        nhân nhượng không thành. Chiến tranh trở thành lựa chọn duy nhất để bảo
        vệ nền độc lập vừa giành được.
      </p>
    ),
    milestone: true,
  },
  {
    date: "12/1946 – 2/1947",
    tag: "Biểu tượng • Hà Nội",
    title: "60 ngày đêm quyết tử",
    body: (
      <p>
        Tiểu đoàn Vệ quốc đoàn và tự vệ Hà Nội chiến đấu trong từng ngõ phố với
        khẩu hiệu <em className="font-semibold text-violet-700">"Quyết tử cho Tổ quốc quyết sinh"</em>.
        Mục tiêu không phải giữ Hà Nội mãi mãi, mà là giam chân địch, tạo thời
        gian cho Trung ương rút lên căn cứ Việt Bắc an toàn.
      </p>
    ),
    stat: { value: "60", label: "ngày đêm chiến đấu" },
  },
  {
    date: "1947",
    tag: "Đường lối",
    title: "Bốn nguyên tắc chiến tranh nhân dân",
    body: (
      <div className="grid grid-cols-2 gap-3 mt-2">
        {[
          { label: "Toàn dân", desc: "Mọi tầng lớp đều tham gia, không ai đứng ngoài cuộc kháng chiến" },
          { label: "Toàn diện", desc: "Đấu tranh quân sự, chính trị, kinh tế, văn hóa cùng lúc" },
          { label: "Lâu dài", desc: "Không kỳ vọng đánh nhanh thắng nhanh, chấp nhận trường kỳ" },
          { label: "Tự lực", desc: "Dựa vào sức mình là chính, ngoại viện chỉ là hỗ trợ" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-3"
            style={{
              background: `rgba(${VIOLET_RGB},0.06)`,
              border: `1px solid rgba(${VIOLET_RGB},0.15)`,
            }}
          >
            <p className="text-xs font-bold" style={{ color: VIOLET }}>{item.label}</p>
            <p className="text-xs text-gray-500 mt-1 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    date: "Thu Đông 1947",
    tag: "Bước ngoặt",
    title: "Chiến thắng Việt Bắc — đánh bại đánh nhanh thắng nhanh",
    body: (
      <p>
        Pháp huy động hàng chục nghìn quân tấn công Việt Bắc, quyết tâm tiêu diệt
        cơ quan đầu não kháng chiến trong vài tuần. Ta đánh trả quyết liệt, buộc
        đối phương sa lầy và phải rút lui thất bại. Đây là dấu mốc đầu tiên chứng
        minh chiến tranh nhân dân có thể đánh bại đội quân chuyên nghiệp được
        trang bị hiện đại.
      </p>
    ),
    milestone: true,
    stat: { value: "1947", label: "Pháp thất bại chiến lược" },
  },
  {
    date: "1948–1949",
    tag: "Phát triển",
    title: "Củng cố căn cứ địa và lực lượng",
    body: (
      <p>
        Sau chiến thắng Việt Bắc, ta đẩy mạnh xây dựng lực lượng vũ trang chính
        quy, mở rộng vùng giải phóng, phát triển kinh tế kháng chiến. Các khu căn
        cứ Việt Bắc, Khu IV, Liên khu V trở thành hậu phương vững chắc nuôi dưỡng
        cuộc chiến trường kỳ.
      </p>
    ),
  },
  {
    date: "Thu Đông 1950",
    tag: "Phản công chiến lược",
    title: "Chiến dịch Biên giới — chủ động tiến công",
    body: (
      <p>
        Chiến dịch Biên giới phá vỡ thế bao vây của Pháp, mở thông biên giới
        Việt–Trung, tạo hành lang tiếp nhận viện trợ và vũ khí. Đây là lần đầu
        tiên ta chủ động tiến công tiêu diệt lực lượng lớn của địch — đưa cuộc
        kháng chiến bước sang giai đoạn phản công chiến lược toàn diện.
      </p>
    ),
    milestone: true,
    stat: { value: "1950", label: "Chuyển sang phản công" },
  },
]

export default function Section1946() {
  return (
    <section
      id="c1946"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${VIOLET_RGB},0.15)`,
        background: `radial-gradient(900px 700px at 100% 20%, rgba(${VIOLET_RGB},0.06), transparent 55%)`,
      }}
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: VIOLET, fontSize: "clamp(200px, 30vw, 420px)", lineHeight: 1 }}
      >
        II
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Chapter header ── */}
        <Reveal>
          <div className="mb-16">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase"
              style={{
                background: `rgba(${VIOLET_RGB},0.08)`,
                border: `1px solid rgba(${VIOLET_RGB},0.25)`,
                color: "#4c1d95",
              }}
            >
              <span className="h-2 w-2 rounded-full bg-violet-700" />
              Chương 2 • 1946–1950
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Đường lối kháng chiến
              <br />
              <span style={{ color: VIOLET }}>toàn quốc</span>
            </h2>

            <p className="mt-4 text-base text-gray-500 max-w-xl leading-relaxed">
              Từ thế yếu chuyển hóa thành thế mạnh — buộc kẻ thù sa lầy trong
              chiến tranh nhân dân trường kỳ.
            </p>

            <div
              className="mt-6 inline-block rounded-2xl px-5 py-4"
              style={{
                background: `rgba(${VIOLET_RGB},0.06)`,
                border: `1px solid rgba(${VIOLET_RGB},0.18)`,
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: VIOLET }}>Luận điểm</p>
              <p className="text-sm font-medium text-gray-700">
                <span style={{ color: VIOLET }}>"</span>
                Toàn dân – toàn diện – lâu dài – dựa vào sức mình là con đường tất yếu.
                <span style={{ color: VIOLET }}>"</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[88px] top-0 bottom-0 w-px md:left-[108px]"
            style={{ background: `linear-gradient(to bottom, transparent, rgba(${VIOLET_RGB},0.3) 5%, rgba(${VIOLET_RGB},0.3) 95%, transparent)` }}
          />

          <div className="space-y-0">
            {events.map((ev, i) => (
              <Reveal key={i} delay={0.07 * i}>
                <div className="relative flex gap-6 pb-10">

                  {/* Date column */}
                  <div className="w-[88px] md:w-[108px] flex-shrink-0 text-right pt-1">
                    <span
                      className="text-[10px] font-bold leading-tight"
                      style={{ color: VIOLET }}
                    >
                      {ev.date}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 flex flex-col items-center" style={{ marginLeft: "-1px" }}>
                    <div
                      className="mt-1 h-4 w-4 rounded-full border-2 z-10"
                      style={{
                        borderColor: VIOLET,
                        background: ev.milestone ? VIOLET : "white",
                        boxShadow: ev.milestone ? `0 0 0 4px rgba(${VIOLET_RGB},0.15)` : "none",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-start gap-3 flex-wrap">
                      <div className="flex-1">
                        <span
                          className="text-[9px] font-bold uppercase tracking-widest"
                          style={{ color: `rgba(${VIOLET_RGB},0.7)` }}
                        >
                          {ev.tag}
                        </span>
                        <h3
                          className="mt-1 text-base font-bold leading-snug"
                          style={{ color: ev.milestone ? VIOLET : "#1a1a1a" }}
                        >
                          {ev.title}
                        </h3>
                      </div>

                      {ev.stat && (
                        <div
                          className="rounded-xl px-4 py-2 text-center flex-shrink-0"
                          style={{
                            background: `rgba(${VIOLET_RGB},0.08)`,
                            border: `1px solid rgba(${VIOLET_RGB},0.18)`,
                          }}
                        >
                          <p className="text-xl font-black" style={{ color: VIOLET }}>{ev.stat.value}</p>
                          <p className="text-[9px] text-gray-500 mt-0.5 max-w-[80px] leading-tight">{ev.stat.label}</p>
                        </div>
                      )}
                    </div>

                    <div
                      className="mt-3 rounded-xl p-4 text-sm leading-relaxed text-gray-600"
                      style={{
                        background: ev.milestone
                          ? `rgba(${VIOLET_RGB},0.05)`
                          : "rgba(0,0,0,0.02)",
                        border: `1px solid rgba(${VIOLET_RGB},${ev.milestone ? "0.15" : "0.07"})`,
                      }}
                    >
                      {ev.body}
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}