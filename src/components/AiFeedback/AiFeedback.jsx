/**
 * Hum Design System — AiFeedback Component
 *
 * Feedback action bar for AI messages: thumbs up/down, copy, regenerate.
 *
 * Props:
 *   onVote      — (direction: "up" | "down") => void
 *   onCopy      — () => void
 *   onRegenerate — () => void
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

function FeedbackButton({ icon, activeIcon, title, active, activeColor, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={title}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px 6px",
        borderRadius: "var(--radius-md)",
        border: "none",
        background: hovered ? "var(--surface-lt)" : "transparent",
        cursor: "pointer",
        transition: "background 0.12s",
      }}
    >
      <Ph
        name={active && activeIcon ? activeIcon : icon}
        size={14}
        color={active ? activeColor : "var(--icon-muted)"}
      />
    </button>
  );
}

export default function AiFeedback({ onVote, onCopy, onRegenerate }) {
  const [vote, setVote] = useState(null); // "up" | "down" | null
  const [copied, setCopied] = useState(false);

  const handleVote = (direction) => {
    const newVote = vote === direction ? null : direction;
    setVote(newVote);
    onVote && onVote(newVote);
  };

  const handleCopy = () => {
    setCopied(true);
    onCopy && onCopy();
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
      <FeedbackButton
        icon="thumbs-up"
        activeIcon="thumbs-up-fill"
        title="Good response"
        active={vote === "up"}
        activeColor="var(--text-success)"
        onClick={() => handleVote("up")}
      />
      <FeedbackButton
        icon="thumbs-down"
        activeIcon="thumbs-down-fill"
        title="Bad response"
        active={vote === "down"}
        activeColor="var(--text-error)"
        onClick={() => handleVote("down")}
      />
      <FeedbackButton
        icon={copied ? "check" : "copy"}
        title={copied ? "Copied!" : "Copy"}
        active={copied}
        activeColor="var(--text-success)"
        onClick={handleCopy}
      />
      <FeedbackButton
        icon="arrow-clockwise"
        title="Regenerate"
        active={false}
        activeColor="var(--icon-muted)"
        onClick={onRegenerate}
      />
    </div>
  );
}
