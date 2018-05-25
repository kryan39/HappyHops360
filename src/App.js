import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/search' component={Layout} />
          <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;
