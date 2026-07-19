import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import posts from './posts';

function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!post) return;
    fetch(`/posts/${post.slug}.md`)
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(setContent)
      .catch(() => setContent('Failed to load post.'));
  }, [post]);

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
        <div className="post-content">
          <Markdown>{content}</Markdown>
          {content && <p className="post-sig">— Ashish</p>}
        </div>
        <p className="post-nav"><Link to="/">← Back</Link></p>
      </div>
    </main>
  );
}

export default Post;
