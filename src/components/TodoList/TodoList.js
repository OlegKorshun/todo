import React from 'react';

import TodoItem from '../TodoItem';

import './TodoList.css';

const TodoList = ({ items, onDelete, onToggleDone, onToggleImportant }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className='list-group-item' key={id}>
        <TodoItem
          {...itemProps}
          onDelete={() => onDelete(id) }
          onToggleDone={() => onToggleDone(id) }
          onToggleImportant={() => onToggleImportant(id) } />
      </li>
    );
  });

  return <ul className='list-group todoList'>{elements}</ul>;
};

export default TodoList;