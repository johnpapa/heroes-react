import React from 'react';
import HeaderBarBrand from './HeaderBarBrand';
import HeaderBarLinks from './HeaderBarLinks';

const HeaderBar = () => (
  <header>
    <nav
      className="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand />
      <HeaderBarLinks />
    </nav>
  </header>
);

export default HeaderBar;
