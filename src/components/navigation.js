import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { request } from '../utils/axios'

import '../style/nav.css'

class SignOut extends Component {
  submit = () => {
    request.get('/signout')
    .then((user, error) => {
      this.setState({ redirect: true })
    });
  }; 
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
      <ul className="navbar navbar-expand-sm bg-dark navbar-dark">
        <h4 className="logo">Task management system</h4>
        {/* { ! ? (<button className="btn btn-light" onClick={()=> 
        submit()}>
          Sign out 
          </button>) : undefined  } */}
        <button className="btn btn-light" onClick={()=> submit()}>Sign out </button>
      </ul> 
    </nav>
  )
}

export default RouteConfigExample;
