import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/heroes" className={({ isActive }) => isActive ? 'active-link' : ''}>
        Heroes
      </NavLink>
      <NavLink to="/villains" className={({ isActive }) => isActive ? 'active-link' : ''}>
        Villains
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
        About
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
