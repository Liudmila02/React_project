import React, { Component, Fragment} from "react";
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'


class TaskList extends Component {
  state = {
    listItems: [],
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

  render() {
    console.log('list')
    return (
      <Fragment>
        <ul>
          {this.state.listItems.map(listitem => (
            <li key={listitem.id}>
              <input type="checkbox" />
              {listitem.title} 
              <Link to={`/tasks/${listitem.id}/show`} >Show</Link>
              <Link to={`/tasks/${listitem.id}/edit`}>Edit</Link>
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