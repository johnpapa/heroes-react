import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HeaderBar, NavBar, NotFound } from './components';
import Heroes from './heroes/Heroes';
import Villains from './villains/Villains';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            <Switch>
              <Redirect from="/" exact to="/heroes" />
              <Route path="/heroes" component={Heroes} />
              <Route path="/villains" component={Villains} />
              <Route exact path="**" component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
