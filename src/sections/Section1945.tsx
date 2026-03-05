// src/components/Section1945.tsx
// Layout: Documentary / Story — text và info-blocks xen kẽ theo chiều dọc
// Cảm giác: đọc một bài phóng sự lịch sử sâu sắc

import Reveal from "../components/Reveal"

const RED = "#c0132a"
const RED_RGB = "192,19,42"

type StoryBlock = {
  tag: string
  title: string
  body: React.ReactNode
  accent?: string
  wide?: boolean
}

const blocks: StoryBlock[] = [
  {
    tag: "BỐI CẢNH • 2/9/1945",
    title: "Nền độc lập mong manh",
    body: (
      <>
        <p>
          Ngày 2/9/1945, Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình. Nước
          Việt Nam Dân chủ Cộng hòa ra đời — nhưng nền độc lập ấy đứng trước
          vô vàn thử thách mà lịch sử gọi là <em className="text-red-700 not-italic font-semibold">"ngàn cân treo sợi tóc."</em>
        </p>
        <p className="mt-3">
          Chính quyền mới thành lập còn non trẻ, bộ máy chưa đủ vững, trong khi
          kẻ thù đang bao vây từ nhiều phía. Đây là thời điểm một sai lầm có thể
          xóa sổ toàn bộ thành quả cách mạng.
        </p>
      </>
    ),
    wide: true,
  },
  {
    tag: "KHÓ KHĂN • Kinh tế–Xã hội",
    title: "Ba nạn: đói, dốt, nghèo",
    body: (
      <div className="space-y-4">
        <div className="flex gap-3">
          <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-700/15 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-red-700" />
          </span>
          <p><strong>Nạn đói 1945</strong> khiến hơn 2 triệu người chết — hậu quả trực tiếp của chính sách bóc lột thực dân Pháp–Nhật trong chiến tranh.</p>
        </div>
        <div className="flex gap-3">
          <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-700/15 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-red-700" />
          </span>
          <p><strong>95% dân số mù chữ</strong> — không thể xây dựng nhà nước dân chủ khi người dân không đọc được pháp luật.</p>
        </div>
        <div className="flex gap-3">
          <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-700/15 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-red-700" />
          </span>
          <p><strong>Ngân khố gần như trống rỗng</strong> — chỉ còn 1,25 triệu đồng Đông Dương, phần lớn là tiền rách.</p>
        </div>
      </div>
    ),
  },
  {
    tag: "KHÓ KHĂN • Quân sự–Chính trị",
    title: "Thù trong giặc ngoài",
    body: (
      <div className="space-y-4">
        <div className="rounded-xl border border-red-200/60 bg-red-50/50 p-4">
          <p className="text-xs font-semibold text-red-700 uppercase tracking-widest mb-1">Miền Bắc</p>
          <p className="text-sm">Hơn <strong>20 vạn quân Tưởng</strong> kéo vào mang theo âm mưu <em>"diệt Cộng, cầm Hồ"</em>, âm mưu dựng chính phủ bù nhìn thân Trung Hoa Dân Quốc.</p>
        </div>
        <div className="rounded-xl border border-red-200/60 bg-red-50/50 p-4">
          <p className="text-xs font-semibold text-red-700 uppercase tracking-widest mb-1">Miền Nam</p>
          <p className="text-sm">Quân Anh tạo điều kiện để Pháp quay lại xâm lược ngay từ tháng 9/1945, nổ súng tại Sài Gòn chỉ 3 tuần sau ngày Tuyên ngôn.</p>
        </div>
        <div className="rounded-xl border border-red-200/60 bg-red-50/50 p-4">
          <p className="text-xs font-semibold text-red-700 uppercase tracking-widest mb-1">Toàn quốc</p>
          <p className="text-sm"><strong>6 vạn quân Nhật</strong> chưa giải giáp vẫn còn trên lãnh thổ, tạo khoảng trống an ninh nguy hiểm khắp nơi.</p>
        </div>
      </div>
    ),
  },
  {
    tag: "ĐỐI SÁCH • 3/9/1945",
    title: "Ba nhiệm vụ cấp bách",
    body: (
      <>
        <p className="mb-4">Ngay ngày 3/9/1945 — một ngày sau Tuyên ngôn — Chính phủ họp và xác định ba nhiệm vụ không thể chờ đợi:</p>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { n: "1", label: "Diệt giặc đói", sub: "Tăng gia sản xuất, hũ gạo cứu đói" },
            { n: "2", label: "Diệt giặc dốt", sub: "Bình dân học vụ toàn quốc" },
            { n: "3", label: "Diệt ngoại xâm", sub: "Đối ngoại linh hoạt, chuẩn bị vũ trang" },
          ].map((item) => (
            <div key={item.n} className="rounded-xl border border-red-200/50 bg-red-50/40 p-3">
              <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-red-700 flex items-center justify-center text-white font-bold text-sm">{item.n}</div>
              <p className="text-xs font-semibold text-red-800 leading-tight">{item.label}</p>
              <p className="mt-1 text-[10px] text-gray-500 leading-snug">{item.sub}</p>
            </div>
          ))}
        </div>
      </>
    ),
    wide: true,
  },
  {
    tag: "KIẾN THIẾT • Kinh tế",
    title: "Diệt giặc đói",
    body: (
      <p>
        Chính phủ phát động phong trào tăng gia sản xuất toàn quốc, lập{" "}
        <em className="font-medium">"hũ gạo cứu đói"</em> và <em className="font-medium">Tuần lễ vàng</em>{" "}
        quyên góp quỹ quốc gia. Song song, giảm tô 25%, chia lại ruộng đất công
        cho nông dân nghèo. Chỉ sau vài tháng, nạn đói cơ bản được đẩy lùi — minh
        chứng hùng hồn cho sức mạnh của đoàn kết toàn dân.
      </p>
    ),
  },
  {
    tag: "KIẾN THIẾT • Giáo dục",
    title: "Diệt giặc dốt — Bình dân học vụ",
    body: (
      <>
        <p>
          Phong trào <strong>Bình dân học vụ</strong> triển khai khắp cả nước —
          các lớp học mở ngay tại đình làng, nhà kho, dưới gốc cây. Ai biết chữ
          dạy người chưa biết, không phân biệt tuổi tác hay thành phần.
        </p>
        <div className="mt-4 flex items-center gap-4 rounded-xl bg-red-700/8 border border-red-200/50 p-4">
          <div className="text-center">
            <p className="text-3xl font-black text-red-700">2,5M</p>
            <p className="text-xs text-gray-500 mt-1">người biết chữ</p>
          </div>
          <div className="h-10 w-px bg-red-200" />
          <p className="text-sm text-gray-600 flex-1">
            Đến cuối năm 1946, hơn 2,5 triệu người đã biết đọc biết viết. Đây
            không chỉ là vấn đề giáo dục — mà là xây dựng nền dân chủ mới.
          </p>
        </div>
      </>
    ),
  },
  {
    tag: "CHÍNH TRỊ • 6/1/1946",
    title: "Tổng tuyển cử — nền tảng pháp lý",
    body: (
      <>
        <p>
          Cuộc Tổng tuyển cử ngày <strong>6/1/1946</strong> là bước đi mang tính
          lịch sử. Dù chiến tranh đang diễn ra ở Nam Bộ, hơn{" "}
          <strong>89% cử tri</strong> vẫn đi bỏ phiếu. Quốc hội khóa I được thành
          lập và thông qua <strong>Hiến pháp 1946</strong> — bản Hiến pháp dân chủ
          đầu tiên của nước ta.
        </p>
        <p className="mt-3">
          Điều này khẳng định tính hợp pháp và chính danh của Nhà nước Việt Nam
          Dân chủ Cộng hòa trước nhân dân và cộng đồng quốc tế — không ai có thể
          phủ nhận đây là chính quyền do dân bầu ra.
        </p>
      </>
    ),
  },
  {
    tag: "ĐỐI NGOẠI • Quân Tưởng",
    title: "Hòa hoãn để thoát vây",
    body: (
      <p>
        Trước 20 vạn quân Tưởng, ta chủ trương <em className="font-medium">hòa hoãn, mềm dẻo</em>:
        nhường một số ghế bộ trưởng không quan trọng, chấp nhận lưu hành tiền Quan
        Kim, nhưng kiên quyết giữ vững bộ máy chính quyền và lực lượng vũ trang.
        Sách lược này giúp tránh xung đột hai mặt trận đồng thời — điều sẽ là thảm
        họa với chính quyền non trẻ chỉ mới vài tuần tuổi.
      </p>
    ),
  },
  {
    tag: "ĐỐI NGOẠI • Thực dân Pháp",
    title: "Nhân nhượng chiến lược",
    body: (
      <>
        <p>
          <strong>Hiệp định Sơ bộ 6/3/1946</strong> và <strong>Tạm ước 14/9/1946</strong>{" "}
          — tuy bị nhiều người cho là nhượng bộ — thực chất là chiến lược kéo dài
          thời gian: buộc quân Tưởng phải rút về nước, tranh thủ 6–12 tháng để
          củng cố lực lượng và chuẩn bị hậu phương.
        </p>
        <p className="mt-3 text-sm italic text-gray-500">
          Ranh giới giữa hòa bình có nguyên tắc và đầu hàng: nhân nhượng mà vẫn
          giữ chủ quyền — đó là sách lược. Đánh đổi độc lập — mới là đầu hàng.
        </p>
      </>
    ),
  },
  {
    tag: "TƯ TƯỞNG",
    title: "Dĩ bất biến, ứng vạn biến",
    body: (
      <p>
        <em>Cái bất biến</em> là độc lập dân tộc và chủ quyền quốc gia — không
        bao giờ được đánh đổi. <em>Vạn biến</em> là các chiến thuật ngoại giao,
        nhân nhượng có tính toán, linh hoạt ứng xử với từng đối thủ. Trong giai
        đoạn 1945–1946, Đảng ta đã nhân nhượng nhưng không bao giờ từ bỏ độc lập.
      </p>
    ),
    wide: true,
  },
  {
    tag: "KẾT CỤC • 19/12/1946",
    title: "Chiến tranh là không thể tránh",
    body: (
      <p>
        Dù ta đã nhiều lần nhân nhượng, thực dân Pháp vẫn nuôi dã tâm tái chiếm
        Đông Dương. Sau hàng loạt khiêu khích tại Hải Phòng và Hà Nội, tối{" "}
        <strong>19/12/1946</strong>, Pháp nổ súng. Đảng và Hồ Chí Minh phát động{" "}
        <em className="font-semibold text-red-700">Toàn quốc kháng chiến</em>. Chiến tranh
        không phải do ta lựa chọn — mà do Pháp quyết tâm xâm lược bằng được.
      </p>
    ),
    wide: true,
  },
]

