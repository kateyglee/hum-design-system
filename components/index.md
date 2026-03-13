# Hum Design System — Component Library

Reference index for all UI components. Each component lives in its own subfolder under `components/`.

---

## Foundational

| Component | Variants | Status | Notes |
|---|---|---|---|
| Tokens | `dark.css`, `light.css` | Done | CSS custom properties for colors, spacing, radius, shadows, fonts |
| HumLogo | `HumLogo`, `HumLogoIcon` | Done | SVG logomark + wordmark combo. Accepts `size` prop |

## Primitives

| Component | Variants | Status | Notes |
|---|---|---|---|
| Button | `primary`, `outline`, `ghost`, `danger`, `sm`, `lg`, `icon` | Done | See `components/button/`. Light theme uses flat fill; dark uses gradient |
| Card | `card-light` (shadow), `card-dark` (border only) | Done | Inline in prototype. Uses `--surface` bg, `--radius-xl`, `--shadow-sm` in light |
| Badge / Tag | Status indicators (`success`, `error`, `warning`, `info`), plan badges (`Pro`) | Planned | Geist Mono 10px, all-caps, `--radius-full`, semantic border colors |

## Navigation

| Component | Variants | Status | Notes |
|---|---|---|---|
| Sidebar | Expanded (288px), collapsed (48px) | Planned | Cubic-bezier width transition. Houses logo, nav, connectors widget, user footer |
| NavItem | `default`, `hover`, `active` | Planned | Geist Mono 11px/500, uppercase. Active uses `--accent-dim` bg + `--text-accent` |

## Data

| Component | Variants | Status | Notes |
|---|---|---|---|
| DataTable | Sortable headers, hover rows, status cell coloring | Planned | Collapsed border, 9px uppercase headers, `--border` row dividers |

## Overlays

| Component | Variants | Status | Notes |
|---|---|---|---|
| Modal | Confirm dialog, destructive action pattern | Planned | `--radius-xl`, backdrop blur, `--shadow-xl` in light. Destructive variant has red CTA |
| Toast | Success, error, info with enter/exit animations | Planned | Slide-in-right + fade-out. Auto-dismiss after ~4.5s. Action button optional |
| NotificationPanel | Dropdown from bell icon, unread dot, dismiss per item | Planned | 320px wide, fixed position, `--shadow-lg`. Unread items get amber highlight |
| ContextMenu | Chat row actions (star, rename, delete) | Planned | Fixed position, `--radius-lg`, `--shadow-md`. Destructive items use `--text-error` |

## Chat

| Component | Variants | Status | Notes |
|---|---|---|---|
| ChatInput | With send button, pill shape, suggestion chips | Planned | `--radius-full`, Geist Mono 13px input, glassmorphism bg when inline |
| TypingIndicator | Animated dots + status label | Planned | 3-dot pulse animation (1.2s cycle), Geist Mono 10px uppercase label |
| ChatMessage | User bubble (right-aligned), AI response (left-aligned, with table/action blocks) | Planned | User: `--surface` bg, 72% max-width. AI: full-width, supports embedded DataTable |
