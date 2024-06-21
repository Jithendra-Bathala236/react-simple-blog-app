import React from 'react';
import BlogPost from './Blogpost';

const BlogList = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', author: 'Prabodh' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', author: 'Prabodh' },
  ];

  return (
    <section>
      {posts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} author={post.author} />
      ))}
    </section>
  );
};

export default BlogList;
