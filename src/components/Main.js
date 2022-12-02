import React, { Component } from 'react';
import Tasks from './ListTasks';
import Form from './Form';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1 || newTask === '') return;

    const newsTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newsTasks, newTask],
        newTask: '',
      });
    } else {
      newsTasks[index] = newTask;

      this.setState({
        tasks: [...newsTasks],
        index: -1,
        newTask: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    // eslint-disable-next-line no-alert
    const confirmDeleteMessage = window.confirm('Você quer mesmo deletar essa tarefa ?');
    if (!confirmDeleteMessage) return;
    const { tasks } = this.state;
    const newsTasks = [...tasks];
    newsTasks.splice(index, 1);

    this.setState({
      tasks: [...newsTasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
