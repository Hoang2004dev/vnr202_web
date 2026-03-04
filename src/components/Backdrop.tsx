// src\components\Backdrop.tsx
import Ornaments from "./Ornaments"

export default function Backdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="paperwash" />
      <div className="aurora" />
      <div className="stains" />
      <div className="fibers" />
      <div className="contours" />
      <div className="grain" />
      <div className="vignette" />
      <Ornaments />
    </div>
  )
}