import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/home'
import LoginForm from './components/users/LoginForm'
import signUpForm from './components/users/signUpForm'
import CreateTask from './components/tasks/taskForm'



class App extends Component {
 render () {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={signUpForm} />
        <Route path="/tasks/:id" component={CreateTask} />
      </Router>
    );
  }
}

export default App;


