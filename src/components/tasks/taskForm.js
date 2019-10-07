import React, {Component} from 'react';
import { reduxForm} from 'redux-form';
import {request} from '../../utils/axios'
import {validateTask} from '../../validation/index';
import nav from "../../utils/nav"

export default class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    priority: '1',
    due_date: '',
    completed: false,
  }
  handleTitleChange = event => {this.setState({ title: event.target.value })}
  handleDescriptionChange = event => {this.setState({ description: event.target.value })}
  handlePriorityChange = event => {this.setState({ priority: event.target.value })}
  handleDueDateChange = event => {this.setState({ due_date: event.target.value })}
  handleCompletedChange = event => {this.setState({ completed: event.target.value })}
  
  handleSubmit = event => { alert('You have created a new task with the title: ' + this.state.title + ', ' + 'description: ' + this.state.description + ', ' + 'priority: ' +
   this.state.priority + ', ' + 'due date: ' + this.state.due_date + ', ' + 'completed: ' + this.state.completed);
   event.preventDefault();
    

    request.post('/api/tasks',
    { title: this.state.title, description: this.state.description, priority: this.state.priority, due_date: this.state.due_date, completed: this.state.completed },)
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log('history')
      
      nav('/tasks')
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
            <select value={this.state.value} onChange={this.handlePriorityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            </label>
            <label>
            Due_date:
            <input  type="date" name="due_date" onChange={this.handleDueDateChange} />
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

TaskForm = reduxForm ({
  form: 'task',
  validateTask
}) (TaskForm);

