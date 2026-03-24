/**
 * Hum Design System — ChatHeader Component
 *
 * Top bar for chat view with title (dropdown) and action slot.
 *
 * Props:
 *   title        — chat title text
 *   onTitleClick  — () => void, opens title dropdown/rename
 *   actions      — ReactNode rendered on the right side (e.g. buttons)
 */

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

export default function ChatHeader({ title = "New Chat", onTitleClick, actions }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
        padding: "0 16px",
        flexShrink: 0,
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Title with dropdown chevron */}
      <button
        onClick={onTitleClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          cursor: onTitleClick ? "pointer" : "default",
          padding: 0,
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-base)",
          fontWeight: 600,
          letterSpacing: "var(--tracking-normal)",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          lineHeight: 1,
        }}
      >
        {title}
        {onTitleClick && (
          <Ph name="caret-down" size={12} color="var(--icon-default)" />
        )}
      </button>

      {/* Right-side actions */}
      {actions && (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {actions}
        </div>
      )}
    </div>
  );
}
