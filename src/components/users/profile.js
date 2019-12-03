import React from 'react';
import { request } from '../../utils/axios';
import { withRouter } from "react-router";

import '../../style/showTask.css';

class UserShow extends React.Component {
  state = {
    Profile: null
  }   

  componentDidMount() {
    request.get(`/api/users/${this.props.match.params.userId}`)
      .then(res => {
        this.setState({
          Profile: res.data.user
        })
      })
      .catch((err) =>{
        if (err.response.status === 401){
          this.props.history.push('/login')
        }
      });
  }
  
  render() {
    return (
      <div className="border-show">
        <div className="show-task">
        {this.state.Profile && 
          <div> 
            <div id="username"> Username: {this.state.Profile.username}</div>
            <div id="Fname"> First name: {this.state.Profile.first_name}</div>
            <div id="Lname"> Last name: {this.state.Profile.last_name}</div>
            <div id="email"> Email: {this.state.Profile.email}</div>
            <div id="password"> Password: {this.state.Profile.password}</div>
          </div>
        }
        <button type="button" className="btn btn-info btn-rounded" onClick={()=> this.props.history.push('/')}>Back</button> 
        </div>
      </div>
    );
  }
}
export default withRouter(UserShow);
