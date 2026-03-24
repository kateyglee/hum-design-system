/**
 * Hum Design System — Badge Component
 *
 * Status indicator and label badge following Hum light-theme conventions.
 * Uses Geist Mono 10px/400, all-caps, letter-spacing 0.12em.
 * References CSS custom properties from src/tokens/light.css.
 *
 * Props:
 *   variant  — "default" | "success" | "error" | "warning" | "info" | "pro" (default: "default")
 *   children — badge content text
 *   style    — optional style overrides
 */

const VARIANT_MAP = {
  default: {
    color: "var(--text-accent)",
    background: "var(--accent-dim)",
    borderColor: "transparent",
  },
  success: {
    color: "var(--text-success)",
    background: "var(--state-success-bg)",
    borderColor: "rgba(10,110,72,0.2)",
  },
  error: {
    color: "var(--text-error)",
    background: "var(--state-error-bg)",
    borderColor: "rgba(185,28,28,0.2)",
  },
  warning: {
    color: "var(--text-warning)",
    background: "var(--state-warning-bg)",
    borderColor: "rgba(146,64,14,0.2)",
  },
  info: {
    color: "var(--text-info)",
    background: "var(--state-info-bg)",
    borderColor: "rgba(29,78,216,0.2)",
  },
  pro: {
    color: "#7C3AED",
    background: "rgba(124,58,237,0.08)",
    borderColor: "rgba(124,58,237,0.2)",
  },
};

export default function Badge({
  variant = "default",
  children,
  style: styleProp,
}) {
  const tokens = VARIANT_MAP[variant] || VARIANT_MAP.default;

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-display)",
    fontSize: "var(--text-xs)",
    fontWeight: variant === "pro" ? 600 : 400,
    letterSpacing: variant === "pro" ? "var(--tracking-normal)" : "var(--tracking-wide)",
    textTransform: "uppercase",
    lineHeight: "var(--leading-tight)",
    color: tokens.color,
    background: tokens.background,
    border: `1px solid ${tokens.borderColor}`,
    borderRadius: "var(--radius-full)",
    padding: "3px 10px",
    whiteSpace: "nowrap",
    ...styleProp,
  };

  return <span style={badgeStyle}>{children}</span>;
}
