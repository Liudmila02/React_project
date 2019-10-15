import React  from 'react';
import { Link } from 'react-router-dom';

function TaskListItem (props){
  const { id, title, completed } = props.task

  return (
    <li key={id}> 
      <input type="checkbox" />
      <span>{title}</span>
      <Link class="btn btn-outline-success" to={`/tasks/${id}/show`} >Show</Link>
      <Link class="btn btn-outline-primary" to={`/tasks/${id}/edit`}>Edit</Link>
      <button
        class="btn btn-outline-danger" 
        onClick={() => props.handleDelete(id)}
      >
        Delete
      </button>

      {!completed ? (<button class="btn btn-outline-warning"
        onClick={() => props.handleComplete(id)}>
        Completed
      </button>) : undefined }
      
    </li>
  )
} 

export default TaskListItem;
