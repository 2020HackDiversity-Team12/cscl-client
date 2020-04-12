import React from 'react';
import { withRouter } from "react-router-dom"
import './App.css';

function App(props) {
  return (
    <React.Fragment>
      <div className="uk-dark">
        {props.children}
      </div>
    </React.Fragment >
  );
}

export default withRouter(App);
