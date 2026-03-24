import AiFeedback from './AiFeedback';

export default {
  title: 'Button Group/AiFeedback',
  component: AiFeedback,
};

export const Default = {
  render: () => <AiFeedback />,
};

export const WithHandlers = {
  render: () => (
    <AiFeedback
      onVote={(dir) => console.log('Vote:', dir)}
      onCopy={() => console.log('Copied')}
      onRegenerate={() => console.log('Regenerate')}
    />
  ),
};
