import React from 'react';
import { withRouter } from "react-router-dom"
import TopBar from "../components/TopBar";
import './App.css';
import AuthService from '../services/AuthService';


const handleLogout = (history) => {
  AuthService.logout()
  history.push("/");
}

function App(props) {
  return (
    <React.Fragment>
      <div className="uk-dark">
        <TopBar onLogout={() => { handleLogout(props.history) }} />
        {props.children}
      </div>
    </React.Fragment >
  );
}

export default withRouter(App);
