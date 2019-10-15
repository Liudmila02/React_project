import React from 'react'
import { Link } from 'react-router-dom'

import '../style/mainPage.css'

function MainPage() {

return (
  <nav>
    <div className="main-page">
      <h2>Welcome to task management system!</h2>
      <h3>Do you want to create a task management system for yourself? Then sign up or sign in to your account and create your own tasks.
        You will be able to specify the due date and select the priority of the task.</h3>
      <ul>
        <li>
          <Link class="btn btn-primary btn-rounded" to="/signUp">Sign up</Link>
        </li>
        <li>
          <Link class="btn btn-outline-primary btn-rounded waves-effect" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav> 
  )
}
export default MainPage;