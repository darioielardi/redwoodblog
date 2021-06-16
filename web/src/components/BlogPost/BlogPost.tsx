import { Link, routes } from '@redwoodjs/router';
import React from 'react';
import CommentsCell from 'src/components/CommentsCell';
import { Post } from 'types/graphql';
import CommentForm from '../CommentForm/CommentForm';

interface BlogPostProps {
  post: Post;
  summary?: boolean;
}

const truncate = (text: string, length: number): string => {
  return text.substring(0, length) + '...';
};

const BlogPost: React.FC<BlogPostProps> = ({ post, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>

      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(post.body, 100) : post.body}
      </div>

      {!summary && (
        <div className="mt-16">
          <CommentForm postId={post.id} />
          <div className="mt-24">
            <CommentsCell />
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
