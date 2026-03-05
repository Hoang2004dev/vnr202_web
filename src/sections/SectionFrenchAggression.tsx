// src/sections/SectionFrenchAggression.tsx
// Phần III: Dã tâm xâm lược và leo thang của Pháp
// Layout: Escalating panels — từ nhỏ → to, màu đậm dần, cao trào tối hậu thư

import { motion } from "framer-motion"
import Reveal from "../components/Reveal"

const VIOLET = "#5b21b6"
const VIOLET_RGB = "91,33,182"

export default function SectionFrenchAggression() {
  return (
    <section
      id="aggression"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${VIOLET_RGB},0.15)`,
        background: `radial-gradient(900px 700px at 50% 0%, rgba(${VIOLET_RGB},0.06), transparent 55%)`,
      }}
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute right-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: VIOLET, fontSize: "clamp(180px, 28vw, 380px)", lineHeight: 1 }}
      >
        III
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
              style={{ background: `rgba(${VIOLET_RGB},0.08)`, border: `1px solid rgba(${VIOLET_RGB},0.25)`, color: "#4c1d95" }}
            >
              <span className="h-2 w-2 rounded-full bg-violet-700" />
              Phần III • Dã tâm Pháp
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Dã tâm xâm lược và
              <br />
              <span style={{ color: VIOLET }}>các hành động leo thang</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 max-w-2xl leading-relaxed">
              Dù Việt Nam đã nhân nhượng tối đa, Pháp không hề từ bỏ tham vọng tái
              chiếm Đông Dương — và liên tục leo thang từ Nam ra Bắc.
            </p>
          </div>
        </Reveal>

        {/* ── Mục 1: Kế hoạch từ đầu ── */}
        <Reveal delay={0.06}>
          <div className="mb-6 rounded-2xl p-6" style={{ background: `rgba(${VIOLET_RGB},0.05)`, border: `1px solid rgba(${VIOLET_RGB},0.18)` }}>
            <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: VIOLET }}>Nguyên nhân gốc rễ</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pháp quyết tâm tái chiếm Việt Nam từ đầu</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Ngay từ sau Thế chiến II, Pháp đã có kế hoạch rõ ràng: khôi phục hệ
                thống thuộc địa Đông Dương. Các nhượng bộ ngoại giao của Việt Nam chỉ
                được Pháp lợi dụng để tranh thủ thời gian, chứ không bao giờ được coi là
                cơ sở cho nền hòa bình lâu dài.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hành động ngày <strong>23/9/1945</strong> — chỉ 3 tuần sau Tuyên ngôn
                Độc lập — khi Pháp tấn công Nam Bộ với sự hỗ trợ của quân Anh, đã cho
                thấy rõ bản chất thật của Pháp: không chấp nhận nền độc lập của Việt Nam
                dù dưới bất kỳ hình thức nào.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Mục 2: Phá hoại đàm phán ── */}
        <Reveal delay={0.1}>
          <div className="mb-6 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-5" style={{ border: `1px solid rgba(${VIOLET_RGB},0.20)` }}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: VIOLET }}>Phá hoại đàm phán</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Hai hội nghị đều thất bại</h3>
              <div className="space-y-3">
                <div className="rounded-xl p-3" style={{ background: `rgba(${VIOLET_RGB},0.05)`, border: `1px solid rgba(${VIOLET_RGB},0.12)` }}>
                  <p className="text-xs font-bold text-gray-700">Hội nghị Đà Lạt</p>
                  <p className="text-xs text-gray-500 mt-1">Pháp từ chối mọi điều khoản có thể dẫn đến độc lập thực chất cho Việt Nam</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: `rgba(${VIOLET_RGB},0.05)`, border: `1px solid rgba(${VIOLET_RGB},0.12)` }}>
                  <p className="text-xs font-bold text-gray-700">Hội nghị Fontainebleau (tại Pháp)</p>
                  <p className="text-xs text-gray-500 mt-1">Đoàn Việt Nam sang đàm phán nhưng Pháp không chịu công nhận thống nhất Nam Kỳ</p>
                </div>
              </div>
              <div className="mt-3 text-xs italic text-gray-500" style={{ borderLeft: `2px solid rgba(${VIOLET_RGB},0.3)`, paddingLeft: "10px" }}>
                → Pháp không muốn công nhận độc lập thật sự cho Việt Nam — đàm phán chỉ là chiến thuật câu giờ
              </div>
            </div>

            <div className="rounded-2xl p-5" style={{ border: `1px solid rgba(${VIOLET_RGB},0.20)` }}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: VIOLET }}>Chia cắt lãnh thổ</p>
              <h3 className="text-base font-bold text-gray-900 mb-3">Thành lập "Nam Kỳ tự trị"</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Song song với đàm phán, Pháp đơn phương tuyên bố thành lập{" "}
                <strong>"Nam Kỳ tự trị"</strong> — một thực thể bù nhìn nhằm tách Nam Kỳ
                ra khỏi Việt Nam và hợp pháp hóa sự hiện diện quân sự lâu dài của Pháp
                ở đây.
              </p>
              <p className="mt-3 text-sm text-gray-500 italic">
                Đây là bằng chứng rõ ràng nhất: Pháp không bao giờ công nhận sự thống
                nhất và độc lập của Việt Nam.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Mục 3: Leo thang quân sự cuối 1946 ── */}
        <Reveal delay={0.14}>
          <div className="mb-6 rounded-2xl overflow-hidden" style={{ border: `1.5px solid rgba(${VIOLET_RGB},0.28)` }}>
            <div className="px-6 py-4" style={{ background: `rgba(${VIOLET_RGB},0.08)`, borderBottom: `1px solid rgba(${VIOLET_RGB},0.15)` }}>
              <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: VIOLET }}>Leo thang quân sự • Cuối năm 1946</p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">Pháp liên tiếp gây chiến từ Bắc vào Nam</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { target: "Hải Phòng", desc: "Pháp nổ súng, bắn phá khu phố Tàu, hàng nghìn thường dân thiệt mạng" },
                  { target: "Lạng Sơn", desc: "Chiếm đóng thành phố biên giới, kiểm soát tuyến đường lên phía Bắc" },
                  { target: "Đà Nẵng", desc: "Nắm quyền kiểm soát thành phố cảng chiến lược miền Trung" },
                  { target: "Hà Nội", desc: "Liên tục khiêu khích quân sự, đặt mìn, bắn vào lực lượng tự vệ" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center"
                    style={{ background: `rgba(${VIOLET_RGB},${0.04 + i * 0.025})`, border: `1px solid rgba(${VIOLET_RGB},${0.12 + i * 0.04})` }}
                  >
                    <p className="text-sm font-bold" style={{ color: VIOLET }}>{item.target}</p>
                    <p className="mt-2 text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── CLIMAX: Tối hậu thư 18/12/1946 ── */}
        <Reveal delay={0.18}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(${VIOLET_RGB},0.12), rgba(${VIOLET_RGB},0.06))`,
              border: `1.5px solid rgba(${VIOLET_RGB},0.35)`,
            }}
          >
            <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${VIOLET} 0%, rgba(${VIOLET_RGB},0.3) 60%, transparent)` }} />
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-1">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest"
                    style={{ background: `rgba(${VIOLET_RGB},0.15)`, border: `1px solid rgba(${VIOLET_RGB},0.35)`, color: VIOLET }}
                  >
                    ⚠ Cao trào • 18/12/1946
                  </span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-black text-gray-900">Tối hậu thư của Pháp</h3>
                  <p className="mt-1 text-base text-gray-500">Ranh giới giữa hòa bình và đầu hàng</p>
                </div>
                <div
                  className="rounded-2xl px-5 py-4 text-center flex-shrink-0"
                  style={{ background: `rgba(${VIOLET_RGB},0.12)`, border: `1px solid rgba(${VIOLET_RGB},0.25)` }}
                >
                  <p className="text-3xl font-black" style={{ color: VIOLET }}>18/12</p>
                  <p className="text-xs text-gray-500 mt-1">1946</p>
                  <p className="text-xs text-gray-400">Tối hậu thư</p>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Pháp yêu cầu:</p>
                  <div className="space-y-2">
                    {[
                      "Việt Nam phải giải giáp toàn bộ lực lượng tự vệ",
                      "Pháp nắm quyền kiểm soát Hà Nội",
                      "Hạn chót: sáng 19/12/1946",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2.5">
                        <span className="mt-1 h-3.5 w-3.5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: `rgba(${VIOLET_RGB},0.2)` }}>
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: VIOLET }} />
                        </span>
                        <p className="text-sm text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl p-4" style={{ background: `rgba(${VIOLET_RGB},0.07)`, border: `1px solid rgba(${VIOLET_RGB},0.20)` }}>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Hệ quả nếu chấp nhận:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Chấp nhận tối hậu thư đồng nghĩa với trao toàn bộ Hà Nội và lực
                    lượng vũ trang cho Pháp — tức là <strong>tự nguyện mất độc lập</strong>.
                  </p>
                  <div
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-center"
                    style={{ background: `rgba(${VIOLET_RGB},0.15)`, color: VIOLET }}
                  >
                    Đây chính là ranh giới giữa hòa bình và đầu hàng.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

      </div>
    </section>
  )
}