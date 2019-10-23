import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {validate} from '../../validation/index';
import axios from 'axios'

import '../../style/signUpForm.css'
import nav from '../../utils/nav';

export default class signUpForm extends Component {
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
      console.log(res);
      console.log(res.data);
      nav('/')
    })
    .catch(function (err) {
      console.log(err.response);
    });
}
  render() {
    return (
      <div className="border-box">
        <p>Sign Up</p>
        <form className="form-group" onSubmit={this.handleSubmit}>
        <label className="title-input">
            Username:
            <input className="form-control inline-input" required type="text" name="username" onChange={this.handleUserNameChange} />
            </label>
          <label className="title-input">
            First_name:
            <input className="form-control inline-input" required type="text" name="first_name" onChange={this.handleFirsNameChange} />
            </label>
            <label className="form-control inline-input" className="title-input">
            Last_name:
            <input className="form-control inline-input" required type="text" name="last_name" onChange={this.handleLastNameChange} />
            </label>
            <label className="title-input">
            Email:
            <input className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
            </label>
            <label className="title-input">
            Password:
            <input className="form-control inline-input" required type="password" name="password" onChange={this.handlePasswordChange} />
          </label>
          <button class="btn-gradient btn-color-3" type="submit">Sign up</button>
        </form>
      </div>
    )
  }
}
signUpForm = reduxForm ({
  form: 'login',
  validate,
}) (signUpForm);
