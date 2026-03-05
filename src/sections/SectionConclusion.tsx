// src/sections/SectionConclusion.tsx
// Phần IV: Kết luận — Vì sao chiến tranh là không thể tránh khỏi
// Layout: Resolution — 3 nguyên nhân lớn, 2 lựa chọn, lời kêu gọi toàn quốc

import { motion } from "framer-motion"
import Reveal from "../components/Reveal"

const TEAL = "#0c6b5f"
const TEAL_RGB = "12,107,95"

export default function SectionConclusion() {
  return (
    <section
      id="conclusion"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${TEAL_RGB},0.18)`,
        background: `radial-gradient(1000px 700px at 50% 100%, rgba(${TEAL_RGB},0.07), transparent 55%)`,
      }}
    >
      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: TEAL, fontSize: "clamp(180px, 28vw, 380px)", lineHeight: 1 }}
      >
        IV
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
              style={{ background: `rgba(${TEAL_RGB},0.08)`, border: `1px solid rgba(${TEAL_RGB},0.25)`, color: "#065f52" }}
            >
              <span className="h-2 w-2 rounded-full bg-teal-700" />
              Phần IV • Kết luận
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Vì sao chiến tranh
              <br />
              <span style={{ color: TEAL }}>là không thể tránh khỏi?</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 max-w-2xl leading-relaxed">
              Cuộc kháng chiến 1946 không phải lựa chọn của Việt Nam — mà là kết quả
              tất yếu của dã tâm xâm lược không thể thương lượng của thực dân Pháp.
            </p>
          </div>
        </Reveal>

        {/* ── 3 nguyên nhân chính ── */}
        <div className="mb-8 space-y-5">
          {[
            {
              n: "01",
              title: "Dã tâm xâm lược không thể thay đổi",
              body: "Pháp quyết tâm khôi phục chế độ thuộc địa — đây không phải quan điểm của một vài cá nhân mà là chính sách nhà nước Pháp sau Thế chiến II. Không có bất kỳ nhượng bộ nào của Việt Nam có thể thay đổi điều đó.",
              arrow: "→ Pháp không chấp nhận nền độc lập của Việt Nam dù dưới bất kỳ hình thức nào.",
            },
            {
              n: "02",
              title: "Mọi con đường hòa bình đã bị Pháp phá vỡ",
              body: "Việt Nam đã ký Hiệp định Sơ bộ, ký Tạm ước, tham gia đàm phán tại Đà Lạt và Fontainebleau. Pháp vẫn mở rộng chiến tranh ở miền Nam, lập chính phủ bù nhìn, và cuối cùng đưa tối hậu thư.",
              arrow: "→ Không còn giải pháp ngoại giao nào để giữ vững độc lập.",
            },
            {
              n: "03",
              title: "Tiếp tục nhượng bộ đồng nghĩa mất nước",
              body: "Tối hậu thư 18/12/1946 yêu cầu giải giáp lực lượng và giao kiểm soát Hà Nội — tức là tự nguyện tước bỏ chủ quyền. Chấp nhận = đầu hàng không điều kiện.",
              arrow: "→ Kháng chiến trở thành lựa chọn bắt buộc duy nhất để giữ độc lập.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={0.07 * i}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid rgba(${TEAL_RGB},${0.15 + i * 0.05})` }}
              >
                <div className="p-6 flex gap-5">
                  <div
                    className="flex-shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center text-lg font-black"
                    style={{ background: `rgba(${TEAL_RGB},0.10)`, color: TEAL }}
                  >
                    {item.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.body}</p>
                    <p
                      className="text-sm font-semibold italic"
                      style={{ color: TEAL }}
                    >
                      {item.arrow}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── 2 lựa chọn ── */}
        <Reveal delay={0.2}>
          <div className="mb-8 rounded-2xl overflow-hidden" style={{ border: `1px solid rgba(${TEAL_RGB},0.20)` }}>
            <div className="px-6 py-4 text-center" style={{ background: `rgba(${TEAL_RGB},0.07)`, borderBottom: `1px solid rgba(${TEAL_RGB},0.15)` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: TEAL }}>Ngày 19/12/1946 — Chỉ còn hai con đường</p>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="p-6 text-center" style={{ borderRight: `1px solid rgba(${TEAL_RGB},0.15)` }}>
                <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-lg">✕</span>
                </div>
                <p className="text-sm font-bold text-gray-500 mb-2">Chấp nhận tối hậu thư</p>
                <p className="text-xs text-gray-400 leading-relaxed">Giải giáp, giao Hà Nội → Mất toàn bộ chủ quyền → Quay lại chế độ thuộc địa</p>
              </div>
              <div className="p-6 text-center" style={{ background: `rgba(${TEAL_RGB},0.04)` }}>
                <div className="mx-auto mb-3 h-10 w-10 rounded-full flex items-center justify-center" style={{ background: `rgba(${TEAL_RGB},0.15)` }}>
                  <span className="font-bold text-lg" style={{ color: TEAL }}>✓</span>
                </div>
                <p className="text-sm font-bold mb-2" style={{ color: TEAL }}>Đứng lên kháng chiến</p>
                <p className="text-xs text-gray-500 leading-relaxed">Bảo vệ độc lập → Chiến tranh khó khăn → Nhưng giữ được phẩm giá dân tộc</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Lời kêu gọi 19/12/1946 — climax ── */}
        <Reveal delay={0.25}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="mb-8 rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(${TEAL_RGB},0.12), rgba(${TEAL_RGB},0.05))`,
              border: `1.5px solid rgba(${TEAL_RGB},0.30)`,
            }}
          >
            <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${TEAL} 0%, rgba(${TEAL_RGB},0.3) 60%, transparent)` }} />
            <div className="p-8 md:p-10 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: TEAL }}>
                Hồ Chí Minh • Lời kêu gọi Toàn quốc kháng chiến • 19/12/1946
              </p>
              <blockquote className="text-xl md:text-2xl font-semibold italic text-gray-800 leading-relaxed max-w-3xl mx-auto">
                <span style={{ color: TEAL }} className="text-3xl font-black">"</span>
                Chúng ta muốn hòa bình, chúng ta phải nhân nhượng.
                Nhưng chúng ta càng nhân nhượng, thực dân càng lấn tới.
                <span style={{ color: TEAL }} className="text-3xl font-black">"</span>
              </blockquote>
              <p className="mt-6 text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Câu này tóm gọn toàn bộ logic của giai đoạn 1945–1946: hòa bình không
                đến từ nhượng bộ đơn phương — mà cần cả hai bên thực sự muốn hòa bình.
                Khi Pháp không muốn, chiến tranh là tất yếu.
              </p>
            </div>
          </motion.div>
        </Reveal>

        {/* ── Kết luận cuối ── */}
        <Reveal delay={0.3}>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: "Hòa bình",
                desc: "Nhân nhượng có nguyên tắc, vẫn giữ độc lập, chủ quyền và quyền tự quyết dân tộc.",
                color: TEAL,
                bg: `rgba(${TEAL_RGB},0.06)`,
                border: `rgba(${TEAL_RGB},0.22)`,
              },
              {
                label: "Đầu hàng",
                desc: "Chấp nhận mất chủ quyền, bị đặt dưới sự cai trị của nước ngoài — đó là giới hạn không thể vượt qua.",
                color: "#6b7280",
                bg: "rgba(0,0,0,0.03)",
                border: "rgba(0,0,0,0.10)",
              },
              {
                label: "Kết luận",
                desc: "Khi Pháp đòi tước bỏ chủ quyền, kháng chiến không còn là lựa chọn — mà là nghĩa vụ.",
                color: TEAL,
                bg: `rgba(${TEAL_RGB},0.10)`,
                border: `rgba(${TEAL_RGB},0.30)`,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}