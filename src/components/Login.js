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
      password: ''
    }
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      console.log(error);
    });
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
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input value={this.state.password} onChange={this.handleChange} className="input" name="password" type="password" placeholder="Password"/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
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
            <Link className="button is-primary is-inverted is-outlined" to="/signup">Sign Up!</Link>	
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
