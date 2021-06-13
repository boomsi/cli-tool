import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './global.less';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter
  // basename="/index"
  >
    <App />
  </BrowserRouter>,
  mountNode
);
