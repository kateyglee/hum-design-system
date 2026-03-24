/**
 * Hum Design System — Activity Indicators
 *
 * ActivityStep — A single activity row. Two types:
 *   type="thinking" — Animated spinner, lighter text. AI is reasoning.
 *   type="action"   — Static icon, normal text. AI is executing. Supports FileChip children.
 *
 *   Props:
 *     type        — "thinking" | "action" (default: "action")
 *     status      — "processing" | "finished" (default: "finished"). Processing pulses text.
 *     icon        — Phosphor icon name (default: "spinner" for thinking, "terminal-window" for action)
 *     description — step text
 *     children    — optional content below (FileChip, thumbnails) — action type only
 *
 * ActivityGroup — Collapsible wrapper for 3+ steps.
 *   Props:
 *     label    — toggle header text
 *     open     — controlled open state
 *     onToggle — toggle callback
 *     loading  — shows spinner at bottom + pulses header
 *     children — ActivityStep elements
 *
 * FileChip — Inline pill for file/artifact references.
 *   Props:
 *     children — label text
 */

import { useState } from "react";

// ── Icon helper ─────────────────────────────────────────────────────

const Ph = ({ name, size = 18, color = "currentColor" }) => (
  <i
    className={"ph ph-" + name}
    style={{
      fontSize: size,
      color,
      lineHeight: 1,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
    }}
  />
);

// ── FileChip ────────────────────────────────────────────────────────

export function FileChip({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-regular)",
        letterSpacing: "var(--tracking-tight)",
        color: "var(--text-md)",
        background: "var(--accent-dim)",
        borderRadius: "var(--radius)",
        padding: "2px 8px",
        lineHeight: "var(--leading-normal)",
      }}
    >
      {children}
    </span>
  );
}

// ── ActivityStep ────────────────────────────────────────────────────

export function ActivityStep({
  type = "action",
  status,
  icon,
  description,
  children,
}) {
  const isThinking = type === "thinking";
  const resolvedStatus = status || (isThinking ? "processing" : "finished");
  const isProcessing = resolvedStatus === "processing";
  const iconName = icon || (isThinking ? "spinner" : "terminal-window");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <style>{`
        @keyframes hum-spin { to { transform: rotate(360deg); } }
        @keyframes hum-text-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* Icon + description row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span
          style={{
            display: "inline-flex",
            width: 18,
            height: 18,
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            animation: isThinking && isProcessing ? "hum-spin 2s linear infinite" : "none",
          }}
        >
          <Ph
            name={iconName}
            size={18}
            color="var(--icon-default)"
          />
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-regular)",
            color: "var(--text-lt)",
            lineHeight: "var(--leading-normal)",
            flex: 1,
            animation: isProcessing || isThinking ? "hum-text-pulse 2s ease-in-out infinite" : "none",
          }}
        >
          {description}
        </span>
      </div>

      {/* Optional children (FileChip, thumbnails) — action type only */}
      {!isThinking && children && (
        <div style={{ marginLeft: 28, marginTop: 4 }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ── ActivityGroup ───────────────────────────────────────────────────

export default function ActivityGroup({
  label = "Running command",
  open: controlledOpen,
  onToggle,
  loading = false,
  children,
}) {
  const [internalOpen, setInternalOpen] = useState(true);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      onToggle && onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <style>{`
        @keyframes hum-header-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      {/* Toggle header */}
      <button
        onClick={handleToggle}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 0",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-regular)",
          color: "var(--text-lt)",
          lineHeight: "var(--leading-normal)",
          animation: loading ? "hum-header-pulse 2s ease-in-out infinite" : "none",
        }}
      >
        {label}
        <Ph
          name={isOpen ? "caret-down" : "caret-right"}
          size={14}
          color="var(--icon-default)"
        />
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: "10px 0 4px",
            borderLeft: "1px solid var(--border)",
            marginLeft: 8,
            paddingLeft: 20,
          }}
        >
          {children}

          {loading && (
            <ActivityStep type="thinking" description="" />
          )}
        </div>
      )}
    </div>
  );
}
