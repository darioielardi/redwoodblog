import CommentForm from './CommentForm';

export const generated = () => {
  mockGraphQLMutation('CreateCommentMutation', (vars, { ctx }) => {
    const id = parseInt((Math.random() * 1000).toFixed(0));
    ctx.delay(1000);

    return {
      comment: {
        id,
        name: vars.input.name,
        createdAt: new Date().toISOString(),
      },
    };
  });

  return (
    <div className="m-4">
      <CommentForm />
    </div>
  );
};

export default { title: 'Components/CommentForm' };
