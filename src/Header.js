import React, { Component } from 'react';
import logo from './globe.png';

class Header extends Component {
  render() {
    return (
      <header className="">
        <nav
          className="navbar has-background-dark is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <span className="tour">TOUR</span>
              <span className="of">OF</span>
              <span className="heroes">HEROES</span>
            </a>
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
                  <a className="button is-primary">
                    <strong>Github</strong>
                  </a>
                  <a className="button is-light">JohnPapa.net</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
