import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './home';
import Sitemap from './sitemap';
import PlacementCenter from './placement-center';
import Faculties from './faculties';
import Curriculum from './curriculum';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sitemap'>Sitemap</Link>
        </li>
        <li>
          <Link to='/placement'>PlacementCenter</Link>
        </li>
        <li>
          <Link to='/faculty-directory'>Faculties</Link>
        </li>
        <li>
          <Link to='/curriculum'>Curriculum</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sitemap' component={Sitemap} />
        <Route path='/placement' component={PlacementCenter} />
        <Route path='/faculty-directory' component={Faculties} />
        <Route path='/curriculum' component={Curriculum} />
      </Switch>
    </div>
  </Router>
);

const rootApp = document.getElementById('root');
ReactDOM.render(<App />, rootApp);
