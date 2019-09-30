import React, { Component, Fragment } from "react";
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'

class TaskDelete extends Component {
    submit = () => {
      request.delete('/api/tasks/:taskId')
      .then((task, error) => {
        this.setState({ redirect: true })
      });
    };
      render () {
        return (
          <Fragment>
            <h1 onClick={()=> this.submit() }>Delete</h1>
          </Fragment>
        );    
      }
  }
  
class TaskList extends Component {
  state = {
    listItems: []
  };
  componentDidMount() {
    request.get('/tasks')
    .then(res => {
    console.log(res);
    console.log(res.data);
    this.setState({listItems: res.data})
  })
  .catch(function (err) {
    console.log(err.response);
  });
  }
  render() {
    return (
      <Fragment>
        <ul>
          {this.state.listItems.map(listitem => (
            <li key={listitem.id}>
              {listitem.title} 
              <Link to="/api/tasks/edit">Edit</Link>
              
              <button onClick={()=> this.submit()}>Delete</button>
              <button>Completed</button>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
 
export default TaskList;