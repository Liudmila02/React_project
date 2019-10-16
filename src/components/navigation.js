import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainPage  from './mainPage'
import { request } from '../utils/axios'

import '../style/nav.css'

class SignOut extends Component {
  submit = () => {
    request.get('/signout')
    .then((user, error) => {
      this.setState({ redirect: true })
    });
  };
    render () {
      return (
        <Fragment>
          <h1 onClick={()=> this.submit() }>Sign Out</h1>
        </Fragment>
      );    
    }
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function RouteConfigExample() {
 const submit = () => {
    request.get('/signout')
    .then((user, error) => {
     window.location.href='/login'
    });
  };

  return (
    <nav>
      <ul class="navbar navbar-expand-sm bg-dark navbar-dark">
        <h4 className="logo">Task management system</h4>
        <button class="btn btn-light" onClick={()=> submit()}>Sign out </button>
      </ul> 
    </nav>
   
     
    
       //<div className="main-page">
        // <h2>Welcome to task management system!</h2>
         //<h3>Do you want to create a task management system for yourself? Then sign up or sign in to your account and create your own tasks.
         // You will be able to specify the due date and select the priority of the task.</h3>

          //<ul><li>
             //<Link to="/signUp">Sign up</Link>
          // </li>
           //<li>
             //<Link to="/login">Login</Link>
           //</li></ul>
       // </div> 
 
  )
}
export default RouteConfigExample;

