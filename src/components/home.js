import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoginForm from './users/LoginForm'
import signUpForm from './users/signUpForm'
import taskForm from './tasks/taskForm'

class SignUp extends Component {
  submit = values => {
         window.alert (JSON.stringify (values));
      };
      render () {
  return (
         <Fragment>
           <h1>SignUp</h1>
              <signUpForm onSubmit={this.submit} />
         </Fragment>
  );
  }      
}
class Login extends Component {
  submit = values => {
    window.alert (JSON.stringify (values));
      };
      render () {
  return (
         <Fragment>
           <h1>Login</h1>
              <LoginForm onSubmit={this.submit}
               initialValues={this.getInitialValues()} />
         </Fragment>
  );
      
}
}
class Task extends Component {
  submit = values => {
         window.alert (JSON.stringify (values));
      };
      render () {
  return (
         <Fragment>
           <h1>Create task</h1>
           <taskForm onSubmit={this.submit} />
         </Fragment>
  );
      
}
}
function SignOut() {
  return <h2>SignOut</h2>;
}
const routes = [
    {
      path: "/signUp",
      component: signUpForm
    },
    {
      path: "/login",
      component: LoginForm,
    },
    {
      path: "/signOut",
      component: SignOut,
    },
    {
      path: "/tasks/:id",
      component: taskForm,
    },
  ]
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
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/signUp">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signOut">Sign out</Link>
          </li>
          <li>
            <Link to="/tasks/id">New task</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfigExample;
