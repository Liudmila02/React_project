import React from 'react';
import { request } from '../../utils/axios';
import { Link } from 'react-router-dom'

import '../../style/showTask.css'

export default class TaskShow extends React.Component {
  state = {
    Item: null
  }   
  componentDidMount() {
    console.log(this.props)
    request.get(`/api/tasks/${this.props.match.params.taskId}`)
      .then(res => {
        console.log(res);
        console.log(res.data); 
        this.setState({
          Item: res.data.task
        })
      })
      .catch(function (err) {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div className="border-show">
        <div className="show-task">
        {this.state.Item && 
        <div> 
          <div> Title: {this.state.Item.title}</div>
          <div> Description: {this.state.Item.description}</div>
          <div> Priority: {this.state.Item.priority}</div>
          <div> Due date: {this.state.Item.due_date.split('T')[0]}</div>
          <div> Completed: {this.state.Item.completed==false ? 'uncompleted' : 'completed'}</div>
        </div>
        }
        <Link type="button" classNmae="btn btn-info btn-rounded" to = "/tasks">Back</Link> 
        </div>
      </div>
    );
  }
}

