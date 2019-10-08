
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../style/nav.css'

import LoginForm from './users/LoginForm'
import signUpForm from './users/signUpForm'
import taskForm from './tasks/taskForm'
import TaskList from './tasks/taskList'

import { request } from '../utils/axios'

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
      path: "/task",
      component: taskForm,
    },
    {
      path: "/tasks",
      component: TaskList,
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
 const submit = () => {
    request.get('/signout')
    .then((user, error) => {
     window.location.href='/login'
    });
  };

  return (
    <nav className="justify-content-center">
    {/* <Router> */}
      <div>
        <ul>
          <h4>Task management system</h4>
          <li>
            <Link to="/signUp">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <button onClick={()=> submit()}>Sign out </button>
          </li>
          <li>
            <Link to="/task">New task</Link>
          </li>
          <li>
            <Link to="/tasks">List task</Link>
          </li>
          <li><button>Sort</button></li>

        </ul>

        {/* {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))} */}
      </div>
    {/* </Router> */}
    </nav>
  );
}

export default RouteConfigExample;

// class SignUp extends Component {
//   submit = values => {
//          window.alert (JSON.stringify (values));
//       };
//       render () {
//         return (
//          <Fragment>
//            <h1>SignUp</h1>
//               <signUpForm onSubmit={this.submit} />
//          </Fragment>
//         );
//       }      
// }
// class Login extends Component {
//   submit = values => {
//     window.alert (JSON.stringify (values));
//   };
//       render () {
//         return (
//          <Fragment>
//            <h1>Login</h1>
//               <LoginForm onSubmit={this.submit}
//                initialValues={this.getInitialValues()} />
//          </Fragment>
//         );    
//       }
// }

// class Task extends Component {
//   submit = values => {
//     window.alert (JSON.stringify (values));
//   };
//     render () {
//       return (
//         <Fragment>
//           <h1>Create task</h1>
//           <taskForm onSubmit={this.submit} />
//         </Fragment>
//   );
// }
// }
// class  extends Component {
//   submit = values => {
//     window.alert (JSON.stringify (values));
//   };
//     render () {
//       return (
//         <Fragment>
//           <h1>List task</h1>
//           <TaskList onSubmit={this.submit} />
//         </Fragment>
//   );
// }
// }