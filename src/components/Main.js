import React, { Component } from 'react';

// Form
import { BsPlusLg, BsPencilSquare, BsXSquare } from 'react-icons/bs';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Fazer café',
      'Estudar',
      'Fazer projeto',
    ],
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

        <form action="#" className="form">
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
