import React, { Component, lazy, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { HeaderBar, NavBar, NotFound } from './components';
import About from './About';

const Heroes = withRouter(
  lazy(() => import(/* webpackChunkName: "heroes" */ './heroes/Heroes'))
);
const Villains = withRouter(
  lazy(() => import(/* webpackChunkName: "villains" */ './villains/Villains'))
);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/heroes" />
                <Route path="/heroes" component={Heroes} />
                <Route path="/villains" component={Villains} />
                <Route path="/about" component={About} />
                <Route exact path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
