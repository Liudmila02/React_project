import React from 'react';
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'
import {TaskList} from './taskList'

export default class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'title', description: 'description', priority: '1', due_date: '10/02/2019', completed: 'false'} 
  }
  showItem = key => {
    const filteredItems = this.state.listItems.filter(task => {
      if (task.id !== key) return task;
    })
    this.setState({
      showItem: filteredItems,
    })
    request.get(`/api/tasks/${key}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

      })
      .catch(function (err) {
        console.log(err.response);
      })
  }
  render() {
    return (
      <div>
        <ul>
          <li>Title: {this.state.title}</li>
          <li>Description: {this.state.description}</li>
          <li>Priority: {this.state.priority}</li>
          <li>Due date: {this.state.due_date}</li>
          <li>Completed: {this.state.completed}</li>
        </ul>
        <Link to = "/tasks">Back</Link>
      </div>
    )
  }
}