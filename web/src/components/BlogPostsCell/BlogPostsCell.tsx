import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web';
import type { Posts } from 'types/graphql';

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ posts }: CellSuccessProps<Posts>) => {
  return (
    <>
      {posts.map((post) => {
        return <article key={post.id}>
          <header>
            <h2>{post.title}</h2>
          </header>
          <p>{post.body}</p>
          <div>Posted at: {post.createdAt}</div>
        </article>;
      })}
    </>
  );
};
