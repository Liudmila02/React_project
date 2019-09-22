import React, {Component, Fragment} from 'react';
import LoginForm from './components/users/LoginForm';

class App extends Component {
  
  submit = values => {
    window.alert (JSON.stringify (values));
  };
  
  render () {
    return (
      <Fragment>
        <h1>Login</h1>
        <LoginForm onSubmit={this.submit} />
      </Fragment>
    );
  }
}

export default App;