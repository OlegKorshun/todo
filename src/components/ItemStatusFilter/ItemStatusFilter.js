import React from 'react';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = filter === name;
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
    return (
      <button key={name}
        type='button'
        className={classNames}
        onClick={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default ItemStatusFilter;