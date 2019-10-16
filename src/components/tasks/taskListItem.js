import React  from 'react';
import { Link } from 'react-router-dom';

import '../../style/taskListItem.css'

function TaskListItem (props){
  const { id, title, due_date, priority, completed } = props.task

  return (
    <li key={id}> 
      <input type="checkbox" />
      <span>{title}</span>
      <Link class="btn btn-primary btn-circle" to={`/tasks/${id}/show`} >Show</Link>
      <Link class="btn btn-primary btn-circle" to={`/tasks/${id}/edit`}>Edit</Link>
      <button
        class="btn btn-primary btn-circle"
        onClick={() => props.handleDelete(id)}
      >
        Delete
      </button>
      {!completed ? (<button class="btn btn-primary btn-circle"
        onClick={() => props.handleComplete(id)}>
        Completed
      </button>) : undefined }
    </li>
  )
} 

export default TaskListItem;
