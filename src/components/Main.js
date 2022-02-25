import React, { Component } from 'react';

// Form
import { BsPlusLg } from 'react-icons/bs';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

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
      </div>
    );
  }
}
