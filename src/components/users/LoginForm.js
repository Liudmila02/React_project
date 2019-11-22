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
      <div id="login-box">
        <div className="left">
          <span className="title-auth">Log in</span>
          <form className="form-group-in" onSubmit={this.handleSubmit}>
            <label className="title-input">
              <input placeholder="Email" value={this.state.email} className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
            </label>
            <label className="title-input">
              <input placeholder="Password" value={this.state.password} className="form-control inline-input" type="password" name="password" onChange={this.handlePasswordChange} />
            </label>
            <button className="button-signin" type="submit">Login</button>
            </form>
        <div/>
        </div>
        <div className="right-in">
          <span className="title-auth">Log in with Social Network</span>
          <span class="loginwith-in">
            <a className="btn btn-block btn-social btn-linkedin-in" href="http://localhost:4000/auth/linkedin">
            <i className="fa fa-linkedin-square " ></i>
              Log in with LinkedIn</a></span>
          <span className="loginwith-in">
            <a className="btn btn-block btn-social btn-github-in" href="http://localhost:4000/auth/github">
            <i className="fa fa-github"></i>
              Log in with GitHub</a></span>
        </div> 
      </div>
    )
  }
}

export default withRouter(LoginForm);
