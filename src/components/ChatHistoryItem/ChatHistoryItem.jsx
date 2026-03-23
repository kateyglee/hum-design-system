/**
 * Hum Design System — ChatHistoryItem Component
 *
 * A sidebar chat session row. 32px height, truncated label, optional star.
 * Context menu button (dots-three) appears on hover only.
 * References CSS custom properties from src/tokens/light.css.
 *
 * Props:
 *   label         — chat session label text (truncated with ellipsis)
 *   starred       — boolean, shows amber star icon
 *   active        — boolean, active/selected state
 *   onClick       — click handler for selecting the chat
 *   onMenuClick   — click handler for the context menu button (receives event)
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

export default function ChatHistoryItem({
  label,
  starred = false,
  active = false,
  onClick,
  onMenuClick,
}) {
  const [hovered, setHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);

  const rootStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 32,
    padding: "0 4px 0 10px",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    background: active
      ? "var(--accent-dim)"
      : hovered
        ? "var(--surface-lt)"
        : "transparent",
    transition: "background 0.12s",
    gap: 4,
    position: "relative",
    boxSizing: "border-box",
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={rootStyle}
    >
      {starred && (
        <Ph
          name="star-fill"
          size={11}
          color="var(--icon-accent)"
          style={{ flexShrink: 0 }}
        />
      )}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          fontWeight: 400,
          color: active ? "var(--text-accent)" : "var(--text-md)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flex: 1,
        }}
      >
        {label}
      </span>
      {hovered && onMenuClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMenuClick(e);
          }}
          onMouseEnter={() => setMenuHovered(true)}
          onMouseLeave={() => setMenuHovered(false)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "3px 4px",
            borderRadius: "var(--radius-sm)",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            opacity: menuHovered ? 1 : 0.6,
            transition: "opacity 0.12s",
          }}
        >
          <Ph name="dots-three" size={14} color="var(--icon-muted)" />
        </button>
      )}
    </div>
  );
}
