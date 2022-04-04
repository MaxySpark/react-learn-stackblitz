import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
