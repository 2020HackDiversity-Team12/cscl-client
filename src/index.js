import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

// import 3rd Party Lib
import "uikit/dist/css/uikit.min.css";
import Uikit from "uikit/dist/js/uikit.min.js";
import Icons from 'uikit/dist/js/uikit-icons';
Uikit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);