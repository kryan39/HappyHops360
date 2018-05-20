import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Landing from "./components/Landing";
import Layout from "./components/Layout"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/search' component={Layout} />
        </Switch>
      </div>
    );
  }
}

export default App;