export default function Section1945() {
  return (
    <section
      id="c1945"
      className="relative scroll-mt-0"
      style={{
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderTop: `1px solid rgba(${RED_RGB},0.15)`,
        background: `radial-gradient(900px 700px at 0% 20%, rgba(${RED_RGB},0.06), transparent 55%)`,
      }}
    >
      {/* Big chapter watermark */}
      <div
        className="pointer-events-none absolute right-0 top-0 select-none font-black leading-none opacity-[0.03] overflow-hidden"
        style={{ color: RED, fontSize: "clamp(200px, 30vw, 420px)", lineHeight: 1 }}
      >
        I
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">

        {/* ── Chapter header ── */}
        <Reveal>
          <div className="mb-16">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase"
              style={{
                background: `rgba(${RED_RGB},0.10)`,
                border: `1px solid rgba(${RED_RGB},0.28)`,
                color: "#9b0e1f",
              }}
            >
              <span className="h-2 w-2 rounded-full bg-red-700" />
              Chương 1 • 1945–1946
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Xây dựng và bảo vệ
              <br />
              <span style={{ color: RED }}>chính quyền cách mạng</span>
            </h2>

            <p className="mt-4 text-base text-gray-500 max-w-xl leading-relaxed">
              Giữ chính quyền trong tình thế "ngàn cân treo sợi tóc" — vừa
              kiến thiết đất nước, vừa đối phó thù trong giặc ngoài.
            </p>

            {/* Thesis */}
            <div
              className="mt-6 inline-block rounded-2xl px-5 py-4"
              style={{
                background: `rgba(${RED_RGB},0.07)`,
                border: `1px solid rgba(${RED_RGB},0.20)`,
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>Luận điểm</p>
              <p className="text-sm font-medium text-gray-700">
                <span style={{ color: RED }}>"</span>
                Nhân nhượng là chiến thuật — độc lập dân tộc là nguyên tắc bất biến.
                <span style={{ color: RED }}>"</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Story blocks: alternating layout ── */}
        <div className="space-y-6">
          {blocks.map((block, i) => (
            <Reveal key={i} delay={0.04 * (i % 5)}>
              <div
                className={`rounded-2xl overflow-hidden ${block.wide ? "col-span-2" : ""}`}
                style={{
                  border: `1px solid rgba(${RED_RGB},${i % 3 === 0 ? "0.18" : "0.10"})`,
                  background: i % 4 === 0
                    ? `rgba(${RED_RGB},0.04)`
                    : "rgba(255,255,255,0.55)",
                }}
              >
                {/* Top tag bar */}
                <div
                  className="px-6 py-2 flex items-center gap-2"
                  style={{ background: `rgba(${RED_RGB},0.06)`, borderBottom: `1px solid rgba(${RED_RGB},0.10)` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#9b0e1f" }}>
                    {block.tag}
                  </span>
                </div>

                <div className="px-6 py-5">
                  <h3 className="text-lg font-bold mb-3" style={{ color: i % 3 === 0 ? RED : "#1a1a1a" }}>
                    {block.title}
                  </h3>
                  <div className="text-sm leading-relaxed text-gray-600">{block.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}