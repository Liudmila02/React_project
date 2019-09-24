import React, {Component} from 'react';
//import { Field, reduxForm} from 'redux-form';
import axios from 'axios'

export default class signUpForm extends Component {
  state = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  handleChange = event => {
    this.setState({ first_name: event.target.value });
    this.setState({ last_name: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();

    const users = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:4000/api/users', {users})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First_name:
            <input type="text" name="first_name" onChange={this.handleChange} />
            Last_name:
            <input type="text" name="last_name" onChange={this.handleChange} />
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
            Password:
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

//   render () {
//     const {handleSubmit} = this.props;
//     return (
//       <form onSubmit={handleSubmit}>
//         <Field
//           name="first_name"
//           component="input"
//           type="text"
//           placeholder="First name"
//         />
//         <Field
//           name="last_name"
//           component="input"
//           type="text"
//           placeholder="Last name"
//         />
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

// signUpForm = reduxForm ({
//   form: 'signUp',
// }) (signUpForm);

// export default signUpForm;