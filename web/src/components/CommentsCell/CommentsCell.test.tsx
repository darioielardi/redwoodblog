import { render, screen } from '@redwoodjs/testing';
import { Empty, Failure, Loading, Success } from './CommentsCell';
import { standard } from './CommentsCell.mock';

describe('CommentsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });

  describe('empty', () => {
    it('renders Empty successfully', async () => {
      expect(() => {
        render(<Empty />);
      }).not.toThrow();
    });

    it('renders empty with right message', () => {
      render(<Empty />);
      expect(screen.getByText('No comments yet')).toBeInTheDocument();
    });
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
    const comments = standard().comments;

    render(<Success comments={standard().comments} />);

    comments.forEach((comment) => {
      expect(screen.getByText(comment.body)).toBeInTheDocument();
    });
  });
});
