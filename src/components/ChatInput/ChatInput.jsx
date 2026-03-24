/**
 * Hum Design System — ChatInput Component
 *
 * Chat input bar with fixed height, textarea, and contextual send/stop button
 * anchored to the bottom-right.
 *
 * Props:
 *   value       — controlled input value
 *   onChange    — (value: string) => void
 *   onSend     — () => void, called when user presses Enter or clicks send
 *   onStop     — () => void, called when user clicks stop during generation
 *   placeholder — input placeholder text
 *   generating — boolean, when true shows stop button and disables input
 */

import { useState } from "react";
import Button from "../Button/Button";

export default function ChatInput({
  value = "",
  onChange,
  onSend,
  onStop,
  placeholder = "Ask Hum anything...",
  generating = false,
}) {
  const [focused, setFocused] = useState(false);

  const hasText = value.trim().length > 0;
  const showButton = hasText || generating;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && hasText && !generating) {
      e.preventDefault();
      onSend && onSend();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 120,
        borderRadius: 20,
        border: `1px solid ${focused ? "var(--border-accent)" : "var(--border-dk)"}`,
        background: "var(--surface)",
        padding: "14px 14px 10px 18px",
        transition: "border-color 0.15s",
        boxSizing: "border-box",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={generating}
        rows={1}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "none",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-md)",
          fontWeight: 400,
          color: "var(--text-primary)",
          lineHeight: "22px",
          opacity: generating ? 0.5 : 1,
          resize: "none",
          overflow: "auto",
        }}
      />

      {/* Bottom row — button anchored right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexShrink: 0,
        }}
      >
        {/* Send button — visible only when there's text */}
        {hasText && !generating && (
          <Button
            variant="primary"
            size="md"
            icon="arrow-up"
            iconOnly
            onClick={onSend}
          />
        )}

        {/* Stop button — visible when generating */}
        {generating && (
          <Button
            variant="outline"
            size="md"
            icon="stop"
            iconOnly
            onClick={onStop}
          />
        )}
      </div>
    </div>
  );
}
