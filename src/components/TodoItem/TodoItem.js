import React from 'react';

import './TodoItem.css';

const TodoItem = ({ label, done, important, onDelete,
    onToggleDone, onToggleImportant }) => {

  let classNames = 'todoItem';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span className='todoItemLabel'
        onClick={onToggleDone}>
        {label}
      </span>
      <button type='button'
        className='btn btn-outline-success btn-sm float-right'
        onClick={onToggleImportant}>
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={onDelete}>
        <i className='fa fa-trash-o' />
      </button>
    </span>
  );
};

export default TodoItem;