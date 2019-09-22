import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function signUpForm(props) {
  return <h2>SignUp, { props.user }</h2>;
}

function LoginForm (props) {
  return <h2>Login, {props.user}</h2>;
}

function SignOut() {
  return <h2>SignOut</h2>;
}

function Home() {
  return <h2>Home</h2>;
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
    }
  ]

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
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
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfigExample;
