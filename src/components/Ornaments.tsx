export default function Ornaments() {
  const ink = "rgba(var(--inkRgb),0.38)"
  const inkLight = "rgba(var(--inkRgb),0.18)"
  const amber = "rgba(var(--a1),0.22)"

  return (
    <div className="absolute inset-0">
      {/* Khung giấy cổ (frame) */}
      <div className="absolute inset-8 rounded-[32px] border border-black/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]" />
      <div className="absolute inset-14 rounded-[28px] border border-black/5" />

      {/* Corner ornaments (4 góc) */}
      <Corner className="absolute -top-6 -left-6 w-64 opacity-[0.18]" color={ink} />
      <Corner
        className="absolute -top-6 -right-6 w-64 opacity-[0.18] [transform:scaleX(-1)]"
        color={ink}
      />
      <Corner
        className="absolute -bottom-6 -left-6 w-64 opacity-[0.18] [transform:scaleY(-1)]"
        color={ink}
      />
      <Corner
        className="absolute -bottom-6 -right-6 w-64 opacity-[0.18] [transform:scaleX(-1)_scaleY(-1)]"
        color={ink}
      />

      {/* Compass / map watermark giữa trang */}
      <Compass className="absolute left-1/2 top-[42%] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" color={inkLight} />

      {/* “Con dấu lưu trữ” (seal) */}
      <Seal className="absolute right-12 top-24 w-44 rotate-6 opacity-[0.10]" color={amber} />
      <Seal className="absolute left-14 bottom-20 w-40 -rotate-8 opacity-[0.08]" color={amber} />
    </div>
  )
}

function Corner({ className, color }: { className: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" style={{ color }}>
      <path
        d="M20 160C40 120 70 110 95 120C120 130 130 155 150 155C170 155 180 140 180 120"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 120C35 95 60 88 82 98C104 108 112 130 128 130C145 130 156 118 160 105"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M25 175C55 155 70 150 92 152C116 154 128 168 150 168C165 168 175 160 182 150"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M20 20H70C90 20 105 30 112 45C119 60 116 78 103 90C90 102 72 105 58 98C44 91 38 76 38 60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M38 60C38 48 46 40 58 40C70 40 78 48 78 60C78 72 70 80 58 80C46 80 38 72 38 60Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.65"
      />
      <path
        d="M64 60L58 50L52 60L58 70L64 60Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  )
}

function Compass({ className, color }: { className: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 800 800" fill="none" style={{ color }}>
      <circle cx="400" cy="400" r="260" stroke="currentColor" strokeWidth="2" />
      <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <circle cx="400" cy="400" r="90" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path d="M400 120V680" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <path d="M120 400H680" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <path d="M400 210L430 370L400 360L370 370L400 210Z" fill="currentColor" opacity="0.22" />
      <path d="M400 590L370 430L400 440L430 430L400 590Z" fill="currentColor" opacity="0.18" />
      <path d="M210 400L370 430L360 400L370 370L210 400Z" fill="currentColor" opacity="0.16" />
      <path d="M590 400L430 370L440 400L430 430L590 400Z" fill="currentColor" opacity="0.16" />
      <text x="400" y="110" textAnchor="middle" fontSize="26" fill="currentColor" opacity="0.55">N</text>
      <text x="400" y="715" textAnchor="middle" fontSize="26" fill="currentColor" opacity="0.55">S</text>
      <text x="705" y="410" textAnchor="middle" fontSize="26" fill="currentColor" opacity="0.55">E</text>
      <text x="95" y="410" textAnchor="middle" fontSize="26" fill="currentColor" opacity="0.55">W</text>
    </svg>
  )
}

function Seal({ className, color }: { className: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" style={{ color }}>
      <circle cx="120" cy="120" r="92" stroke="currentColor" strokeWidth="3" />
      <circle cx="120" cy="120" r="72" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" opacity="0.8" />
      <path
        d="M120 62l10 22 24 2-18 16 6 24-22-12-22 12 6-24-18-16 24-2 10-22z"
        fill="currentColor"
        opacity="0.28"
      />
      <text x="120" y="152" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.7">
        ARCHIVE • 1945–1954
      </text>
    </svg>
  )
}