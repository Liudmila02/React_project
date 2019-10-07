import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {validate} from '../../validation/index';

import {request} from '../../utils/axios';
import nav from '../../utils/nav'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }
  handleEmailChange = event => {this.setState({ email: event.target.value })}
  handlePasswordChange = event => {this.setState({ password: event.target.value })}
  

  handleSubmit = event => {
    event.preventDefault();

    request.post('/api/login', { email: this.state.email, password: this.state.password })
    .then(res => {
      console.log(res);
      console.log(res);
      console.log('history')
      
      nav('/tasks')
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
          Email:
          <input type="text" email="email" onChange={this.handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="text" password="password" onChange={this.handlePasswordChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
}

LoginForm = reduxForm ({
  form: 'login',
  validate,
}) (LoginForm);

