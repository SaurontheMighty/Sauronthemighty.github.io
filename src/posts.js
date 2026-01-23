// Add new posts here - newest first
// Use template literals for markdown content

const posts = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2026-01-23',
    content: `
This is an example post. You can write in **markdown** here.

## Subheadings work

So do lists:
- Item one
- Item two
- Item three

And \`inline code\` or code blocks:

\`\`\`javascript
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`

Delete this post and add your own writing.
    `.trim()
  }
];

export default posts;
