import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home';
import Sitemap from './sitemap';
import PlacementCenter from './placement-center';
import Faculties from './faculties';
import Curriculum from './curriculum';

const App = () => (
  <div>
    <Home />
    <Sitemap />
    <PlacementCenter />
    <Faculties />
    <Curriculum />
  </div>
);

const rootApp = document.querySelector('#root');
ReactDOM.render(App, rootApp);
