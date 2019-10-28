import React  from 'react';
import { Link } from 'react-router-dom';

import '../../style/taskListItem.css'

function TaskListItem (props){
  const { id, title, completed, checkTask } = props.task 

  return (
    <li key={id}> 
      <label>
        <input type="checkbox" className="option-input checkbox" value={title} checked = {props.task.checked} onClick={() => props.checkTask(props.task.id)}  />
      </label>
      <span className="title-task">{title}</span>
      <span className="buttons"> 
      <Link className="btn btn-primary btn-circle" to={`/tasks/${id}/show`} >
      <i className="fa fa-eye"></i></Link>
      <Link className="btn btn-primary btn-circle" to={`/tasks/${id}/edit`}><i class="fa fa-edit"></i></Link>
      <button className="btn btn-primary btn-circle" onClick={() => props.handleDelete(id)}>
        <i className="fa fa-trash"></i>
      </button>
      {!completed ? (<button className="btn btn-primary btn-circle"
        onClick={() => props.handleComplete(id)}>
        <i className="fa fa-check"></i>
      </button>) : undefined }
      </span>
    </li>
  )
} 


export default TaskListItem;
