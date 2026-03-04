// App.tsx
import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TimelineRail from "./components/TimelineRail"
import Chapter from "./components/Chapter"
import Reveal from "./components/Reveal"
import Footer from "./components/Footer"
import { useActiveSection } from "./hooks/useActiveSection"

export default function App() {
  const sectionIds = ["c1945", "c1946", "c1951", "logic"]
  const activeId = useActiveSection(sectionIds)

  return (
    <div>
      <Backdrop />
      <Navbar activeId={activeId} />
      <TimelineRail activeId={activeId} />

      <Hero />

      <Chapter
        id="c1945"
        kicker="CHƯƠNG 1 • 1945–1946"
        title="Giữ chính quyền trong thế hiểm nghèo"
        subtitle="Nhân nhượng có nguyên tắc để củng cố lực lượng; kiên định mục tiêu độc lập."
        thesis="Nhân nhượng là chiến thuật — độc lập dân tộc là nguyên tắc."
        cards={[
          {
            tag: "Bối cảnh",
            title: "“Ngàn cân treo sợi tóc”",
            body: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Nạn đói 1945, hơn 2 triệu người chết</li>
                <li>95% mù chữ, ngân khố trống rỗng</li>
                <li>Tưởng – Anh/Pháp – Nhật chưa giải giáp</li>
              </ul>
            ),
          },
          {
            tag: "Kiến thiết",
            title: "Ba nhiệm vụ cấp bách",
            body: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Diệt giặc đói</li>
                <li>Diệt giặc dốt</li>
                <li>Diệt giặc ngoại xâm</li>
              </ul>
            ),
          },
          {
            tag: "Chính danh",
            title: "Tổng tuyển cử 6/1/1946",
            body: (
              <p>
                Củng cố tính hợp pháp: Quốc hội khóa I và Hiến pháp 1946 — nền tảng dân chủ của Nhà nước mới.
              </p>
            ),
          },
          {
            tag: "Đối ngoại",
            title: "Dĩ bất biến, ứng vạn biến",
            body: (
              <p>
                Kéo dài thời gian, đẩy quân Tưởng về nước, chuẩn bị kháng chiến — nhưng không đánh đổi chủ quyền.
              </p>
            ),
          },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Chapter
        id="c1946"
        kicker="CHƯƠNG 2 • 1946–1950"
        title="Chiến tranh nhân dân: từ yếu thành mạnh"
        subtitle="Lấy thời gian làm lợi thế; lấy nhân dân làm nền tảng; tránh “đánh nhanh thắng nhanh”."
        thesis="Toàn dân – toàn diện – lâu dài – dựa vào sức mình."
        cards={[
          {
            tag: "Khởi điểm",
            title: "Toàn quốc kháng chiến 19/12/1946",
            body: (
              <p>
                Khi Pháp quyết tâm tái chiếm bằng vũ lực, chiến tranh trở thành lựa chọn bắt buộc để giữ độc lập.
              </p>
            ),
          },
          {
            tag: "Biểu tượng",
            title: "60 ngày đêm Hà Nội",
            body: (
              <p>
                Mục tiêu: giam chân địch, bảo vệ Trung ương rút lên căn cứ — “Quyết tử cho Tổ quốc quyết sinh”.
              </p>
            ),
          },
          {
            tag: "Đường lối",
            title: "4 trụ cột chiến lược",
            body: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Toàn dân</li>
                <li>Toàn diện</li>
                <li>Lâu dài</li>
                <li>Dựa vào sức mình</li>
              </ul>
            ),
          },
          {
            tag: "Bước ngoặt",
            title: "Việt Bắc 1947",
            body: (
              <p>
                Bẻ gãy “đánh nhanh thắng nhanh”, buộc Pháp sa lầy — đây là bước ngoặt chiến lược của toàn cuộc chiến.
              </p>
            ),
          },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Chapter
        id="c1951"
        kicker="CHƯƠNG 3 • 1951–1954"
        title="Chủ động tiến công – kết thúc chiến tranh"
        subtitle="Trưởng thành tư duy – tổ chức; kết hợp quân sự–chính trị–ngoại giao để tạo thắng lợi quyết định."
        thesis="Từ “đánh để tồn tại” sang “đánh để quyết định”."
        cards={[
          {
            tag: "Trưởng thành",
            title: "Đại hội II (1951)",
            body: (
              <p>
                Định hình tầm nhìn chiến lược và tổ chức lãnh đạo, tạo nền cho các chiến dịch quy mô lớn.
              </p>
            ),
          },
          {
            tag: "Quyết định",
            title: "Chọn Điện Biên Phủ",
            body: (
              <p>
                Đối phương tập trung lực lượng tạo “điểm cứng” — đồng thời tạo cơ hội tiêu diệt lớn trong trận quyết chiến.
              </p>
            ),
          },
          {
            tag: "Đỉnh cao",
            title: "56 ngày đêm (13/3 → 7/5/1954)",
            body: (
              <p>
                “Đánh chắc, tiến chắc” — chiến thắng làm sụp đổ kế hoạch Nava và chấn động dư luận thế giới.
              </p>
            ),
          },
          {
            tag: "Cục diện",
            title: "Giơnevơ 1954",
            body: (
              <p>
                Thắng lợi quân sự tạo ưu thế ngoại giao: văn kiện quốc tế quan trọng công nhận quyền dân tộc cơ bản.
              </p>
            ),
          },
        ]}
      />

      <section id="logic" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="relative rounded-3xl p-[1px] gradient-stroke">
              <div className="glass rounded-3xl bg-[color:var(--panel)] p-8 md:p-10">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Logic chiến lược toàn chương
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                  1945–46: mềm dẻo có nguyên tắc để giữ chính quyền •
                  1946–50: chiến tranh nhân dân để chuyển hóa thế trận •
                  1951–54: chủ động tiến công để kết thúc chiến tranh.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    { y: "1945–1946", t: "GIỮ", c: "Hòa hoãn chiến lược, củng cố chính quyền." },
                    { y: "1946–1950", t: "CẦM CỰ", c: "Toàn dân – toàn diện – lâu dài." },
                    { y: "1951–1954", t: "KẾT THÚC", c: "Quyết chiến + ngoại giao." },
                  ].map((x) => (
                    <div key={x.t} className="rounded-2xl border border-black/10 bg-black/[0.03] p-6">
                      <p className="caps text-[10px] text-[color:var(--muted2)]">{x.y}</p>
                      <p className="mt-1 text-lg font-semibold text-[var(--amber)]">{x.t}</p>
                      <p className="mt-2 text-sm text-[color:var(--muted)]">{x.c}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}