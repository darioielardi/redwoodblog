import React from 'react';
import BlogPostCell from 'src/components/BlogPostCell';

const BlogPostPage = ({ id }) => {
  return (
    <>
      <BlogPostCell id={id} />
    </>
  );
};

export default BlogPostPage;
