import React, { Component, Fragment} from "react";
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'
import '../../style/nav.css'

class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      listItems: [],
      // uncompleted: [],
      // completed:[]
    };
  }

// const filteredCompleted = this.state.listItems.filter(item =>{
  //   return item.id == true
  // })
  // this.setState({
  //   listItems: filteredCompleted,
  // })
  // const filteredUncompleted = this.state.listItems.filter(item =>{
  //   return item.id == false
  // })
  // this.setState({
  //   listItems: filteredUncompleted,
  // })
  componentDidMount() {
    request.get('/api/tasks')
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          listItems: res.data
        })
      })
      .catch(function (err) {
        console.log(err.response);
      });
}

  completedItem(){
    request.put(`/api/tasks/${this.props.match.params.taskId}`)
        .then(res => {
          console.log(res);
          console.log(res.data);

          this.setState({update: res.data.task.completed})
          // window.location.href='/tasks'
        }).catch(function (err) {
          console.log(err.res);
        })
    
  }
  
  // completedItem() {
  //   if (id == task.id) {
  //     if (task.completed){
  //         task.completed = false; 
  //     }
  //     else if (!task.completed) {
  //         task.completed = true;  
  //     }
  //   console.log(this.props)
  //   request.put(`/api/tasks/${this.props.match.params.taskId}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       window.location.href='/tasks'
  //     }).catch(function (err) {
  //       console.log(err.res);
  //     })
  // }
//}
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
 
 
  render() {
    console.log('list')
    return (
      <Fragment>
        <div>
        <ul>
          {this.state.listItems.filter(item => item.completed == true).map(listitem => (
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
        <hr/>
        <ul>
          {this.state.listItems.map(listitem => (
            <li className="completed" key={listitem.id}> 
              <input type="checkbox" />
              {listitem.title}
            <Link to={`/tasks/${listitem.id}/show`} >Show</Link>
            <Link to={`/tasks/${listitem.id}/edit`}>Edit</Link>
            <button onClick={() => this.deleteItem(listitem.id)}>Delete</button> 
            </li>
            ))}
        </ul>
        </div>
      </Fragment>
    );
  }
}

export default TaskList;