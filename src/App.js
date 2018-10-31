import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';
import Heroes from './heroes/Heroes';
import Nav from './components/Nav';
import Villains from './villains/Villains';
import './styles.scss';
import 'bulma/css/bulma.css';

const NotFound = () => <h2>{`These aren't the bits you're looking for`}</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="section columns">
          <Nav />
          <main className="column">
            <Switch>
              <Redirect from="/" exact to="/heroes" />
              <Route path="/heroes" component={Heroes} />
              <Route exact path="/villains" component={Villains} />
              <Route exact path="**" component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
