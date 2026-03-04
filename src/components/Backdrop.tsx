import Ornaments from "./Ornaments"

export default function Backdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* paper layers */}
      <div className="paperwash" />
      <div className="aurora" />
      <div className="stains" />
      <div className="fibers" />
      <div className="contours" />
      <div className="grain" />
      <div className="vignette" />

      {/* historical ornaments (SVG) */}
      <Ornaments />
    </div>
  )
}