import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };
  };

  onTermChange = (e) => {
    this.setState({
      term: e.target.value
    });
    this.props.onSearchChange(e.target.value);
  };

  render() {
    return (
      <input type='text'
        placeholder='type to search'
        className='form-control'
        onChange={this.onTermChange}
        value={this.state.term} />
    );
  };
};