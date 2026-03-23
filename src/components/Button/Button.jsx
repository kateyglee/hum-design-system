/**
 * Hum Design System — Button Component
 *
 * A self-contained button following Hum light-theme conventions.
 * Uses Geist Mono 14px/600, all-caps, 0.08em letter-spacing.
 *
 * Props:
 *   variant   — "primary" | "outline" | "ghost" | "danger" (default: "primary")
 *   size      — "sm" | "md" | "lg" (default: "md")
 *   iconOnly  — boolean, renders square padding for icon-only buttons
 *   disabled  — boolean
 *   children  — button content (text, icons, or both)
 *   style     — optional style overrides merged onto the button
 *   ...rest   — all other props forwarded to the <button> element
 */

import { useState } from "react";

// ── Inline styles (no external CSS needed) ──────────────────────────

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
  sm: { fontSize: 11, padding: "6px 14px", iconPadding: "6px" },
  md: { fontSize: 14, padding: "10px 20px", iconPadding: "10px" },
  lg: { fontSize: 14, padding: "14px 28px", iconPadding: "14px" },
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

// ── Component ───────────────────────────────────────────────────────

export default function Button({
  variant = "primary",
  size = "md",
  iconOnly = false,
  disabled = false,
  children,
  style: styleProp,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);

  const sizeTokens = SIZE_MAP[size] || SIZE_MAP.md;
  const variantStyles = getVariantStyles(variant, hovered && !disabled);

  const composedStyle = {
    ...baseStyle,
    ...variantStyles,
    fontSize: sizeTokens.fontSize,
    padding: iconOnly ? sizeTokens.iconPadding : sizeTokens.padding,
    borderRadius: iconOnly ? TOKENS.radiusMd : TOKENS.radiusFull,
    opacity: disabled ? 0.3 : 1,
    pointerEvents: disabled ? "none" : "auto",
    ...styleProp,
  };

  return (
    <button
      style={composedStyle}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
