// src/components/PostList.js
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
