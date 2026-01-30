import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import posts from './posts';

function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main>
        <div className="title">
          <h1><Link to="/">Ashish Selvaraj</Link></h1>
        </div>
        <div className="main-text">
          <p>Post not found. <Link to="/writing">Back to writing</Link></p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h1><Link to="/">Ashish Selvaraj</Link></h1>
      </div>
      <div className="main-text">
        <p className="post-nav"><Link to="/writing">Writing</Link></p>
        <b>{post.title}</b>
        <p className="post-date">{post.date}</p>
        <div className="post-content">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </main>
  );
}

export default Post;
