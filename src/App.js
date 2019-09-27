import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/home'
import LoginForm from './components/users/LoginForm'
import signUpForm from './components/users/signUpForm'
import TaskForm from './components/tasks/taskForm'
import SignOutForm from './components/users/signOut'
import TaskList from './components/tasks/taskList'


class App extends Component {
 render () {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={signUpForm} />
        <Route path="/api/tasks" component={TaskForm} />
        <Route path="/signout" component={SignOutForm} />
        <Route path="/tasks" component={TaskList} />
      </Router>
    );
  }
}

export default App;


