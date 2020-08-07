import React from 'react';
import {  BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import * as actions from "./store/actions/index";
import './App.css';
import { auth } from "./firebase";

function App() {

	return (
    <div className="App">
      <Switch>
        <Route path="/checkout"/>
        <Route path="/checkout"/>
        <Route path="/checkout"/>
        <Route path="/checkout"/>
        <Route path="/checkout"/>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
