import { Router } from '@reach/router';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import Header from './Header';
import Heroes from './heroes/Heroes';
import List from './containers/List';
import Nav from './Nav';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="section columns">
          <Nav />
          <main className="column">
            <Router>
              <Heroes path="/heroes" />
              <List path="/villains" />
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
