import React, { lazy, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderBar, NavBar, NotFound } from './components';
import About from './About';

const Heroes = lazy(() => import(/* webpackChunkName: "heroes" */ './heroes/Heroes'));
const Villains = lazy(() => import(/* webpackChunkName: "villains" */ './villains/Villains'));

function App() {
  return (
    <div>
      <HeaderBar />
      <div className="section columns">
        <NavBar />
        <main className="column">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/heroes" replace />} />
              <Route path="/heroes/*" element={<Heroes />} />
              <Route path="/villains/*" element={<Villains />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
