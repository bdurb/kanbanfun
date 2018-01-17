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
      ],
    };
  }
}

export default App;
