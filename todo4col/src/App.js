import React, { Component } from 'react';
import Column from './Column';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedState = JSON.parse(localStorage.getItem('state'));
    this.state = savedState || {
      columns: [
        {
          name: 'Back Log',
          tasks: [],
        },
        {
          name: 'To Do',
          tasks: [],
        },
        {
          name: 'In Progress',
          tasks: [],
        },
        {
          name: 'Completed',
          tasks: [],
        },
      ],
    };
    this.shiftTask = this.shiftTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.save = this.save.bind(this);
  }

  shiftTask(fromColumn, fromIndex, toColumn) {
    const newConfiguration = [...this.state.columns];
    const taskToMove = newConfiguration[fromColumn].tasks[fromIndex];
    newConfiguration[toColumn].tasks.push(taskToMove);
    newConfiguration[fromColumn].tasks.splice(fromIndex,1);
    this.setState({
      columns: newConfiguration,
    }, () => this.save());
  }

  addTask(column, taskText) {
    const newConfiguration = [...this.state.columns];
    newConfiguration[column].tasks.push({
      text: taskText,
    });
    this.setState({
      columns: newConfiguration,
    }, () => this.save());
  }

  save() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }
  clearCache() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <div>
      <button onClick={this.clearCache}>clear</button>
      <div className="App">
        {this.state.columns.map((column, index) => {
          return (<Column key={index} data={this.state.columns[index]} columnIndex={index} shiftTask={this.shiftTask} addTask={this.addTask} />);
        })}
      </div>
    </div>
    );
  }
}

export default App;
