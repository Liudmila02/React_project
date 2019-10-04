import React, {Component} from 'react'
import { Router, Route} from 'react-router-dom'

import Home from './components/navigation'
import LoginForm from './components/users/LoginForm'
import signUpForm from './components/users/signUpForm'
import TaskForm from './components/tasks/taskForm'
import TaskList from './components/tasks/taskList'
import TaskEdit from './components/tasks/taskEdit'
import TaskShow from './components/tasks/taskShow'
import history from './utils/history'

class App extends Component {
 render () {
    return (
      <Router history={history}>
        <div>
        <Home />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={signUpForm} />
        <Route path="/api/tasks" component={TaskForm} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/api/tasks/:taskId/edit" component={TaskEdit} />
        <Route path="/api/tasks/:taskId/show" component={TaskShow} />
        </div>
      </Router>
    );
  }
}
export default App;


