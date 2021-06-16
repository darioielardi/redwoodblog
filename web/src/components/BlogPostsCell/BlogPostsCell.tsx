import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web';
import React from 'react';
import type { Posts } from 'types/graphql';
import BlogPost from '../BlogPost/BlogPost';

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
    <div className="space-y-10">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} summary />
      ))}
    </div>
  );
};
