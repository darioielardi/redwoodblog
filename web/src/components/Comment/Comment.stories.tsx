import Comment from './Comment';

const COMMENT = {
  name: 'Rob Cameron',
  body: 'This is the first comment!',
  createdAt: '2020-01-01T12:34:56Z',
};

export const generated = () => {
  return <Comment comment={COMMENT} />;
};

export default { title: 'Components/Comment' };
