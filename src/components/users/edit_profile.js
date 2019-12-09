import React from "react";
import {request} from '../../utils/axios';
import { withRouter } from "react-router";
import '../../style/taskForm.css'

class UserEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      username:'',
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.getUserDetails();
  }

  getUserDetails(){
    let userId = this.props.match.params.userId;
    request.get(`/api/users/${userId}`)
      .then(response => {
        this.setState({
          id: response.data.user.id,
          username: response.data.user.username,
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          email: response.data.user.email,
          password: response.data.user.password,
        }, () => {
        })
      })
      .catch((err) =>{
        console.log(err)
        if (err.response.status === 401){
          this.props.history.push('/login')
        }
      });
  }

  editUser(newUser){
    request({
      method:'put',
      url:`/api/users/${this.props.match.params.userId}`,
      data: newUser
    }).then(response => {
      console.log(response.data);
      this.props.history.push('/')
    })
    .catch((err) =>{
    });
  }

  onSubmit(e){
    e.preventDefault()
    const newUser = {
      username: this.refs.username.value,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    this.editUser(newUser);
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
      <span className="title-auth">Edit Form</span>
        <form className="form-group" onSubmit={this.onSubmit.bind(this)}>
          
          <label className="title-input">
            <input  value={this.state.username} className="form-control inline-input" required type="file" name="image" id="image" ref="image"
            onChange={this.handleInputChange}  />
          </label>

          <label className="title-input">
            <input placeholder="Username" value={this.state.username} className="form-control inline-input" required type="text" name="username" id="username" ref="username"
            onChange={this.handleInputChange}  />
          </label>

          <label className="title-input">
            <input placeholder="First name" value={this.state.first_name} className="form-control inline-input" type="text" name="description" id="Fname" ref="first_name"  
            onChange={this.handleInputChange}  />
          </label>

          <label className="title-input">
            <input placeholder="Last name" value={this.state.first_name} className="form-control inline-input" required type="text" name="first_name" id="Lname" ref="last_name"
            onChange={this.handleInputChange}  />
          </label>

          <label className="title-input">
            <input placeholder="E-mail" value={this.state.email} className="form-control inline-input" type="email" name="email" ref="email"
            onChange={this.handleInputChange}  />
          </label>

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

export default withRouter(UserEdit)