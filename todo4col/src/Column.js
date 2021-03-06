import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

export default (props) => {
  return(
    <ul>
      <h3>{props.data.name}</h3>
      {props.data.tasks.map((row, taskIndex) => {
        return <Task key={taskIndex} text={row.text} taskIndex={taskIndex} columnIndex={props.columnIndex} shiftTask={props.shiftTask} />;
      })}
      <NewTask columnIndex={props.columnIndex} addTask={props.addTask} />
    </ul>
  );
};