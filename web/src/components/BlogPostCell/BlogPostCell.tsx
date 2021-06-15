import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web';
import React from 'react';
import type { FindBlogPostQuery } from 'types/graphql';
import BlogPost from '../BlogPost/BlogPost';

export const QUERY = gql`
  query FindBlogPostQuery($id: Int!) {
    post(id: $id) {
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

export const Success = ({ post }: CellSuccessProps<FindBlogPostQuery>) => {
  return <BlogPost post={post} />;
};
