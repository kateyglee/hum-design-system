/**
 * Hum Design System — ProgressBar Component
 *
 * A slim progress bar with optional label for long-running operations.
 *
 * Props:
 *   progress — number 0-100
 *   label    — optional text (e.g. "Compacting so we can keep humming...")
 *   showPercent — boolean, show percentage text (default: true)
 *   size     — "sm" | "md" (default: "md")
 */

const SIZE_MAP = {
  sm: { height: 3, fontSize: "var(--text-xs)", gap: 4 },
  md: { height: 4, fontSize: "var(--text-sm)", gap: 6 },
};

export default function ProgressBar({
  progress = 0,
  label,
  showPercent = true,
  size = "md",
}) {
  const s = SIZE_MAP[size] || SIZE_MAP.md;
  const clamped = Math.max(0, Math.min(100, progress));

  return (
    <div style={{ width: "100%" }}>
      {/* Label row */}
      {(label || showPercent) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: s.gap,
          }}
        >
          {label && (
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: s.fontSize,
                fontWeight: 400,
                color: "var(--text-lt)",
                lineHeight: "var(--leading-snug)",
              }}
            >
              {label}
            </span>
          )}
          {showPercent && (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: s.fontSize,
                fontWeight: "var(--font-regular)",
                color: "var(--text-md)",
                lineHeight: "var(--leading-snug)",
                letterSpacing: "var(--tracking-normal)",
              }}
            >
              {Math.round(clamped)}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        style={{
          width: "100%",
          height: s.height,
          borderRadius: "var(--radius-full)",
          background: "var(--accent-dim)",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <div
          style={{
            width: `${clamped}%`,
            height: "100%",
            borderRadius: "var(--radius-full)",
            background: "var(--text-accent)",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
