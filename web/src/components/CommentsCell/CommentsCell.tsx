import type { CellFailureProps } from '@redwoodjs/web';
import Comment from 'src/components/Comment';

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => (
  <div className="text-center text-gray-500">No comments yet</div>
);

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ comments }) => {
  return (
    <div className="-mt-8">
      {comments.map((item) => {
        return (
          <div key={item.id} className="mt-8">
            <Comment comment={item} />
          </div>
        );
      })}
    </div>
  );
};
