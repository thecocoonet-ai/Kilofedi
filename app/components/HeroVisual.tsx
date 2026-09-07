export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="hero-form relative mx-auto h-[320px] w-[320px] md:h-[440px] md:w-[440px]"
    >
      <svg
        viewBox="0 0 440 440"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#8B7CFF" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#5847F2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#5847F2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="formGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4F1E9" />
            <stop offset="45%" stopColor="#8B7CFF" />
            <stop offset="100%" stopColor="#15161A" />
          </linearGradient>
          <filter id="soften" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* ambient spotlight, echoes the dramatic single-light-source mood
            without depicting any specific object */}
        <circle cx="220" cy="200" r="200" fill="url(#glow)" />

        {/* a simple sculptural form: two interlocking arcs, rendered as a
            gradient-lit ring — original, abstract, not representational */}
        <g filter="url(#soften)">
          <path
            d="M220 70
               C 300 70 360 130 360 210
               C 360 290 300 350 220 350
               C 150 350 95 300 90 235"
            fill="none"
            stroke="url(#formGrad)"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <path
            d="M220 130
               C 265 130 300 165 300 210
               C 300 255 265 290 220 290
               C 180 290 148 262 142 225"
            fill="none"
            stroke="#F4F1E9"
            strokeOpacity="0.9"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>

        {/* a single warm rim-light accent, standing in for the kind of
            reflective highlight dramatic product photography relies on */}
        <ellipse
          cx="150"
          cy="330"
          rx="70"
          ry="10"
          fill="#8B7CFF"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
