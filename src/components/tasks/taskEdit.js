import React, { Link } from "react";
import {request} from '../../utils/axios';

export default class TaskEdit extends React.Component {
     
  componentWillMount(){
    this.setState({
        updatable : false,
        title : this.props.title,
        description : this.props.description
    });
this.onTitleChange = this.onTitleChange.bind(this)

    console.log(this.props)
    request.put(`/api/tasks/${this.props.match.params.taskId}`)
      .then(res => {
        console.log(res);
        console.log(res.data); 
        this.setState({
          Item: res.data.task

        
        })
      })
      .catch(function (err) {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div>
        {this.state.Item && 
        <div> 
          <input className="form-control" type="text" value={this.state.title} id={'taskTitle' + this.props.id} onTitleChange={this.onTitleChange}/>
          
          
          <div> Title: {this.state.Item.title}</div>
          <div> Description: {this.state.Item.description}</div>
          <div> Priority: {this.state.Item.priority}</div>
          <div> Due date: {this.state.Item.due_date.split('T')[0]}</div>
          <div> Completed: {this.state.Item.completed==false ? 'uncompleted' : 'completed'}</div>
        </div>
        }
        <Link to = "/tasks">Back</Link> 
      </div>
    );
  }
}


// class TaskEdit extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { title: '', description: '', priority: '', due_date: '', completed: '' }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value })
//   }

//   handleSubmit(event) {
//     alert(this.state.title)
//     event.preventDefault()
//   }
  
//     editItem = key => {
//     request.put(`/api/tasks/${key}`)
//         .then(res => {
//         console.log(res);
//         console.log(res.state);
//         })
//         .catch(function (err) {
//         console.log(err.response);
//         })

  
//       }
//   render() {
//       console.log('from taskedit1')
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//             Title:
//             <input type="text" name="title" onChange={this.handleTitleChange} />
//             </label>
//             <label>
//             Description:
//             <input type="text" name="description" onChange={this.handleDescriptionChange} />
//             </label>
//             <label>
//             Priority:
//             <select value={this.state.value} onChange={this.handlePriorityChange}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             </select>
//             </label>
//             <label>
//             Due_date:
//             <input  type="date" name="due_date" onChange={this.handleDueDateChange} />
//             </label>
//             <label>
//             Completed:
//             <input type="checkbox" name="completed" onChange={this.handleCompletedChange} />
//           </label>
//           <button type="submit">Create task</button>
//       </form>
//     )
//   }

// }

// export default TaskEdit;