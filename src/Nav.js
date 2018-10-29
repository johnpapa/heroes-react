import { Link } from '@reach/router';
import React, { Component } from 'react';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'activeLink' : ''
      };
    }}
  />
);

class Nav extends Component {
  render() {
    return (
      <nav className="column is-2 menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <NavLink to="heroes">Heroes</NavLink>
          <NavLink to="villains">Villains</NavLink>
          <NavLink to="about">About</NavLink>
        </ul>
      </nav>
    );
  }
}

export default Nav;
