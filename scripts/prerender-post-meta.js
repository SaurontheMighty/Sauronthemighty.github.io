// Runs after `npm run build` (see "postbuild" in package.json).
// Social crawlers don't execute JS, and GitHub Pages serves post URLs via the
// 404.html redirect — so link previews only work if each post URL has a real
// HTML file with its own Open Graph tags. This copies build/index.html to
// build/writing/<slug>/index.html with per-post tags injected.

const fs = require('fs');
const path = require('path');

const SITE = 'https://www.ashishselvaraj.com';
const buildDir = path.join(__dirname, '..', 'build');

// posts.js is an ES module; extract the array literal and evaluate it.
const postsSource = fs.readFileSync(path.join(__dirname, '..', 'src', 'posts.js'), 'utf8');
const arrayLiteral = postsSource.slice(postsSource.indexOf('['), postsSource.lastIndexOf(']') + 1);
const posts = new Function(`return ${arrayLiteral}`)();

const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

for (const post of posts) {
  if (post.external) continue;

  const url = `${SITE}/writing/${post.slug}`;
  const tags = [
    `<meta property="og:title" content="${escapeHtml(post.title)}"/>`,
    `<meta property="og:type" content="article"/>`,
    `<meta property="og:url" content="${url}"/>`,
  ];
  if (post.image) {
    tags.push(
      `<meta property="og:image" content="${SITE}${post.image}"/>`,
      `<meta name="twitter:card" content="summary_large_image"/>`,
      `<meta name="twitter:image" content="${SITE}${post.image}"/>`
    );
  }

  // Replace the site-wide og:title/og:type/og:url from public/index.html so
  // crawlers (which read the first occurrence) see the post's values.
  let html = template
    .replace(/<meta property="og:title" content="[^"]*"\/?>/, '')
    .replace(/<meta property="og:type" content="[^"]*"\/?>/, '')
    .replace(/<meta property="og:url" content="[^"]*"\/?>/, '')
    .replace('</head>', `${tags.join('')}</head>`);

  const dir = path.join(buildDir, 'writing', post.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`prerendered meta: /writing/${post.slug}${post.image ? ` (image: ${post.image})` : ''}`);
}
