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
      <div className="border-box">
        <p>Sign Up</p>
        <form className="form-group" onSubmit={this.handleSubmit}>
        <label className="title-input">
          Username:
          <input value={this.state.username} className="form-control inline-input" required type="text" name="username" id="username" onChange={this.handleUserNameChange} />
        </label>
        <label className="title-input">
          First name:
          <input value={this.state.first_name} className="form-control inline-input" required type="text" name="first_name" id="Fname" onChange={this.handleFirsNameChange} />
        </label>
        <label className="form-control inline-input" className="title-input">
          Last name:
          <input value={this.state.last_name} className="form-control inline-input" required type="text" name="last_name" id="Lname" onChange={this.handleLastNameChange} />
        </label>
        <label className="title-input">
          Email:
          <input value={this.state.email} className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
        </label>
        <label className="title-input">
          Password:
          <input value={this.state.password} className="form-control inline-input" required type="password" name="password" onChange={this.handlePasswordChange} />
        </label>
        <button className="btn-gradient btn-color-3" type="submit" >Sign up</button>
        </form>
      </div>
    )
  }
}

export default withRouter(signUpForm);
