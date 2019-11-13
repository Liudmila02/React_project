import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react'
import { request } from '../utils/axios'
import { withRouter } from "react-router";

import '../style/nav.css'


class Navigation extends Component {

  taskList() {
    request.get('/api/tasks')
    .then((res) => {
      this.props.history.push('/tasks')
    }); 
  }
  signOut() {
    request.get('/signOut')
    .then((res) => {
      this.props.history.push('/login')
    }); 
  }

  render() {
    return (
      <nav>
        <ul className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="logo" href="http://localhost:3000">Task management system</a>
          <button id="taskList" className="btn-list" type="submit" onClick={()=>this.taskList()}>TaskList </button>
          <button id="signOut" className="btn btn-light" type="submit" onClick={()=>this.signOut()}>Sign Out </button>
        
        </ul> 
      </nav>
    )
  }  
}
export default withRouter(Navigation);
