import React, { Component } from 'react';
import { request } from '../../utils/axios';
import { withRouter } from 'react-router'

import '../../style/forgotPassword.css'

class ForgotPassword extends Component {
  state = {
    email: '',
  }
  
  handleEmailChange = event => { this.setState({ email: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();
      request.post('/forgot', { email: this.state.email })
    .then(res => {
      this.props.history.push(`/forgot/reset/${this.props.match.params.userId}`)
    })
    .catch(function (err) {
      console.log(err.response);
    });
  }

  render() {
    return (
      <div id="login-box">
        <div className="left">
          <span className="form-reset">Reset your password</span>
          <h5>It happens to the best of us. Enter your email and we'll send you reset instructions.</h5>
          <form className="form-group-in" onSubmit={this.handleSubmit}>
            <label className="input-email">
              <input placeholder="Email" value={this.state.email} className="form-control inline-input" type="email" name="email" onChange={this.handleEmailChange} />
            </label>
            <button className="button-signin" type="submit" >Submit</button>
            </form>
        <div/>
        </div>
        <div className="right-in"></div> 
      </div>
    )
  }
}

export default withRouter(ForgotPassword);
