import React from 'react';
import { withRouter } from "react-router-dom"
import './App.css';

function App(props) {
  return (
    <React.Fragment>
      <div>
        {props.children}
      </div>
    </React.Fragment >
  );
}

export default withRouter(App);
