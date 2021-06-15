// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router';
import React from 'react';
import PostsLayout from 'src/layouts/PostsLayout';
import BlogLayout from './layouts/BlogLayout/BlogLayout';

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
          <Route path="/admin/posts" page={PostsPage} name="posts" />
        </Set>
      </Private>

      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
