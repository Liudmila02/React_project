import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {validate} from '../../validation/index';

import axios from 'axios';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`http://localhost:4000/api/user`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" email="email" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" password="password" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
}

//   render () {
//    const {handleSubmit} = this.props;
//     return (
//       <form onSubmit={handleSubmit}>
//         <Field
//           name="email"
//           component="input"
//           type="email"
//           placeholder="Email"
//         />
//         <Field
//           name="password"
//           component="input"
//           type="password"
//           placeholder="Password"
//         />
//         <button type="submit" label="submit">Submit</button>
//       </form>
//     );
//   }
// }

LoginForm = reduxForm ({
  form: 'login',
  validate,
}) (LoginForm);

