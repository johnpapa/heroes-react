import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import logo from './globe.png';
import Heroes from './heroes/Heroes';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div>

<header className="">
  <nav className="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logo} width="28" height="28"/>
      </a>
      <a className="navbar-item" href="/">
        Vikings
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          -- burger stuff --
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Github</strong>
            </a>
            <a className="button is-light">
              JohnPapa.net
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<div className="section">
  <div className="columns">
    <aside className="column is-2">
      <nav className="menu">
        <p className="menu-label">
          Menu
        </p>
        <ul className="menu-list">
          <li><a className="is-active">Heroes</a></li>
          <li><a>Villains</a></li>
          <li><a>About</a></li>
        </ul>
      </nav>
    </aside>


    <Heroes></Heroes>
  </div>
</div>
</div>
    );
  }
}

export default App;
