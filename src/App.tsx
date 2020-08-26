import React from 'react';
import {  BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import * as actions from "./store/actions/index";
import './App.css';
import MainPage from './MainPage'
import ShoppingPage from './ShoppingPage'

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
        <Route path="/shopping-page" component={ShoppingPage}/>
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
