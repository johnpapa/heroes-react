import { Link, Router } from '@reach/router';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import Header from './Header';
import Heroes from './heroes/Heroes';
import List from './containers/List';
import './styles.scss';

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

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="section">
          <div className="columns">
            <aside className="column is-2">
              <nav className="menu">
                <p className="menu-label">Menu</p>
                <ul className="menu-list">
                  {/* <li><a className="is-active">Heroes</a></li> */}
                  <NavLink to="heroes">Heroes</NavLink>
                  <NavLink to="villains">Villains</NavLink>
                  <NavLink to="about">About</NavLink>
                </ul>
              </nav>
            </aside>

            <main className="column">
              <Router>
                <Heroes path="/heroes" />
                <List path="/villains" />
              </Router>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
