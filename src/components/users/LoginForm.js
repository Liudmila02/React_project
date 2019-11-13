import React, {Component} from 'react';
import {request} from '../../utils/axios';
import { withRouter } from 'react-router'

import '../../style/loginForm.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }
  handleEmailChange = event => { this.setState({ email: event.target.value })}
  handlePasswordChange = event => {this.setState({ password: event.target.value })}
  

  handleSubmit = event => {
    event.preventDefault();

    request.post('/api/login', { email: this.state.email, password: this.state.password })
    .then(res => {
      console.log('history')
      this.props.history.push('/tasks')
    })
    .catch(function (err) {
      console.log(err.response);
    });
}

  render() {
    return (
      <div className="border-gradient-box">
        <p>Login</p>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label className="title-input">
            Email:
            <input value={this.state.email} className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
          </label>
          <label className="title-input">
            Password:
            <input value={this.state.password} className="form-control inline-input" type="password" name="password" onChange={this.handlePasswordChange} />
          </label>
          <button className="btn-btn-gradient btn-color-3" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);
