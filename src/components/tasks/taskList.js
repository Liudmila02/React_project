import React, { Component, Fragment } from "react";
import { request } from '../../utils/axios';
import { Link } from 'react-router-dom';
import TaskListItem from './taskListItem';

import '../../style/listTask.css';

class TaskList extends Component {
  constructor(props){
    super(props)
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.toggleSortPriority = this.toggleSortPriority.bind(this)
    this.toggleTitlePriority = this.toggleSortTitle.bind(this)
    this.state = {
      listItems: [],
      isOldestFirst: true
    };
  }

  sortByDate(){
    const {listItems} = this.state
    let new_listItems = listItems
    if (this.state.isOldestFirst){
      new_listItems.sort((a, b) => a.due_date < b.due_date)
    } else {
      new_listItems.sort((a, b) => a.due_date < b.due_date)
    }
    this.setState({
      listItems: new_listItems.sort((a, b) => a.due_date > b.due_date)
    })
  }
  toggleSortDate (event) {
    this.sortByDate()
   }

  sortByPriority(){
    const {listItems} = this.state
    let new_listItems = listItems
    if (this.state.isOldestFirst){
      new_listItems.sort((a, b) => a.priority < b.priority)
    } else {
      new_listItems.sort((a, b) => a.priority < b.priority)
    }
    this.setState({
      listItems: new_listItems.sort((a, b) => a.priority > b.priority)
    })
  }
  toggleSortPriority (event) {
   this.sortByPriority()
  }

  sortByTitle(){
    const {listItems} = this.state
    let new_listItems = listItems
    if (this.state.isOldestFirst){
      new_listItems.sort((a, b) => a.title < b.title)
    } else {
      new_listItems.sort((a, b) => a.title < b.title)
    }
    this.setState({
      listItems: new_listItems.sort((a, b) => a.title > b.title)
    })
  }
  toggleSortTitle (event) {
   this.sortByTitle()
  }

  toggleListReverse (event) {
    const {listItems} = this.state
    let new_listItems = listItems.reverse()
    this.setState({
      listItems: new_listItems
    })
  }

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

  completedItem = key => {
    request.put(`/api/tasks/${key}`, { completed: true})
      .then(res => {
        const task = res.data
        const filteredTasks = this.state.listItems.filter(item => {
          return item.id !== key
        })
        this.setState({
          listItems: filteredTasks,
          
        })
        console.log(this.setState)
        console.log(res);
        console.log(res.data);
        window.location.href='/tasks'
      })
      .catch(function (err) {
        console.log(err.response);
      })
  }
  
  deleteItem = key => {
    request.delete(`/api/tasks/${key}`)
      .then(res => {
        const filteredItems = this.state.listItems.filter(item => {
          return item.id !== key
        })
        this.setState({
          listItems: filteredItems,
        })
        console.log(res);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err.response);
      })
  }

  deleteChecked = items => {
    request.delete(`/api/tasks/${items}`, {checked: true})
      .then(res => {
        const filteredItems = this.state.listItems.filter(item => {
          return item.id !== items
        })
        this.setState({
          listItems: filteredItems,
        })
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
        <div className="menu-task">
        <ul>
         <li>
            <Link type="button" class="btn btn-primary" to="/task">New task</Link>
          </li>
          <li>
            <Link class="btn btn-primary" to="/tasks">List task</Link>
          </li>
          <li><button class="btn btn-primary" onClick={() => this.toggleSortDate()}>Sort by due date</button></li>
          <li><button class="btn btn-primary" onClick={() => this.toggleSortPriority()}>Sort by priority</button></li>
          <li><button class="btn btn-primary" onClick={() => this.toggleSortTitle()}>Sort by title</button></li>
          <li><button class="btn btn-primary" onClick={() => this.toggleListReverse()}>Reverse</button></li>
          <li><button class="btn btn-primary" onClick={() => this.deleteChecked()}>Delete checked</button></li>
        </ul>
        </div>
        <div className="task-list">
          <div>
          {this.state.listItems.filter(item => item.completed == false).map(listitem => (
            <TaskListItem task={listitem} handleDelete={this.deleteItem} handleComplete={this.completedItem}/>
            ))}
          </div>
        <hr/>
        <div className="completed">
          {this.state.listItems.filter(item => item.completed == true).map(listitem => (
            <TaskListItem task={listitem} handleDelete={this.deleteItem} />
            ))}
        </div>
        </div>
      </Fragment>
    );
  }
}

export default TaskList;

