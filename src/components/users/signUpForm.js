import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class signUpForm extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="first_name"
          component="input"
          type="text"
          placeholder="First name"
        />
        <Field
          name="last_name"
          component="input"
          type="text"
          placeholder="Last name"
        />
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

signUpForm = reduxForm ({
  form: 'signUp',
}) (signUpForm);

export default signUpForm;