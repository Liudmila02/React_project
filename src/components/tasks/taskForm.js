import React, {Component} from 'react';
import {request} from '../../utils/axios'
import { withRouter } from "react-router";

import '../../style/taskForm.css'

class TaskForm extends Component {
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
  handleCompletedChange = event => {this.setState({ completed: event.target.checked })}
  
  handleSubmit = event => {
   event.preventDefault();

    request.post('/api/tasks',
    { title: this.state.title, description: this.state.description, priority: this.state.priority, due_date: this.state.due_date, completed: this.state.completed },)
    .then(res => {
      // console.log(res)
      this.props.history.push('/tasks')
    })
    .catch(function (err) {
      // console.log(err.response);
    });
  }

  render() {
    return (
      <div id='inputs' className="gradient-box">   
        <p>New task</p>     
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label className="title-input">
            Title:
            <input value={this.state.title} className="form-control inline-input" required type="text" id="title" name="title"  onChange={this.handleTitleChange} />
          </label>
          <label className="title-input">
            Description:
            <input value={this.state.description} className="form-control inline-input" required type="text" id="description" name="description"  onChange={this.handleDescriptionChange} />
          </label>
          <label className="title-input">
            Priority:
            <select value={this.state.priority} id="priority" value={this.state.value}  onChange={this.handlePriorityChange}>
            <option value="1">Later</option>
            <option value="2">Next</option>
            <option value="3">Now</option>
            </select>
          </label>
          <label className="title-input">
            Due_date:
            <input value={this.state.due_date} required type="date" name="due_date" id="due_date" onChange={this.handleDueDateChange} />
          </label>
          <label className="title-input">
            Completed:
            <input value={this.state.completed} id="check" type="checkbox" name="completed" onChange={this.handleCompletedChange} />
          </label>
          <button className="kvasov-btn-gradient btn-color-3" type="submit" >Create task</button>
        </form>
      </div>
    )
  }
}

export default withRouter(TaskForm);