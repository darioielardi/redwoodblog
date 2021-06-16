// web/src/components/BlogPost/BlogPost.test.js

import { render, screen, waitFor } from '@redwoodjs/testing';
import { standard } from '../CommentsCell/CommentsCell.mock';
import BlogPost from './BlogPost';

const POST = {
  id: 1,
  title: 'First post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray.`,
  createdAt: new Date().toISOString(),
};

describe('BlogPost', () => {
  it('renders a blog post', () => {
    render(<BlogPost post={POST} />);

    expect(screen.getByText(POST.title)).toBeInTheDocument();
    expect(screen.getByText(POST.body)).toBeInTheDocument();
  });

  it('renders comments when displaying a full blog post', async () => {
    const comment = standard().comments[0];
    render(<BlogPost post={POST} />);

    await waitFor(() =>
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    );
  });

  it('renders a summary of a blog post', () => {
    render(<BlogPost post={POST} summary={true} />);

    expect(screen.getByText(POST.title)).toBeInTheDocument();
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument();
  });

  it('does not render comments when displaying a summary', async () => {
    const comment = standard().comments[0];
    render(<BlogPost post={POST} summary={true} />);

    await waitFor(() =>
      expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
    );
  });
});
