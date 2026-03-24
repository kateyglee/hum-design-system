import ProgressBar from './ProgressBar';

export default {
  title: 'Indicators/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  render: () => <ProgressBar progress={65} />,
};

export const WithLabel = {
  render: () => (
    <ProgressBar
      progress={80}
      label="Compacting so we can keep humming..."
    />
  ),
};

export const Small = {
  render: () => (
    <ProgressBar size="sm" progress={45} label="Processing..." />
  ),
};

export const Complete = {
  render: () => <ProgressBar progress={100} label="Done" />,
};

export const AllStates = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ProgressBar progress={0} label="Starting..." />
      <ProgressBar progress={25} label="Fetching from GAM..." />
      <ProgressBar progress={50} label="Analyzing data..." />
      <ProgressBar progress={80} label="Compacting so we can keep humming..." />
      <ProgressBar progress={100} label="Complete" />
      <ProgressBar size="sm" progress={60} />
    </div>
  ),
};
