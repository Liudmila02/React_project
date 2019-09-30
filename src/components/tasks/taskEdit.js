import React, { Component } from "react";
import {request} from '../../utils/axios';

class TaskEdit extends Component {
  state = {
    title: '',
    description: '',
    priority: '1',
    due_date: '',
    completed: false,
  };
  

  handleSubmit = event => {
    event.preventDefault();

//   componentDidMount() {
    request.put('/api/tasks/:taskId/edit')
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
          <form>       
            <li >
              <input defaultValue={this.state.title} type="text" name="title" onChange={this.handleTitleChange} />  
              <input defaultValue={this.state.description} type="text" name="description" onChange={this.handleDescriptionChange} />  
              <select defaultValue={this.state.priority} type="select" name="priority" onChange={this.handlepriorityChange} />  
              <input defaultValue={this.state.due_date} type="date" name="due_date" onChange={this.handleDueDateChange} />  
              <input defaultValue={this.state.completed} type="checkbox" name="completed" onChange={this.handleCompletedChange} />  
              <button onClick={() => this.handleSave(this.state)}> save</button>
            </li>
          </form>
      </div>
    );
  }
}

export default TaskEdit;

