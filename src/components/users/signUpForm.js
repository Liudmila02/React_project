import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';


class signUpForm extends React.Component {
    
    render() {
      let { user } = this.props;
      return (
        <form>
          <Field model="user.first_name">
            <label>First name</label>
            <input type="text" />
          </Field>
          <Field model="user.last_name">
            <label>Last name</label>
            <input type="text" />
          </Field>
          <Field model="user.email">
            <label>Email</label>
            <input type="text" />
          </Field>
  
          <Field model="user.password">
            <label>Password</label>
            <input type="password" />
          </Field>
  
          <button>
            Sign up as { user.email }
          </button>
        </form>
      )
    }
  }
  
  const selector = (state) => ({ user: state.user });
  
  export default connect(selector)(signUpForm);
  