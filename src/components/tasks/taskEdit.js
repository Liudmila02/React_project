import React, { Component } from "react";
import {request} from '../../utils/axios';

// // class TaskEdit extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             data: [
// //                 { "id": "1", "title": "Task 1", "description": "Buy Milk", "priority": "1", "due_date": "12/02/2019", "completed": "false" },
// //                 { "id": "2", "title": "Task 2","description": "Buy new computer book", "priority": "3", "due_date": "11/02/2019", "completed": "false" },
// //             ],
// //             isEditing: false,
// //             editItem: {}
// //         }
// //     }
  
// //     editItem(taskId) {
// //         const remainder = this.state.data.filter((task) => {
// //             if (task.id === taskId) return task;
// //         });
// //         this.setState({ isEditing: true, editItem: remainder[0] });
    
// //     request.put(`/api/tasks/${key}`)
// //       .then(res => {
// //         console.log(res);
// //         console.log(res.data);
// //       })
// //       .catch(function (err) {
// //         console.log(err.response);
// //       })
// //     }
// //     render() {
// //     return (
// //       <TaskForm isEditing={this.state.isEditing} handleTitleChange={this.handleTitleChange.bind()} editItem={this.state.editItem}  />
// //     );
// //   }
// // }


class TaskEdit extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', description: '', priority: '', due_date: '', completed: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.title)
    event.preventDefault()
     
    // request.put(`/api/task/${key}`)
    //     .then(res => {
    //     console.log(res);
    //     console.log(res.state);
    //     })
    //     .catch(function (err) {
    //     console.log(err.response);
    //     })

  }

  render() {
      console.log('from taskedit1')
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input type="submit" value="Submit" />

      </form>
    )
  }
}

export default TaskEdit;