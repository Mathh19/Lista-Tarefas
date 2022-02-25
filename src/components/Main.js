import React, { Component } from 'react';

// Form
import { BsPlusLg, BsPencilSquare, BsXSquare } from 'react-icons/bs';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newsTasks = [...tasks];

    this.setState({
      tasks: [...newsTasks, newTask],
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit" className="btn-submit">
            <BsPlusLg />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <BsPencilSquare className="edit" />
                <BsXSquare className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
