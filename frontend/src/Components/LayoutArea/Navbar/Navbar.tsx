import React from 'react';
import NavLogo from "./NavComponents/NavLogo/NavLogo";
import NavMain from './NavComponents/NavMain/NavMain';

function Navbar() {
  return (
    <div>
        <NavLogo></NavLogo>
        <NavMain></NavMain>
    </div>
  )
}

export default Navbar