import React from 'react'
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

function Layout() {
  return (
    <div>
      <nav><Navbar/></nav>
      <main><Main/></main>
      <footer><Footer/></footer>
    </div>
  )
};

export default Layout;