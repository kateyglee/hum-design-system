/**
 * Hum Design System — SideNav Component
 *
 * A self-contained collapsible sidebar with logo, navigation, connectors
 * widget, and user footer. Light theme only (settings/workspace surface).
 *
 * Props:
 *   open            — boolean, whether sidebar is expanded (288px) or collapsed (48px)
 *   onToggle        — () => void, called when the collapse toggle is clicked
 *   activeSection   — string | null, the currently active nav section id
 *   onSectionChange — (id: string | null) => void, called when a nav item is clicked
 *   navSections     — Array<{ id: string, icon: string, label: string, badge?: string }>
 *   userName        — string, display name in footer (default: "Alex")
 *   userPlan        — string, plan label in footer (default: "Free plan")
 *   unreadCount     — number, notification badge count on the bell icon
 *   onBellClick     — () => void
 *   onSettingsClick — () => void
 *   onAvatarClick   — () => void
 *   onNewChat       — () => void, called when "New chat" is clicked
 *   onSearchClick   — () => void
 *   onConnectorsClick — () => void, called when connectors widget is clicked
 *   chatSessions    — Array<{ id: number, label: string, starred: boolean }>
 *   activeChat      — number | null, index of the active chat
 *   onChatSelect    — (index: number) => void
 *   children        — optional, rendered below the nav sections (e.g. custom widgets)
 */

import { useState } from "react";

// ── Tokens ──────────────────────────────────────────────────────────

const T = {
  fontDisplay: '"Geist Mono", monospace',
  fontBody: '"IBM Plex Sans", system-ui, sans-serif',
  bg: "#FAFAFA",
  surface: "#FFFFFF",
  surfaceLt: "#F7F7FA",
  surfaceMd: "#EFEFF2",
  textPrimary: "#111116",
  textMd: "#3A3A44",
  textLt: "#6B6B78",
  textMuted: "#9898A4",
  textAccent: "#2E2E38",
  border: "#E2E2E8",
  borderDk: "#C8C8D0",
  accentDim: "rgba(46,46,56,0.06)",
  radiusMd: 6,
  radiusLg: 8,
  radiusFull: 9999,
};

// ── Sub-components ──────────────────────────────────────────────────

/** Phosphor icon helper — requires @phosphor-icons/web loaded on the page */
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

/** Hum logomark (SVG) */
const HumLogoIcon = ({ size = 24 }) => {
  const id = "hg" + size;
  return (
    <svg width={size} height={size} viewBox="0 0 92 88" fill="none" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id={id} x1="83.5" y1="58.4" x2="58.1" y2="0.9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E2E38" />
          <stop offset="1" stopColor="#2E2E38" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <circle cx="43.7" cy="42.9" r="27.9" stroke="rgba(46,46,56,0.18)" strokeWidth="1" />
      <path
        d="M74.6 13.8C71.9 10.9 68.8 8.3 65.4 6.3C58.9 2.3 51.4 0.1 43.7 0C20.9-0.8-0.2 19.6 0 42.9C-0.8 66.1 20 87.7 43.7 87.4C64.4 88 84.2 72.2 88.1 51.6C88.7 48.7 89 45.8 89.1 42.9C89.1 41.5 89 40.2 88.9 38.9C88.9 38.1 88.5 37.4 87.9 36.9C87.3 36.3 86.5 36.1 85.7 36.2C84.9 36.2 84.2 36.6 83.6 37.2C83.1 37.8 82.9 38.6 83 39.4C83.1 40.6 83.1 41.7 83.2 42.9C83.2 45.4 83 47.9 82.5 50.5C79.6 68.6 62.4 83.2 43.7 83.2C22.3 84 2.3 64.8 2.6 42.9C1.7 21 21.3 0.7 43.7 0.9C51.2 0.8 58.7 2.7 65.3 6.5C68.7 8.5 71.8 11 74.6 13.8Z"
        fill={"url(#" + id + ")"}
      />
      <circle cx="43.7" cy="42.9" r="7.8" fill="#2E2E38" />
      <circle cx="80" cy="24.4" r="12" fill="#2E2E38" fillOpacity="0.14" />
      <circle cx="80" cy="24.4" r="7.8" fill="#2E2E38" />
    </svg>
  );
};

