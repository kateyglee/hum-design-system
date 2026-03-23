/**
 * Hum Design System — Input Component
 *
 * Text input following Hum light-theme conventions.
 * Uses Geist Mono 14px/400, letter-spacing 0.02em.
 * References CSS custom properties from src/tokens/light.css.
 *
 * Props:
 *   label       — optional label text (rendered as Geist Mono 10px eyebrow)
 *   placeholder — input placeholder text
 *   value       — controlled value
 *   onChange    — change handler
 *   disabled    — boolean
 *   error       — error message string (shows error state + message)
 *   multiline   — boolean, renders a <textarea> instead of <input>
 *   rows        — number of rows for multiline (default: 3)
 *   size        — "sm" | "md" (default: "md")
 *   style       — optional style overrides on the input element
 *   ...rest     — all other props forwarded to the input/textarea element
 */

import { useState } from "react";

const SIZE_MAP = {
  sm: { fontSize: 12, padding: "6px 10px" },
  md: { fontSize: 13, padding: "9px 12px" },
};

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  multiline = false,
  rows = 3,
  size = "md",
  style: styleProp,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  const sizeTokens = SIZE_MAP[size] || SIZE_MAP.md;

  const inputStyle = {
    width: "100%",
    fontFamily: "var(--font-display)",
    fontSize: sizeTokens.fontSize,
    fontWeight: 400,
    letterSpacing: "0.02em",
    lineHeight: "20px",
    color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
    background: disabled ? "var(--surface-lt)" : "var(--surface)",
    border: `1px solid ${error ? "var(--text-error)" : focused ? "var(--border-accent)" : "var(--border-dk)"}`,
    borderRadius: "var(--radius)",
    padding: sizeTokens.padding,
    outline: "none",
    boxSizing: "border-box",
    boxShadow: focused && !error ? "0 0 0 3px var(--accent-dim)" : error && focused ? "0 0 0 3px var(--state-error-bg)" : "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text",
    ...(multiline ? { resize: "vertical", minHeight: 64 } : {}),
    ...styleProp,
  };

  const labelStyle = {
    fontFamily: "var(--font-display)",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: error ? "var(--text-error)" : "var(--text-muted)",
    display: "block",
    marginBottom: 6,
  };

  const errorStyle = {
    fontFamily: "var(--font-body)",
    fontSize: 12,
    lineHeight: "16px",
    color: "var(--text-error)",
    marginTop: 4,
  };

  const Tag = multiline ? "textarea" : "input";

  return (
    <div>
      {label && <label style={labelStyle}>{label}</label>}
      <Tag
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={multiline ? rows : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}
