import React, { Suspense }  from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import constants from './utils/constants';

const Login = React.lazy(() => import('./components/LoginPage'));
const Main = React.lazy(() => import('./components/MainPage'));
const Preferences = React.lazy(() => import('./components/PreferencesPage'));


function App() {
  const { url } = constants;
  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to={url.LOGIN}>Login</Link>
                  </li>
                  <li>
                    <Link to={url.MAIN}>Main</Link>
                  </li>
                  <li>
                    <Link to={url.PREFERENCES}>Preferences</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Switch>
              <Route path={url.LOGIN}>
                <Login/>
              </Route>
              <Route path={url.MAIN}>
                <Main/>
              </Route>
              <Route path={url.PREFERENCES}>
                <Preferences/>
              </Route>
            </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
