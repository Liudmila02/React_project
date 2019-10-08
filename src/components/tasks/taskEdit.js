import React, { Link } from "react";
import {request} from '../../utils/axios';

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
  }
  componentDidMount(){
    console.log(this.props)
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
      window.location.href='/tasks'
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newTask = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      priority: this.refs.priority.value,
      due_date: this.refs.due_date.value,
      completed: this.refs.completed.value,
    }
    this.editTask(newTask);
    e.preventDefault();
  }
  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <h1>Edit form</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            Title:
            <input type="text" name="title" ref="title" value={this.state.title} 
            onChange={this.handleInputChange}  />
            </label>
            <label>
            Description:
            <input type="text" name="description" ref="description" value={this.state.description} 
            onChange={this.handleInputChange}  />
            </label>
            <label>
            Priority:
            <select name="priority" ref="priority" value={this.state.priority}
            onChange={this.handleInputChange} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            </label>
            <label>
            Due_date:
            <input  type="date" name="due_date" ref="due_date" value={this.state.due_date} 
            onChange={this.handleInputChange} />
            </label>
            <label>
            Completed:
            <input type="checkbox" name="completed" ref="completed" value={this.state.completed} 
            onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>  
    )
  }
}