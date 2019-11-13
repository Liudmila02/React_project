import React from 'react';
import { request } from '../../utils/axios';
import { withRouter } from "react-router";

import '../../style/showTask.css';

class TaskShow extends React.Component {
  state = {
    Item: null
  }   

  componentDidMount() {
    request.get(`/api/tasks/${this.props.match.params.taskId}`)
      .then(res => {
        this.setState({
          Item: res.data.task
        })
      })
      .catch((err) =>{
        if (err.response.status === 401){
          this.props.history.push('/login')
        }
      });
  }
  
  render() {
    return (
      <div className="border-show">
        <div className="show-task">
        {this.state.Item && 
          <div> 
            <div id="title"> Title: {this.state.Item.title}</div>
            <div id="description"> Description: {this.state.Item.description}</div>
            <div id="priority"> Priority: {this.state.Item.priority}</div>
            <div id="duedate"> Due date: {this.state.Item.due_date.split('T')[0]}</div>
            <div id="completed"> Completed: {this.state.Item.completed===false ? 'uncompleted' : 'completed'}</div>
          </div>
        }
        <button type="button" className="btn btn-info btn-rounded" onClick={()=> this.props.history.push('/tasks')}>Back</button> 
        </div>
      </div>
    );
  }
}
export default withRouter(TaskShow);
