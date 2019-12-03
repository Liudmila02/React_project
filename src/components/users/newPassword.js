import React, {Component} from 'react';
import {request} from '../../utils/axios';
import { withRouter } from 'react-router'

import '../../style/newpassword.css'

class NewPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
  }
  handleChange = key => e => {
    this.setState({ [key]: e.target.value })
  }

  updatePassword = e => {
    e.preventDefault()
    const { password } = this.state
    request.put(`/forgot/reset/${this.props.match.params.token}`, { password })
    .then(res => {
      this.props.history.push('/')
    })
  }
  // updatePassword(updatedPassword){
  //   request({
  //     method:'put',
  //     url:`/forgot/reset/${this.props.match.params.id}/${this.props.match.params.token}`,
  //     data: updatedPassword
  //   }).then(response => {
  //     console.log(response.data);
  //     if (this.password == this.confirmPassword) {
  //       return this.props.history.push('/login')
  //     } else {
  //       console.log(response.err)
  //       return(response.err)
  //     }
      
  //   })
  //   .catch((err) =>{
  //   });
  // }
  
 
render() {
  return (
    <div id="login-box">
      <div className="left">
        <span className="title-auth">Change a password</span>
        <form className="form-group-in"  onSubmit={this.updatePassword}>
          <label className="title-input">
            <input placeholder="New password" value={this.state.password} className="form-control inline-input" type="password" name="password" onChange={this.handleChange("password")} />
          </label>
          <label className="title-input">
            <input placeholder="Confirm password" value={this.state.confirmPassword} className="form-control inline-input" type="password" name="password" onChange={this.handleChange("confirmPassword")} />
          </label>
          <button className="button-signin" type="submit">New a password</button>
          </form>
      <div/>
      </div>
      <div className="right-in"></div> 
    </div>
  )
}
}

export default withRouter(NewPassword);
