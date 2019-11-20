import React, { Component } from 'react';

import AppHeader from '../AppHeader/';
import SearchPanel from '../SearchPanel/';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList/';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class extends Component {
  maxId = 4;

  constructor() {
    super();
    this.state = {
      items: [
        this.createTodoItem('Drink coffe'),
        this.createTodoItem('Learn React'),
        this.createTodoItem('Make Awesome App')
      ],
      search: '',
      filter: 'all'
    };
  }

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label: label,
      important: false,
      done: false
    };
  }

  onItemAdded = (label) => {
    const newItem = this.createTodoItem(label);

    this.setState(({ items }) => {
      const newArray = [...items, newItem];

      return {
        items: newArray
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const newItem = { ...oldItem, [propName]: value };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.toggleProperty(items, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.toggleProperty(items, id, 'important')
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((item) => item.id === id);

      const newItems = [...items.slice(0, idx), ...items.slice(idx + 1)];

      return {
        items: newItems
      };
    });
  };
  
  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSearchChange = (search) => {
    this.setState({ search });
  };

  filterItems(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    };
  };

  searchItems = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  render() {
    const { items, search, filter} = this.state;
    const doneCount = items.filter((item) => item.done).length;
    const todoCount = items.length - doneCount;
    const visibleItems = this.filterItems(this.searchItems(items, search), filter);

    return (
      <div className='app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='searchPanel d-flex'>
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          items={visibleItems}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onDelete={this.onDelete} />
        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    );
  };
};