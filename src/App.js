import React, {Component} from 'react'
import { Router, Route} from 'react-router-dom'

import Home from './components/navigation'
import LoginForm from './components/users/LoginForm'
import signUpForm from './components/users/signUpForm'
import TaskForm from './components/tasks/taskForm'
import TaskList from './components/tasks/taskList'
import TaskEdit from './components/tasks/taskEdit'
import TaskShow from './components/tasks/taskShow'
import MainPage from './components/mainPage'
import Linkedin from './components/users/signUpForm'
import ForgotPassword from './components/users/forgotPassword'
import ResetPassword from './components/users/resetPassword'
import UserShow from './components/users/profile'
import UserEdit from './components/users/edit_profile'

import history from './utils/history'

class App extends Component {
 render () {
    return (
      <Router history={history}>
        <div>
          <Home />
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signUp" component={signUpForm} />
          <Route path="/users/:userId/show" component={UserShow} /> 
          <Route path="/users/:userId/edit" component={UserEdit} />
          <Route path="/task" component={TaskForm} />
          <Route exact path="/tasks" component={TaskList} />
          <Route path="/tasks/:taskId/edit" component={TaskEdit} />
          <Route path="/tasks/:taskId/show" component={TaskShow} /> 
          <Route path="/auth/linkedin" component={Linkedin} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/reset/:userId" component={ResetPassword} />
        </div>
      </Router>
    );
  }
}
export default App;


