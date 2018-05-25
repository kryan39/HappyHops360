import React, { Component } from 'react';
//import {Switch, Route} from "react-router-dom"
import './App.css';
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import fire from "./config/Fire";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Layout/>) : (<Landing/>)}
      </div>
    );
  }
}

export default App;
