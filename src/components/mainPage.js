import React from 'react'
import { request } from '../utils/axios'
import nav from '../utils/nav'
import { withRouter } from "react-router";

import '../style/mainPage.css'

class MainPage extends React.Component {
    
render(){
  return (
    <nav>
      <div className="main-page">
        <h2>Welcome to task management system!</h2>
        <h3>Do you want to create a task management system for yourself? Then sign up or sign in to your account and create your own tasks.
          You will be able to specify the due date and select the priority of the task.</h3>
        <ul>
          <li>
            <button type="button" className="btn btn-outline-primary" onClick={()=> this.props.history.push('/signUp')}>Sign up</button>
          </li>
          <li>
            <button type="button" className="btn btn-outline-primary" onClick={()=> this.props.history.push('/login')}>Login</button>
          </li>
        </ul>
      </div>
    </nav> 
  )
}
}
export default withRouter(MainPage);