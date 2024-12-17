// src/App.js
import React, { useState, useEffect } from 'react';
import PostList from './Components/PostList'; // Ensure correct path
import AddPost from './Components/AddPost';   // Ensure correct path
import Navbar from './Components/Navbar';    // Navbar component
import './App.css'; // Optional: Add styling for layout

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; // Fallback for local dev

const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from Vercel domain (replace with your actual Vercel domain)
const allowedOrigins = ['https://blog-main-bd8ewk4wx-greedy854s-projects.vercel.app'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST, PUT, DELETE',
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Your routes here, for example:
app.get('/posts', (req, res) => {
  // Your logic to fetch and return posts
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));


function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts on component mount
  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Function to add a new post
  const addPost = (post) => {
    fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((newPost) => {
        setPosts([...posts, newPost]);
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Blog Sections */}
      <div className="sections">
        <section id="week1">
          <h2>Week 1</h2>
          <p>This is the content for Week 1.</p>
        </section>

        <section id="week2">
          <h2>Week 2</h2>
          <p>This is the content for Week 2.</p>
        </section>

        <section id="week3">
          <h2>Week 3</h2>
          <p>This is the content for Week 3.</p>
        </section>

        <section id="week4">
          <h2>Week 4</h2>
          <p>This is the content for Week 4.</p>
        </section>
      </div>

      {/* Existing functionality */}
      <h1>My Blog Posts</h1>
      <AddPost addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
