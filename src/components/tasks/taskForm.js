import React, {Component} from 'react';
//import {Field, reduxForm} from 'redux-form';

import axios from 'axios'

export default class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    priority: '',
    due_date: '',
    completed: ''
  }

  handleTitleChange = event => {this.setState({ title: event.target.value })}
  handleDescriptionChange = event => {this.setState({ description: event.target.value })}
  handlePriorityChange = event => {this.setState({ priority: event.target.value })}
  handleDueDateChange = event => {this.setState({ due_date: event.target.value })}
  handleCompletedChange = event => {this.setState({ completed: event.target.value })}
  
  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:4000/api/tasks',
    { title: this.state.title, description: this.state.description, priority: this.state.priority, due_date: this.state.due_date, completed: this.state.completed },)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err.response);
    });
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" onChange={this.handleTitleChange} />
            </label>
            <label>
            Description:
            <input type="text" name="description" onChange={this.handleDescriptionChange} />
            </label>
            <label>
            Priority:
            <select value={this.state.value} type="integer" name="priority" onChange={this.handlePriorityChange} />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </label>
            <label>
            Due_date:
            <input type="date" name="due_date" onChange={this.handleDueDateChange} />
            </label>
            <label>
            Completed:
            <input type="checkbox" name="completed" onChange={this.handleCompletedChange} />
          </label>
          <button type="submit">Create task</button>
        </form>
      </div>
    )
  }
}
// class taskForm extends Component {
//   render () {
//     const {handleSubmit} = this.props;
//     return (
//       <form onSubmit={handleSubmit}>
//         <Field
//           name="title"
//           component="input"
//           type="text"
//           placeholder="Title"
//         />
//         <Field
//           name="description"
//           component="input"
//           type="text"
//           placeholder="description"
//         />
//         <Field
//           name="priority"
//           component="select"
//           type="integer"
//           placeholder="priority"
//         />
//         <Field
//           name="due_date"
//           component="input"
//           type="date"
//         />
//         <Field
//           name="completed"
//           component="input"
//           type="checkbox"
//         />
//         <button type="submit" label="submit">Submit</button>
//       </form>
//     );
//   }
// }

// taskForm = reduxForm ({
//   form: 'task',
// }) (taskForm);

// export default taskForm;