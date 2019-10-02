// import React, { Component } from "react";
// import {request} from '../../utils/axios';


// class TaskEdit extends Component {
//   state = {
//     title: '',
//     description: '',
//     priority: '',
//     due_date: '',
//     completed: false,
//   }
//   handleTitleChange = event => {this.setState({ title: event.target.value })}
//   handleDescriptionChange = event => {this.setState({ description: event.target.value })}
//   handlePriorityChange = event => {this.setState({ priority: event.target.value })}
//   handleDueDateChange = event => {this.setState({ due_date: event.target.value })}
//   handleCompletedChange = event => {this.setState({ completed: event.target.value })}
  
//   handleSubmit = event => {
//     event.preventDefault();

//     request.post('/api/tasks',
//     { title: this.state.title, description: this.state.description, priority: this.state.priority, due_date: this.state.due_date, completed: this.state.completed },)
//     .then(res => {
//       console.log(res);
//       console.log(res.data);
//     })
//     .catch(function (err) {
//       console.log(err.response);
//     });
// }
//   render() {
//     return (
//         <div>
//           <form>       
//             <li>
//               Title:
//               <input defaultValue={this.state.title} type="text" name="title" onChange={this.handleTitleChange} /> 
//               Description: 
//               <input defaultValue={this.state.description} type="text" name="description" onChange={this.handleDescriptionChange} />  
//               Priority:
//               <select defaultValue={this.state.priority} type="select" name="priority" onChange={this.handlepriorityChange}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>  
//               Due_date:
//               <input defaultValue={this.state.due_date} type="date" name="due_date" onChange={this.handleDueDateChange} />  
//               Completed:
//               <input defaultValue={this.state.completed} type="checkbox" name="completed" onChange={this.handleCompletedChange} />  
//               <button onClick={() => this.handleSave(this.state)}>Save</button>
//             </li>
//           </form>
//       </div>
//     );
//   }
// }

// export default TaskEdit;

