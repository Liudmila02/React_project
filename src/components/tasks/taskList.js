import React, { Component, Fragment } from "react";
import { request } from '../../utils/axios';
import { Link } from 'react-router-dom';
import TaskListItem from './taskListItem';
import nav from '../../utils/nav'
import { withRouter } from "react-router";

import '../../style/listTask.css';

class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      listItems: [],
      checking: false,
      isOldestFirst: true
    }; 
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.toggleSortPriority = this.toggleSortPriority.bind(this)
    this.toggleSortTitle = this.toggleSortTitle.bind(this)
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

  completedItem = key => {
    request.put(`/api/tasks/${key}`, { completed: true})
      .then(res => {
        const task = this.state.listItems.findIndex(i => i.id == key)
        const filteredTasks = this.state.listItems
        filteredTasks[task].completed = true
        this.setState({
          listItems: filteredTasks, 
        })       
      })
      .catch(function (err) {
        console.log(err.response);
      })
  }
  
  deleteItem = (deleteId) => {
    request.delete(`/api/tasks/${deleteId}`)
    .then(res => {
      const filteredItems = this.state.listItems.filter(item => {
        return item.id !== deleteId
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

  removeChecked = () => {
    let deleteIds = []
    let newTasks = []
      this.state.listItems.map(item => {
      if (item.checked)
        deleteIds.push(item.id)
      else newTasks.push(item)
      console.log(newTasks)
        this.setState({listItems: newTasks})
      })
    request.delete(`/api/tasks/${deleteIds}`)
   
    .then(res => {
      const filteredTasks = this.state.listItems.filter(item => {
      return item.id !== deleteIds
    })
    this.setState({
      listItems: filteredTasks,
    })
      console.log(res);
      console.log(res.data);
      
    })
    .catch(function (err) {
      console.log(err.response);
    })
}
  checkItAll = (event) => {
    let listItems = this.state.listItems
    listItems.forEach(item => {
      item.checked = event.target.checked
      if(item.checked)
      {
        this.setState({checking: true})
      }else {
        this.setState({checked: false})
      }
    })
    this.setState({listItems: listItems})
  }
  checkTask = id => {
    let tasks = this.state.listItems
    let index = tasks.findIndex(i=> i.id == id)
    tasks[index].checked = !tasks[index].checked 
    this.setState({ listItems: tasks })
  }

  render() {
    return (
      <Fragment>
        <div className="menu-task">
        <ul>
         <li>
            <Link type="button" className="btn btn-success" to="/task">New task</Link>
          </li>
          {/* <li>
            <Link class="btn btn-primary" to="/tasks">List task</Link>
          </li> */}
          <div class="btn-group">
            <button type="button" class="btn btn-warning">Sort</button>
            <button type="button" class="btn  btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={() => this.toggleSortTitle()}>Sort by title</a>
              <a className="dropdown-item" onClick={() => this.toggleSortPriority()}>Sort by priority</a>
              <a className="dropdown-item" onClick={() => this.toggleSortDate()}>Sort by due date</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" onClick={() => this.toggleListReverse()}>Reverse</a>
            </div>
          </div>
          <li><button className="btn btn-danger" onClick={() => this.removeChecked()}>Delete checked</button></li>
          <label>
          <input type="checkbox" checked = {this.state.checking} onClick={this.checkItAll} /> Check / Uncheck All
          </label>
        </ul>
        </div>
        <div>
          <div className="task-list">
          {this.state.listItems.filter(item => item.completed == false).map(listitem => (
            <TaskListItem checkTask={this.checkTask} task={listitem} handleDelete={this.deleteItem} handleComplete={this.completedItem}/>
            ))}
          </div>
          <hr/>
          <div className="completed">
            {this.state.listItems.filter(item => item.completed == true).map(listitem => (
              <TaskListItem checkTask={this.checkTask} task={listitem} handleDelete={this.deleteItem} />
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(TaskList);

