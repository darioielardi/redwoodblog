import { Post } from '../../../types/graphql';
import BlogPost from './BlogPost';

const POST: Post = {
  id: 1,
  title: 'First Post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it
         enamel pin post-ironic vape cred DIY. Street art next level
         umami squid. Hammock hexagon glossier 8-bit banjo. Neutra
         la croix mixtape echo park four loko semiotics kitsch forage
         chambray. Semiotics salvia selfies jianbing hella shaman.
         Letterpress helvetica vaporware cronut, shaman butcher YOLO
         poke fixie hoodie gentrify woke heirloom.`,
  createdAt: new Date().toISOString(),
};

export const full = () => {
  return <BlogPost post={POST} />;
};

export const summary = () => {
  return <BlogPost post={POST} summary />;
};

export default { title: 'Components/BlogPost' };
