import React, {Component} from 'react';
import {request} from '../../utils/axios'
import nav from "../../utils/nav"

import '../../style/taskForm.css'

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
  handleCompletedChange = event => {this.setState({ completed: event.target.cheked })}
  
  handleSubmit = event => {
   event.preventDefault();

    request.post('/api/tasks',
    { title: this.state.title, description: this.state.description, priority: this.state.priority, due_date: this.state.due_date, completed: this.state.completed },)
    .then(res => {
      
      nav('/tasks')
    })
    .catch(function (err) {
      console.log(err.response);
    });
}
  render() {
    return (
      <div className="gradient-box">   
        <p>New task</p>     
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label className="title-input">
            Title:
            <input  className="form-control inline-input" required type="text" name="title"  onChange={this.handleTitleChange} />
          </label>
          <label className="title-input">
            Description:
            <input className="form-control inline-input" required type="text" name="description"  onChange={this.handleDescriptionChange} />
          </label>
          <label className="title-input">
            Priority:
            <select value={this.state.value}  onChange={this.handlePriorityChange}>
            <option value="1">Later</option>
            <option value="2">Next</option>
            <option value="3">Now</option>
            </select>
          </label>
          <label className="title-input">
            Due_date:
            <input required type="date" name="due_date"  onChange={this.handleDueDateChange} />
          </label>
          <label className="title-input">
            Completed:
            <input type="checkbox" name="completed" onChange={this.handleCompletedChange} />
          </label>
          <button className="kvasov-btn-gradient btn-color-3" type="submit">Create task</button>
        </form>
      </div>
    )
  }
}

