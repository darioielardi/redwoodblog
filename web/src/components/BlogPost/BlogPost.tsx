import { Link, routes } from '@redwoodjs/router';
import React from 'react';
import { Post } from 'types/graphql';

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div>{post.body}</div>
    </article>
  );
};

export default BlogPost;
