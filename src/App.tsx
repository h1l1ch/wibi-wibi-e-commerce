import React from 'react';
import {  BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import * as actions from "./store/actions/index";
import './App.css';
import MainPage from './MainPage'
import { auth } from "./firebase";

const App: React.FC = () => {

	return (
    <div className="App">
      <Switch>
        {/* <Route path="/checkout"/>
        <Route path="/checkout"/>
        <Route path="/checkout"/>
        <Route path="/checkout"/> */}
        <Route path="/" exact component={MainPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state?: number) => {
  return {

  }
}

const mapDispatchToProps = (dispatch?: number) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
