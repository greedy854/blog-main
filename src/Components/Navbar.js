import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>My Blog</h1>
      <ul style={styles.navLinks}>
        <li><a href="#week1" style={styles.link}>Week 1</a></li>
        <li><a href="#week2" style={styles.link}>Week 2</a></li>
        <li><a href="#week3" style={styles.link}>Week 3</a></li>
        <li><a href="#week4" style={styles.link}>Week 4</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    color: '#fff',
  },
  title: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Navbar;
