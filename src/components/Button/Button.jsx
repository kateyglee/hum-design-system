/**
 * Hum Design System — Button Component
 *
 * A self-contained button following Hum light-theme conventions.
 * Uses Geist Mono 14px/600, all-caps, 0.08em letter-spacing.
 *
 * Props:
 *   variant      — "primary" | "outline" | "ghost" | "danger" (default: "primary")
 *   size         — "sm" | "md" | "lg" (default: "md")
 *   type         — "button" | "submit" | "reset" (default: "button")
 *   icon         — Phosphor icon name (e.g. "plus", "download"). Rendered as <i> tag.
 *   iconPosition — "left" | "right" (default: "left"). Ignored when iconOnly is true.
 *   iconOnly     — boolean, renders square button with icon only (no text)
 *   fullWidth    — boolean, stretches button to fill parent width
 *   disabled     — boolean
 *   loading      — boolean, shows spinner and disables interaction
 *   tooltip      — string, native title tooltip on hover
 *   children     — button text content
 *   style        — optional style overrides merged onto the button
 *   ...rest      — all other props forwarded to the <button> element
 */

import { useState } from "react";

// ── Tokens ──────────────────────────────────────────────────────────

const TOKENS = {
  fontDisplay: '"Geist Mono", monospace',
  btnPrimaryBg: "#2E2E38",
  btnPrimaryHover: "#1A1A24",
  btnPrimaryText: "#FFFFFF",
  btnOutlineBg: "#FFFFFF",
  textMd: "#3A3A44",
  textMuted: "#9898A4",
  textLt: "#6B6B78",
  textError: "#B91C1C",
  borderDk: "#C8C8D0",
  borderAccent: "rgba(46,46,56,0.25)",
  ghostHover: "#F4F4F6",
  accentDim: "rgba(46,46,56,0.06)",
  stateErrorBg: "#FEF2F2",
  radiusFull: 9999,
  radius: 4,
  radiusMd: 6,
};

const SIZE_MAP = {
  sm: { fontSize: 11, padding: "6px 14px", iconPadding: "6px", iconSize: 14, spinnerSize: 12 },
  md: { fontSize: 14, padding: "10px 20px", iconPadding: "10px", iconSize: 16, spinnerSize: 14 },
  lg: { fontSize: 14, padding: "14px 28px", iconPadding: "14px", iconSize: 16, spinnerSize: 16 },
};

const baseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontFamily: TOKENS.fontDisplay,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  borderRadius: TOKENS.radiusFull,
  border: "none",
  cursor: "pointer",
  transition: "all 0.15s ease",
  whiteSpace: "nowrap",
  lineHeight: "20px",
  boxSizing: "border-box",
  position: "relative",
};

function getVariantStyles(variant, hovered) {
  switch (variant) {
    case "outline":
      return {
        background: TOKENS.btnOutlineBg,
        color: TOKENS.textMd,
        border: `1px solid ${hovered ? TOKENS.borderAccent : TOKENS.borderDk}`,
      };
    case "ghost":
      return {
        background: hovered ? TOKENS.ghostHover : "transparent",
        color: TOKENS.textMd,
        border: "none",
      };
    case "danger":
      return {
        background: hovered ? TOKENS.stateErrorBg : "transparent",
        color: TOKENS.textError,
        border: `1px solid rgba(185,28,28,${hovered ? "0.35" : "0.2"})`,
      };
    case "primary":
    default:
      return {
        background: hovered ? TOKENS.btnPrimaryHover : TOKENS.btnPrimaryBg,
        color: TOKENS.btnPrimaryText,
        border: "none",
      };
  }
}

// ── Spinner ─────────────────────────────────────────────────────────

const Spinner = ({ size = 14, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      animation: "hum-spin 0.8s linear infinite",
      flexShrink: 0,
    }}
  >
    <style>{`@keyframes hum-spin { to { transform: rotate(360deg); } }`}</style>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.25"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// ── Icon helper ─────────────────────────────────────────────────────

const PhIcon = ({ name, size = 16 }) => (
  <i
    className={"ph ph-" + name}
    style={{
      fontSize: size,
      lineHeight: 1,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
    }}
  />
);

// ── Component ───────────────────────────────────────────────────────

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  icon,
  iconPosition = "left",
  iconOnly = false,
  fullWidth = false,
  disabled = false,
  loading = false,
  tooltip,
  children,
  style: styleProp,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);

  const isDisabled = disabled || loading;
  const sizeTokens = SIZE_MAP[size] || SIZE_MAP.md;
  const variantStyles = getVariantStyles(variant, hovered && !isDisabled);

  const composedStyle = {
    ...baseStyle,
    ...variantStyles,
    fontSize: sizeTokens.fontSize,
    padding: iconOnly ? sizeTokens.iconPadding : sizeTokens.padding,
    borderRadius: TOKENS.radiusFull,
    opacity: disabled ? 0.3 : 1,
    cursor: isDisabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "auto",
    width: fullWidth ? "100%" : undefined,
    ...styleProp,
  };

  const iconEl = icon && !loading ? (
    <PhIcon name={icon} size={sizeTokens.iconSize} />
  ) : null;

  const spinnerEl = loading ? (
    <Spinner size={sizeTokens.spinnerSize} color="currentColor" />
  ) : null;

  return (
    <button
      type={type}
      style={composedStyle}
      disabled={isDisabled}
      title={tooltip}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {iconOnly ? (
        loading ? spinnerEl : iconEl
      ) : (
        <>
          {loading ? spinnerEl : iconPosition === "left" && iconEl}
          <span style={{ opacity: loading && iconOnly ? 0 : 1 }}>{children}</span>
          {!loading && iconPosition === "right" && iconEl}
        </>
      )}
    </button>
  );
}
