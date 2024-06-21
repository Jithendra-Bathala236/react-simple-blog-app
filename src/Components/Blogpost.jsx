import React from 'react';

const BlogPost = ({ title, content, author }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <p><em>By {author}</em></p>
    </article>
  );
};

export default BlogPost;
