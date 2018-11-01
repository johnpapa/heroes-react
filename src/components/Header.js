import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="">
    <nav
      className="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab js-logo fa-react fa-2x" aria-hidden="true" />
        </a>
        <NavLink to="/" className="navbar-item nav-home">
          {/* <a className="navbar-item" href="/"> */}
          <span className="tour">TOUR</span>
          <span className="of">OF</span>
          <span className="heroes">HEROES</span>
        </NavLink>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                href="https://github.com/johnpapa/heroes-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com/john_papa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
