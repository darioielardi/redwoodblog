import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router';

interface BlogLayoutProps {}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth();

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <button onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Logout' : 'Login'}
              </button>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
