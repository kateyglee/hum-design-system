/**
 * Hum Design System — LoadingSpinner Component
 *
 * Hum-branded loading spinner using orbital dots inspired by the logomark.
 *
 * Props:
 *   size  — "sm" | "md" | "lg" (default: "md")
 *   color — CSS color value (default: "var(--text-accent)")
 */

const SIZE_MAP = {
  sm: { container: 20, dot: 2.5, orbit: 7 },
  md: { container: 32, dot: 3.5, orbit: 11 },
  lg: { container: 48, dot: 5, orbit: 17 },
};

export default function LoadingSpinner({ size = "md", color = "var(--text-accent)" }) {
  const s = SIZE_MAP[size] || SIZE_MAP.md;
  const cx = s.container / 2;

  return (
    <div
      style={{
        width: s.container,
        height: s.container,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <style>{`
        @keyframes hum-orbit {
          to { transform: rotate(360deg); }
        }
        @keyframes hum-dot-fade {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }
      `}</style>
      <svg width={s.container} height={s.container} viewBox={`0 0 ${s.container} ${s.container}`}>
        {/* Center dot */}
        <circle cx={cx} cy={cx} r={s.dot} fill={color} />

        {/* Orbiting dots */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animation: "hum-orbit 1.4s linear infinite" }}>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60) * (Math.PI / 180);
            const x = cx + s.orbit * Math.cos(angle);
            const y = cx + s.orbit * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={s.dot * 0.7}
                fill={color}
                style={{
                  animation: `hum-dot-fade 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
