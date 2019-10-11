import React, { Component, Fragment, useCallback} from "react";
import {request} from '../../utils/axios';
import {Link} from 'react-router-dom'
import '../../style/nav.css'

class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      listItems: [],
      // uncompleted: [],
      // completed:[]
    };
  }

// const filteredCompleted = this.state.listItems.filter(item =>{
  //   return item.id == true
  // })
  // this.setState({
  //   listItems: filteredCompleted,
  // })
  // const filteredUncompleted = this.state.listItems.filter(item =>{
  //   return item.id == false
  // })
  // this.setState({
  //   listItems: filteredUncompleted,
  // })
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

// completedItem(){
//   request.put(`/api/tasks/${this.props.match.params.taskId}`, {completed: this.state.completed == true} )
//     .then(res => {
//       this.setState({
        
//       })
//       console.log("button clicked")
//     }).catch(function (err) {
//       console.log(err.res);
//     })
// }

  // completedItem(){

  //   request.put(`/api/tasks/${this.props.match.params.taskId}`, {completed: this.state.completed})
  //       .then(res => {
  //         //console.log(res);
  //         // console.log(res.data);
          
  //         // window.location.href='/tasks'
  //       }).catch(function (err) {
  //         console.log(err.res);
  //       })
    
  // }
  // completedItem() {
  //   // const completed = false
  //   request.put(`/api/tasks/${this.props.match.params.taskId}`, { completed: true})
  //     .then(res => {
  //       console.log('!!!!!!!!!!!!!')
  //       // console.log(res);
  //       console.log(res.data);

      
  //       // this.setState({
  //       // update: completed == true
  //       // })
  //     })
  //     .catch(function (err) {
  //       console.log(err.response);
  //     })
  // }
  completedItem = key => {
    
    const filteredItems = this.state.listItems.filter(item => {
      return item.id !== key
    })
    this.setState({
      key
    })
    request.put(`/api/tasks/${key}`, { completed: true})
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.completedItems(res.data.task)
        // this.setState({
        //   key
        // })
        // window.location.reload(true);
        // window.location.href='/tasks'
      })
      .catch(function (err) {
        console.log(err.response);
      })
  }
  

  deleteItem = key => {
    const filteredItems = this.state.listItems.filter(item => {
      return item.id !== key
    })
    this.setState({
      listItems: filteredItems,
    })
    request.delete(`/api/tasks/${key}`)
      .then(res => {
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
        <div>
        <ul>
          {this.state.listItems.filter(item => item.completed == false).map(listitem => (
            <li  key={listitem.id}> 
              <input type="checkbox" />
              {listitem.title}
            <Link to={`/tasks/${listitem.id}/show`} >Show</Link>
            <Link to={`/tasks/${listitem.id}/edit`}>Edit</Link>
            <button onClick={() => this.deleteItem(listitem.id)}>Delete</button> 
            <button  bsStyle="primary" onClick={(e) => this.completedItem(listitem.id)}>Completed</button>
            </li>
            ))}
        </ul>
        <hr/>
        <ul>
          {this.state.listItems.filter(item => item.completed == true).map(listitem => (
            <li className="completed" key={listitem.id}>
              <input type="checkbox" />
              {listitem.title} 
            <Link to={`/tasks/${listitem.id}/show`} >Show</Link>
            <Link to={`/tasks/${listitem.id}/edit`}>Edit</Link>
            <button onClick={() => this.deleteItem(listitem.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
      </Fragment>
    );
  }
}

export default TaskList;

