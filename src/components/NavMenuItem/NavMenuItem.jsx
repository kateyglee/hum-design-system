/**
 * Hum Design System — NavMenuItem Component
 *
 * A sidebar navigation item with Phosphor icon, label, and optional badge.
 * 32px height, IBM Plex Sans 14px/400. Supports collapsed (icon-only) variant.
 * References CSS custom properties from src/tokens/light.css.
 *
 * Props:
 *   icon      — Phosphor icon name (e.g. "chart-bar", "file-text")
 *   label     — display text
 *   badge     — optional badge string (rendered as pill)
 *   active    — boolean, active/selected state
 *   collapsed — boolean, icon-only centered mode
 *   onClick   — click handler
 */

import { useState } from "react";

const Ph = ({ name, size = 18, color = "currentColor", style: xs }) => (
  <i
    className={"ph ph-" + name}
    style={{
      fontSize: size,
      color,
      lineHeight: 1,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      ...xs,
    }}
  />
);

export default function NavMenuItem({
  icon,
  label,
  badge,
  active = false,
  collapsed = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const rootStyle = {
    width: collapsed ? 32 : "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: collapsed ? "center" : "flex-start",
    gap: collapsed ? 0 : 10,
    height: 32,
    padding: collapsed ? 0 : "0 10px",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-base)",
    fontWeight: 400,
    letterSpacing: 0,
    textTransform: "none",
    color: active ? "var(--text-accent)" : "var(--text-md)",
    background: active
      ? "var(--accent-dim)"
      : hovered
        ? "var(--surface-lt)"
        : "transparent",
    transition: "background 0.12s, color 0.12s",
    boxSizing: "border-box",
  };

  const iconColor = active ? "var(--icon-active)" : "var(--icon-default)";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={collapsed ? label : undefined}
      style={rootStyle}
    >
      <Ph name={icon} size={16} color={iconColor} />
      {!collapsed && <span style={{ flex: 1 }}>{label}</span>}
      {!collapsed && badge && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: "var(--radius-full)",
            background: "var(--accent-dim)",
            color: "var(--text-accent)",
            letterSpacing: "var(--tracking-normal)",
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
