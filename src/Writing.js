import { Link } from 'react-router-dom';
import posts from './posts';

function Writing() {
  return (
    <main>
      <div className="title">
        <h1><Link to="/">Ashish Selvaraj</Link></h1>
      </div>
      <div className="main-text">
        <b>Writing</b>
        {posts.length === 0 ? (
          <p>Nothing here yet.</p>
        ) : (
          <ul className="post-list">
            {posts.map(post => (
              <li key={post.slug}>
                <Link to={`/writing/${post.slug}`}>{post.title}</Link>
                <span className="post-date">{post.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Writing;
