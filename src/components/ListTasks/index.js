import React from 'react';
import PropTypes from 'prop-types';
import { BsPencilSquare, BsXSquare } from 'react-icons/bs';

import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <BsPencilSquare
              onClick={(e) => handleEdit(e, index)}
              className="edit"
            />
            <BsXSquare
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>

  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
