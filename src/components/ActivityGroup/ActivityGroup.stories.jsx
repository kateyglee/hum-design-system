import ActivityGroup, { ActivityStep, FileChip } from './ActivityGroup';

export default {
  title: 'Indicators/ActivityGroup',
  component: ActivityGroup,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

/* ── Simple sequence (1-2 steps, no wrapper) ────────────────────── */

export const SimpleSequence = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <ActivityStep type="thinking" description="Identified request to retrieve Hum brand skill file" />
      <ActivityStep type="action" icon="file-text" description="Reading Hum brand skill file" />
    </div>
  ),
};

/* ── Full conversation flow ─────────────────────────────────────── */

export const ConversationFlow = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Thinking */}
      <ActivityStep type="thinking" description="Thinking about runbook capabilities defined in the product requirements document" />

      {/* Multiple action steps — wrapped in collapsible */}
      <ActivityGroup label="Running command" loading>
        <ActivityStep type="action" icon="magnifying-glass" description="Search for runbook mentions in uploaded files">
          <FileChip>Script</FileChip>
        </ActivityStep>
        <ActivityStep type="action" icon="list-bullets" description="List uploaded files">
          <FileChip>Script</FileChip>
        </ActivityStep>
        <ActivityStep type="action" icon="magnifying-glass" description="Search transcript for runbook info from PRD">
          <FileChip>Script</FileChip>
        </ActivityStep>
      </ActivityGroup>
    </div>
  ),
};

/* ── Collapsible group (interactive controls) ───────────────────── */

export const Collapsible = {
  args: {
    label: "Running command",
    loading: false,
  },
  argTypes: {
    label: { control: 'text' },
    loading: { control: 'boolean' },
  },
  render: (args) => (
    <ActivityGroup {...args}>
      <ActivityStep type="action" icon="file-html" description="Minimal onboarding — stripped back, low density, progressive ...">
        <FileChip>hum-onboarding.html</FileChip>
      </ActivityStep>
      <ActivityStep type="action" icon="terminal-window" description="Running command">
        <FileChip>Script</FileChip>
      </ActivityStep>
    </ActivityGroup>
  ),
};

/* ── Step types ─────────────────────────────────────────────────── */

export const StepTypes = {
  args: {
    pulsing: true,
  },
  argTypes: {
    pulsing: { control: 'boolean', description: 'Animate pulsing text for processing state' },
  },
  render: ({ pulsing }) => {
    const status = pulsing ? "processing" : "finished";
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ActivityStep type="thinking" status={status} description="Humming..." />
        <ActivityStep type="action" status={status} icon="cloud-arrow-down" description="Fetching from GAM..." />
        <ActivityStep type="action" status={status} icon="terminal-window" description="Running command">
          <FileChip>Script</FileChip>
        </ActivityStep>
      </div>
    );
  },
};

/* ── FileChip variants ──────────────────────────────────────────── */

export const FileChips = {
  name: 'FileChip',
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <FileChip>Script</FileChip>
      <FileChip>hum-onboarding.html</FileChip>
      <FileChip>GAM API</FileChip>
      <FileChip>campaign-report.pdf</FileChip>
    </div>
  ),
};
