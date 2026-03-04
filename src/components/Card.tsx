// Card.tsx
type Props = {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: Props) {

  return (

    <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">

      <h3 className="text-xl font-bold text-yellow-400 mb-3">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {children}
      </p>

    </div>

  )
}

export default Card