import React from 'react';
import axios from 'axios';

class Task extends React.Component {
  render() {
    return <div> {this.props.data.taskName} </div>
  }
}

function TaskList(props) {
  return (
    <div>
      <h1> This is task list </h1>
     {props.tasks.map(item => <Task data={item}/>)}
    </div>
  )
}

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      taskText: null
    }
  }
  onButtonClick() {
    const text = this.state.taskText;
    this.props.onTaskAdd({ taskName: text });
  }

  handleChange(event) {
    this.setState({ taskText: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={() => {this.onButtonClick()}}> Add task </button>
      </div>
    )
  }
}

class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    }
  }

  componentDidMount() {
    console.log('did mount!!!!!!!!!')
    setTimeout(() => {
      this.setState(
        {taskList: [
                { taskName: 'To have dinner' },
                { taskName: 'To visit gum' },
                { taskName: 'To meet friend' },
                { taskName: 'To do homework' },
                { taskName: 'To visit cheach' },
                { taskName: 'To go shopping' }
              ]
        })


    }, 3000)
  }
  addTask(task) {
    this.setState({
      taskList: this.state.taskList.concat([task]),
    })
  }

  render() {
    console.log('rendering method!!!!!!!!!!!')
    return (
      <div>
        <AddTaskForm onTaskAdd={(task) => { this.addTask(task)}}/>
        <TaskList tasks={this.state.taskList}/>
      </div>
    )
  }
}



export default TaskApp;
