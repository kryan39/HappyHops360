import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Landing from "./components/Landing";
import Neighborhoods from "./components/Neighborhoods"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/neighborhoods' component={Neighborhoods} />
        </Switch>
      </div>
    );
  }
}

export default App;
