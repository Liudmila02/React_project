import React, { Component, Fragment} from "react";
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'


class TaskList extends Component {
  state = {
    listItems: [],
    isEditing: false,
    editItem: {}
  };
  showItem = key => {
    const filteredItems = this.state.listItems.filter(task => {
      if (task.id !== key) return task;
    })
    this.setState({
      isEditing: true, showItem: filteredItems[0]
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
 
  componentDidMount() {
    request.get('/api/tasks')
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({listItems: res.data})
      })
      .catch(function (err) {
        console.log(err.response);
      });
  }
  handleInputChange(newValue) {
    console.log(newValue);
}

  render() {
    console.log('list')
    return (
      <Fragment>
        <ul>

          {this.state.listItems.map(listitem => (
            <li key={listitem.id}>
              {listitem.title} 
              <button onClick={() => this.showItem(listitem.id)}>Show</button>
              <Link to={`/api/tasks/${listitem.id}/show`} >Show</Link>
              <Link to={`/api/tasks/${listitem.id}/edit`}>Edit</Link>
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