import { render, screen } from '@redwoodjs/testing';
import { Empty, Failure, Loading, Success } from './BlogPostsCell';
import { standard } from './BlogPostsCell.mock';

describe('BlogPostsCell', () => {
  test('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });

  test('Empty renders successfully', async () => {
    expect(() => {
      render(<Empty />);
    }).not.toThrow();
  });

  test('Failure renders successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />);
    }).not.toThrow();
  });

  test('Success renders successfully', async () => {
    const posts = standard().posts;
    render(<Success posts={posts} />);

    posts.forEach((post) => {
      const truncatedBody = post.body.substring(0, 10);
      const regex = new RegExp(`${truncatedBody}.*\.{3}`);

      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.queryByText(post.body)).not.toBeInTheDocument();
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });
});
