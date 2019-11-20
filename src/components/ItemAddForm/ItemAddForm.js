import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      label: ''
    };
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.label) {
      this.props.onItemAdded(this.state.label);
    }
    this.setState({ label: '' });
  };

  render() {
    return (
      <form className='itemAddForm d-flex' onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='What needs to be done?'
          className='form-control'
          onChange={this.onLabelChange}
          value={this.state.label} />
        <button type='submit' className='btn btn-outline-secondary'>Add do</button>
      </form>
    );
  };
};