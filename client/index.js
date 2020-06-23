import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';

// uncomment so that webpack can bundle styles

import "./scss/main.scss";

render(
  <App />,
  document.getElementById('root')
);
