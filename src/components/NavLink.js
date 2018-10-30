import { Link } from '@reach/router';
import React from 'react';

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

export default NavLink;
