import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Indicators/LoadingSpinner',
  component: LoadingSpinner,
};

export const Default = {
  render: () => <LoadingSpinner />,
};

export const Small = {
  render: () => <LoadingSpinner size="sm" />,
};

export const Large = {
  render: () => <LoadingSpinner size="lg" />,
};

export const AllSizes = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
    </div>
  ),
};
