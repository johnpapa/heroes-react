import React from 'react';
import NavLink from './NavLink';

const Nav = props => (
      <nav className="column is-2 menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <NavLink to="heroes">Heroes</NavLink>
          <NavLink to="villains">Villains</NavLink>
          <NavLink to="about">About</NavLink>
        </ul>
        {props.children}
      </nav>
    );

export default Nav;
