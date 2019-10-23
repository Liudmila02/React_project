import React, { Link } from "react";
import {request} from '../../utils/axios';
import nav from '../../utils/nav'

import '../../style/taskForm.css'

export default class TaskEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title:'',
      description:'',
      priority:'',
      due_date:'',
      completed:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCheckboxChange = this.handleInputCheckboxChange.bind(this);
  }

  componentDidMount(){
    this.getTaskDetails();
  }

  getTaskDetails(){
    let taskId = this.props.match.params.taskId;
    request.get(`/api/tasks/${taskId}`)
      .then(response => {
        this.setState({
          id: response.data.task.id,
          title: response.data.task.title,
          description: response.data.task.description,
          priority: response.data.task.priority,
          due_date: response.data.task.due_date.split('T')[0],
          completed: response.data.task.completed
        }, () => {
          console.log(this.state);
        })
      })
      .catch(err =>  console.log(err));
      }

  editTask(newTask){
    request({
      method:'put',
      url:`/api/tasks/${this.props.match.params.taskId}`,
      data: newTask
    }).then(response => {
      console.log(response.data);
      nav('/tasks')
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    e.preventDefault()
    const newTask = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      priority: this.refs.priority.value,
      due_date: this.refs.due_date.value,
      completed: this.refs.completed.checked,
    }
    this.editTask(newTask);
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleInputCheckboxChange(e){
    const checked = e.target.checked;
    
    this.setState({
      [e.target.name]: checked
    });
  }
  render() {
    console.log(this.props)
    return (
      <div className="gradient-box">
        <p>Edit form</p>
        <form className="form-group" onSubmit={this.onSubmit.bind(this)}>
          <label className="title-input">
            Title:
            <input className="form-control inline-input" type="text" name="title" ref="title" value={this.state.title} 
            onChange={this.handleInputChange}  />
            </label>
            <label className="title-input">
            Description:
            <input className="form-control inline-input" type="text" name="description" ref="description" value={this.state.description} 
            onChange={this.handleInputChange}  />
            </label>
            <label className="title-input">
            Priority:
            <select name="priority" ref="priority" value={this.state.priority}
            onChange={this.handleInputChange} >
             <option value="1">Later</option>
            <option value="2">Next</option>
            <option value="3">Now</option>
            </select>
            </label>
            <label className="title-input">
            Due_date:
            <input  type="date" name="due_date" ref="due_date" value={this.state.due_date} 
            onChange={this.handleInputChange} />
            </label>
            <label className="title-input">
            Completed:
            <input type="checkbox" name="completed" ref="completed" checked={this.state.completed} 
            onChange={this.handleInputCheckboxChange} />
          </label>
          <button class="kvasov-btn-gradient btn-color-3" type="submit" value="Save">Save</button>
        </form>
      </div>  
    )
  }
}