/** Hum logo with wordmark */
const HumLogo = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 9, userSelect: "none" }}>
    <HumLogoIcon size={22} />
    <span
      style={{
        fontFamily: T.fontDisplay,
        fontWeight: 300,
        fontSize: 15,
        letterSpacing: "0.45em",
        color: T.textPrimary,
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      hum
    </span>
  </span>
);

/** Single nav item row */
const NavItem = ({ icon, label, active, collapsed, badge, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={collapsed ? label : undefined}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : "flex-start",
        gap: collapsed ? 0 : 10,
        height: 32,
        padding: collapsed ? 0 : "0 10px",
        borderRadius: T.radiusMd,
        cursor: "pointer",
        fontFamily: T.fontBody,
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0,
        textTransform: "none",
        color: active ? T.textAccent : T.textMd,
        background: active ? T.accentDim : hovered ? T.surfaceLt : "transparent",
        transition: "background 0.12s, color 0.12s",
        boxSizing: "border-box",
      }}
    >
      <Ph name={icon} size={16} color={active ? "var(--icon-active)" : "var(--icon-default)"} />
      {!collapsed && <span style={{ flex: 1 }}>{label}</span>}
      {!collapsed && badge && (
        <span
          style={{
            fontFamily: T.fontDisplay,
            fontSize: 9,
            fontWeight: 600,
            padding: "2px 6px",
            borderRadius: T.radiusFull,
            background: T.accentDim,
            color: T.textAccent,
            letterSpacing: "0.08em",
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
};

/** Chat session row in sidebar */
const ChatRow = ({ label, starred, active, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: 32,
        minHeight: 32,
        flexShrink: 0,
        padding: "0 4px 0 10px",
        borderRadius: T.radiusMd,
        cursor: "pointer",
        background: active ? T.accentDim : hovered ? T.surfaceLt : "transparent",
        transition: "background 0.12s",
        gap: 4,
        boxSizing: "border-box",
      }}
    >
      {starred && <Ph name="star-fill" size={11} color="var(--icon-accent)" style={{ flexShrink: 0 }} />}
      <span
        style={{
          fontFamily: T.fontBody,
          fontSize: 14,
          fontWeight: 400,
          color: active ? T.textAccent : T.textMd,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flex: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
};

// ── Ghost icon button ────────────────────────────────────────────────

/** Interactive ghost icon button — transparent bg, hover surface-lt */
const GhostIconButton = ({ icon, size = 16, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? T.surfaceLt : "transparent",
        border: "none",
        cursor: "pointer",
        borderRadius: T.radiusMd,
        flexShrink: 0,
        transition: "background 0.12s",
      }}
    >
      <Ph name={icon} size={size} color={hovered ? "var(--icon-active)" : "var(--icon-default)"} />
    </button>
  );
};

// ── Eyebrow label ───────────────────────────────────────────────────

const Eyebrow = ({ children, style: xs }) => (
  <p
    style={{
      fontFamily: T.fontDisplay,
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.20em",
      textTransform: "uppercase",
      color: T.textMuted,
      padding: "0 10px",
      margin: 0,
      marginBottom: 8,
      flexShrink: 0,
      ...xs,
    }}
  >
    {children}
  </p>
);

// ── Main Component ──────────────────────────────────────────────────

export default function SideNav({
  open = true,
  onToggle,
  activeSection = null,
  onSectionChange,
  navSections = [],
  userName = "Alex",
  userPlan = "Free plan",
  unreadCount = 0,
  onBellClick,
  onSettingsClick,
  onAvatarClick,
  onNewChat,
  onSearchClick,
  onConnectorsClick,
  chatSessions = [],
  activeChat = null,
  onChatSelect,
  children,
}) {
  return (
    <aside
      style={{
        display: "flex",
        width: open ? 288 : 48,
        flexDirection: "column",
        height: "100vh",
        flexShrink: 0,
        background: T.surface,
        borderRight: `1px solid ${T.border}`,
        position: "relative",
        zIndex: 10,
        overflowX: "hidden",
        boxSizing: "border-box",
        transition: "width 0.2s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* ── Logo row ── */}
      <div
        style={{
          width: "100%",
          height: 64,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          padding: open ? "0 14px 0 18px" : 0,
          boxSizing: "border-box",
        }}
      >
        {open && <HumLogo />}
        <GhostIconButton icon="sidebar-simple" size={17} onClick={onToggle} />
      </div>

      {open ? (
        <>
          {/* ── Quick actions ── */}
          <div style={{ width: "100%", flexShrink: 0, padding: "4px 10px 6px", display: "flex", flexDirection: "column", gap: 2, boxSizing: "border-box" }}>
            {[
              { icon: "note-pencil", label: "New chat", action: onNewChat },
              { icon: "magnifying-glass", label: "Search", action: onSearchClick },
            ].map((item) => (
              <NavItem key={item.label} icon={item.icon} label={item.label} active={false} collapsed={false} onClick={item.action} />
            ))}
          </div>

          {/* ── Workspace nav ── */}
          <div style={{ width: "100%", flexShrink: 0, padding: "14px 10px 4px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 2 }}>
            <Eyebrow>Workspace</Eyebrow>
            {navSections.map((n) => (
              <NavItem
                key={n.id}
                icon={n.icon}
                label={n.label}
                badge={n.badge}
                active={activeSection === n.id}
                collapsed={false}
                onClick={() => onSectionChange && onSectionChange(activeSection === n.id ? null : n.id)}
              />
            ))}
          </div>

          {/* ── Chat sessions ── */}
          <div
            style={{
              width: "100%",
              flex: 1,
              overflowY: "auto",
              padding: "14px 10px 8px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              boxSizing: "border-box",
            }}
          >
            {chatSessions.some((s) => s.starred) && (
              <>
                <Eyebrow>Starred</Eyebrow>
                {chatSessions
                  .filter((s) => s.starred)
                  .map((s) => {
                    const i = chatSessions.indexOf(s);
                    return (
                      <ChatRow
                        key={s.id}
                        label={s.label}
                        starred={s.starred}
                        active={activeChat === i}
                        onClick={() => onChatSelect && onChatSelect(i)}
                      />
                    );
                  })}
                <div style={{ height: 12, flexShrink: 0 }} />
              </>
            )}
            <Eyebrow>Recent Chats</Eyebrow>
            {chatSessions.map((s, i) => (
              <ChatRow
                key={s.id}
                label={s.label}
                starred={s.starred}
                active={activeChat === i}
                onClick={() => onChatSelect && onChatSelect(i)}
              />
            ))}
          </div>

          {/* ── Optional extra content (e.g. connectors widget) ── */}
          {(children || onConnectorsClick) && (
            <div style={{ width: "100%", flexShrink: 0, padding: "6px 10px 8px", boxSizing: "border-box" }}>
              {children || (
                <ConnectorsWidget onClick={onConnectorsClick} />
              )}
            </div>
          )}
        </>
      ) : (
        /* ── Collapsed nav icons ── */
        <div style={{ width: "100%", flexShrink: 0, padding: "14px 8px 8px", display: "flex", flexDirection: "column", gap: 1, boxSizing: "border-box" }}>
          {navSections.map((n) => (
            <NavItem
              key={n.id}
              icon={n.icon}
              label={n.label}
              active={activeSection === n.id}
              collapsed
              onClick={() => onSectionChange && onSectionChange(activeSection === n.id ? null : n.id)}
            />
          ))}
        </div>
      )}

      {!open && <div style={{ flex: 1 }} />}

      {/* ── Footer ── */}
      <div
        style={{
          width: "100%",
          flexShrink: 0,
          borderTop: `1px solid ${T.border}`,
          padding: open ? "10px 12px 14px" : "10px 0 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {open ? (
          <>
            {/* Avatar + name */}
            <div
              onClick={onAvatarClick}
              style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: T.surfaceMd,
                  border: `1px solid ${T.borderDk}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Ph name="user" size={15} color="var(--icon-default)" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: T.fontBody, fontSize: 13, fontWeight: 500, color: T.textPrimary, lineHeight: 1 }}>
                  {userName}
                </span>
                <span style={{ fontFamily: T.fontBody, fontSize: 11, color: T.textMuted, lineHeight: 1.4 }}>
                  {userPlan}
                </span>
              </div>
            </div>

            {/* Action icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <FooterIconButton icon="bell" onClick={onBellClick} badge={unreadCount} />
              <FooterIconButton icon="gear" onClick={onSettingsClick} />
            </div>
          </>
        ) : (
          /* Collapsed avatar */
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: T.surfaceMd,
                border: `1px solid ${T.borderDk}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ph name="user" size={14} color="var(--icon-default)" />
            </div>
            {unreadCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "var(--icon-accent)",
                  border: `2px solid ${T.surface}`,
                }}
              />
            )}
          </div>
        )}
      </div>
    </aside>
  );
}

// ── Helper sub-components ───────────────────────────────────────────

/** Small icon button used in the footer (bell, gear) */
function FooterIconButton({ icon, onClick, badge }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? T.surfaceLt : "none",
        border: "none",
        cursor: "pointer",
        padding: 5,
        borderRadius: T.radiusMd,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.12s",
      }}
    >
      <Ph name={icon} size={16} color="var(--icon-muted)" />
      {badge > 0 && (
        <span
          style={{
            position: "absolute",
            top: 2,
            right: 2,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "var(--icon-accent)",
            color: "#fff",
            fontFamily: T.fontDisplay,
            fontSize: 8,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: 0,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

/** Default connectors widget shown when no children are passed */
function ConnectorsWidget({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? T.borderDk : T.border}`,
        borderRadius: T.radiusLg,
        background: T.surfaceLt,
        padding: 8,
        cursor: "pointer",
        transition: "border-color 0.15s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <span
          style={{
            fontFamily: T.fontDisplay,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: T.textMuted,
          }}
        >
          Connectors
        </span>
        <Ph name="plus" size={14} color={T.textMuted} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Stacked avatar dots — placeholder circles */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: i === 2 ? "#16A34A" : "#fff",
              border: `1.5px solid ${T.surfaceLt}`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.10)",
              marginLeft: i > 0 ? -6 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3 - i,
              position: "relative",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === 2 ? "#fff" : T.borderDk,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Named exports for granular imports ───────────────────────────────

export { HumLogo, HumLogoIcon, NavItem, Ph };
