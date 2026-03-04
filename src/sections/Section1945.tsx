import Card from "../components/Card"

function Section1945() {

  return (

    <section id="s1945" className="py-32">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-12">

          1945–1946: Xây dựng chính quyền

        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Card title="Ngàn cân treo sợi tóc">

            Nạn đói 1945 khiến hơn 2 triệu người chết.
            95% dân số mù chữ.
            Ngân khố trống rỗng.

          </Card>

          <Card title="Xây dựng chế độ mới">

            Phong trào Bình dân học vụ
            giúp hơn 2.5 triệu người biết chữ.

          </Card>

          <Card title="Nhân nhượng chiến lược">

            Hiệp định Sơ bộ 6/3/1946
            giúp kéo dài thời gian chuẩn bị kháng chiến.

          </Card>

        </div>

      </div>

    </section>

  )
}

export default Section1945