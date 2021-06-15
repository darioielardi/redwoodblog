import { render } from '@redwoodjs/testing';
import { Empty, Failure, Loading, Success } from './BlogPostsCell';
import { standard } from './BlogPostsCell.mock';

describe('BlogPostsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />);
    }).not.toThrow();
  });

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />);
    }).not.toThrow();
  });

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success posts={standard().posts} />);
    }).not.toThrow();
  });
});
