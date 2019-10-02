import React, { Component, Fragment } from "react";
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'

class TaskList extends Component {
  state = {
    listItems: [],
    data: {
      title: 'title',
      description: 'description',
      priority: '1',
      due_date: '12/02/2019',
      completed: false,
    },
    isEditing: false,
    editItem: {}
  };
  deleteItem = key => {
    const filteredItems = this.state.listItems.filter(item => {
      return item.id !== key
    })
    this.setState({
      listItems: filteredItems,
    })
    request.delete(`/api/tasks/${key}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err.response);
      })
  }
  editItem = key => {
    const remainder = this.state.data.filter((task) => {
        if (task._id === taskId) return task;
    });
    this.setState({ isEditing: true, editItem: remainder[0] });
  
    request.put(`/api/tasks/${key}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err.response);
      })
  }

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
              <button onClick={() => this.editItem()}>Edit</button>
              <button onClick={() => this.deleteItem(listitem.id)}>Delete</button>
              <button onClick={() => this.completedItem(listitem.id)}>Completed</button>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default TaskList;