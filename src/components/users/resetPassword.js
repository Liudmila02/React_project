import React from "react";
import {request} from '../../utils/axios';
import { withRouter } from "react-router";
import '../../style/taskForm.css'

class ResetPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  resetPassword(updatedPassword){
    request({
      method:'put',
      url:`/reset/${this.props.match.params.userId}`,
      data: updatedPassword
    }).then(response => {
      console.log(response.data);
      this.props.history.push('/')
      console.log('Update password')
    })
    .catch((err) =>{
    });
  }

  onSubmit(e){
    e.preventDefault()
    const updatedPassword = {
      password: this.refs.password.value,
    }
    this.resetPassword(updatedPassword);
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
 
  render() {
    return (
      <div id="signup-box">
      <div className="left">
      <span className="title-auth">New Password</span>
        <form className="form-group" onSubmit={this.onSubmit.bind(this)}>
          
            <label className="title-input">
            <input placeholder="Password" value={this.state.password} className="form-control inline-input" required type="password" name="password" ref="password"
            onChange={this.handleInputChange}  />
            </label>
          <button id="btnSave" className="button-signin" type="submit" value="Save" >Save</button>
        </form>
      </div>
      <div className="right"></div>
    </div>  
    )
  }
}

export default withRouter(ResetPassword)