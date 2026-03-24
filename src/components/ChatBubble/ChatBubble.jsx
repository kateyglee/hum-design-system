/**
 * Hum Design System — ChatBubble Component
 *
 * A chat message bubble for user or AI messages.
 *
 * Props:
 *   role     — "user" | "ai"
 *   children — message content (text, or rich content for AI messages)
 */

export default function ChatBubble({ role = "ai", children }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: isUser ? "72%" : "100%",
          padding: isUser ? "12px 18px" : 0,
          borderRadius: isUser ? "var(--radius-lg)" : 0,
          background: isUser ? "var(--surface)" : "transparent",
          border: isUser ? "1px solid var(--border)" : "none",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          fontWeight: 400,
          lineHeight: "22px",
          color: isUser ? "var(--text-primary)" : "var(--text-md)",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </div>
  );
}
