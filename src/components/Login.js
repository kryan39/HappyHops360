import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/Fire';
import 'bulma/css/bulma.css';
import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      registerrror: null
    }
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }


  handleErrorMsg(error) {
    switch(error.message) {
      case "The email address is badly formatted.":
        return {
          email: "is-danger",
          password: "is-info",
          registerError: error.message
        }
      case "There is no user record corresponding to this identifier. The user may have been deleted.":
        return {
          email: "is-danger",
          password: "is-info",
          registerError: "No User found"
        }
      case "The password is invalid or the user does not have a password.":
        return {
          password: "is-danger",
          email: "is-info",
          registerError: "Invalid Password"
        }
      default:
        return {
          password: "",
          email: "",
          registerError: error.message
        }
    }
  }


  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      console.log(error);
      this.setState(this.handleErrorMsg(error));
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
        this.setState(this.handleErrorMsg(error));
      })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return(
      <div className="login">
        <form action="">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input value={this.state.email} onChange={this.handleChange} className="input" name="email" type="email" placeholder="Email"/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              {
                 this.state.email === "is-danger" &&
                 <span className="icon is-medium is-right">
                  <i className="fa fa-exclamation-triangle"></i>
                  </span>
                        }
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input value={this.state.password} onChange={this.handleChange} className="input" name="password" type="password" placeholder="Password"/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              {
                  this.state.password === "is-danger" &&
                  <span className="icon is-medium is-right">
                  <i className="fa fa-exclamation-triangle"></i>
                  </span>
                        }
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button onClick={this.login} className="button is-primary is-inverted">
                Login
              </button>
            </p>
          </div>
          <div className="signup">
            <p>Don't have an account?</p>
            <button onClick={this.signup} className="button is-primary is-inverted">Sign Up!</button>	
          </div>

        </form>
        {
           this.state.registerError &&
           <p className="help is-danger">Error: {this.state.registerError}</p>
                    }
      </div>
    )
  }
}

export default Login;
