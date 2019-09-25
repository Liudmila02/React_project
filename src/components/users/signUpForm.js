import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {validate} from '../../validation/index';
import axios from 'axios'

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
    })
    .catch(function (err) {
      console.log(err.response);
    });
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
            Username:
            <input type="text" name="username" onChange={this.handleUserNameChange} />
            </label>
          <label>
            First_name:
            <input type="text" name="first_name" onChange={this.handleFirsNameChange} />
            </label>
            <label>
            Last_name:
            <input type="text" name="last_name" onChange={this.handleLastNameChange} />
            </label>
            <label>
            Email:
            <input type="text" name="email" onChange={this.handleEmailChange} />
            </label>
            <label>
            Password:
            <input type="text" name="password" onChange={this.handlePasswordChange} />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}
signUpForm = reduxForm ({
  form: 'login',
  validate,
}) (signUpForm);
