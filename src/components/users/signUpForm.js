import React, {Component} from 'react';
import axios from 'axios'
import { withRouter } from "react-router";

import '../../style/signUpForm.css'

class signUpForm extends Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  handleUserNameChange = event => {this.setState({ username: event.target.value })}
  handleFirsNameChange = event => {this.setState({ first_name: event.target.value })}
  handleLastNameChange = event => {this.setState({ last_name: event.target.value })}
  handleEmailChange = event => {this.setState({ email: event.target.value })}
  handlePasswordChange = event => {this.setState({ password: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:4000/api/users',
    { username: this.state.username, first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, password: this.state.password },)
    .then(res => {
      this.props.history.push('/')
    })
    .catch(function (err) {
    });
  }

  render() {
    return (
      <div id="signup-box">
        <div className="left">
        <span className="title-auth">Sign Up</span>
        <form className="form-group" onSubmit={this.handleSubmit}>
        <label className="title-input">
          <input placeholder="Username" value={this.state.username} className="form-control inline-input" required type="text" name="username" id="username" onChange={this.handleUserNameChange} />
        </label>
        <label className="title-input">
          <input placeholder="First name" value={this.state.first_name} className="form-control inline-input" required type="text" name="first_name" id="Fname" onChange={this.handleFirsNameChange} />
        </label>
        <label className="title-input">
          <input placeholder="Last name" value={this.state.last_name} className="form-control inline-input" required type="text" name="last_name" id="Lname" onChange={this.handleLastNameChange} />
        </label>
        <label className="title-input">
          <input placeholder="E-mail" value={this.state.email} className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
        </label>
        <label className="title-input">
          <input placeholder="Password" value={this.state.password} className="form-control inline-input" required type="password" name="password" onChange={this.handlePasswordChange} />
        </label>
        <button className="button-signin" type="submit" >Sign up</button>
        </form>
        </div>
        <div className="right">
          <span className="title-auth">Sign in with Social Network</span>
          <span class="loginwith">
        <a className="btn btn-block btn-social btn-linkedin" href="http://localhost:4000/auth/linkedin">
        <i className="fa fa-linkedin-square " ></i>
          Log in with LinkedIn</a></span>
          <span className="loginwith">
        <a  className="btn btn-block btn-social btn-github" href="http://localhost:4000/auth/github">
        <i className="fa fa-github"></i>
          Log in with GitHub</a></span>
        </div>
      </div>
    )
  }
}

export default withRouter(signUpForm);
