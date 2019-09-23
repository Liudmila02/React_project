import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {validate} from '../../validation/index';

import {myInput} from '../Field/index'
class LoginForm extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={myInput}
          type="email"
          placeholder="Email"
        />
        <Field
          name="password"
          component={myInput}
          type="password"
          placeholder="Password"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

LoginForm = reduxForm ({
  form: 'login',
  validate,
}) (LoginForm);

export default LoginForm;