

var taskItems = [];
taskItems.push({index: 1, value: "learn react", done: false});
taskItems.push({index: 2, value: "Go shopping", done: true});
taskItems.push({index: 3, value: "buy flowers", done: true});

class TaskList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TaskListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTaskDone={this.props.markTaskDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
  
class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTaskDone(index);
  }
  render () {
    var taskClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={taskClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}
  
class TaskHeader extends React.Component {
  render () {
    return <h1>Task list</h1>;
  }
}
  
class TaskApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTaskDone = this.markTaskDone.bind(this);
    this.state = {taskItems: taskItems};
  }
  addItem(taskItem) {
    taskItems.unshift({
      index: taskItems.length+1, 
      value: taskItem.newItemValue, 
      done: false
    });
    this.setState({taskItems: taskItems});
  }
  removeItem (itemIndex) {
    taskItems.splice(itemIndex, 1);
    this.setState({taskItems: taskItems});
  }
  markTaskDone(itemIndex) {
    var task = taskItems[itemIndex];
    taskItems.splice(itemIndex, 1);
    task.done = !task.done;
    task.done ? taskItems.push(task) : taskItems.unshift(task);
    this.setState({taskItems: taskItems});  
  }
  render() {
    return (
      <div id="main">
        <TaskHeader />
        <TaskList items={this.props.initItems} removeItem={this.removeItem} markTaskDone={this.markTaskDone}/>
        <TaskForm addItem={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<TaskApp initItems={taskItems}/>, document.getElementById('app'));