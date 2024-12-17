// src/components/PostList.js
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Blog Posts</h2>
      {posts.length === 0 ? (
        <p style={styles.noPosts}>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} style={styles.post}>
            <h3 style={styles.title}>{post.title}</h3>
            <p style={styles.content}>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2rem auto',
    maxWidth: '800px',
    padding: '1rem',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
  },
  noPosts: {
    color: '#666',
    fontSize: '1.2rem',
  },
  post: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.75rem',
  },
  content: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
  },  post: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  postHover: {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },

};

export default PostList;
