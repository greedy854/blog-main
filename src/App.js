// src/App.js
import React, { useState, useEffect } from 'react';
import PostList from './Components/PostList';  // Ensure correct case and file path
import AddPost from './Components/AddPost';    // Ensure correct case and file path

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const addPost = (post) => {
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(newPost => {
        setPosts([...posts, newPost]);
      });
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <AddPost addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
