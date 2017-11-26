import React, { Component } from 'react';

import { StyledWrapper } from './styles';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const milliseconds = {
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 4 * 7 * 24 * 60 * 60 * 1000,
};

const options = [
  { value: 0, label: 'All time' },
  { value: 1 * milliseconds.week, label: '1 Week' },
  { value: 2 * milliseconds.week, label: '2 Weeks' },
  { value: 1 * milliseconds.month, label: '1 Month' },
  { value: 3 * milliseconds.month, label: '3 Months' },
  { value: 6 * milliseconds.month, label: '6 Months' },
  { value: 12 * milliseconds.month, label: '12 Months' },
  { value: 18 * milliseconds.month, label: '18 Months' },
  { value: 24 * milliseconds.month, label: '24 Months' },
];

export default class TimeSelect extends Component {
  constructor () {
    super();
    this.state = {
      value: 0,
    };
  }

  handleChange (value) {
    this.setState({
      ...this.state,
      value,
    });

    if (value !== 0) return this.props.fetchDetails(value);

    return undefined;
  }

  render () {
    return (
      <StyledWrapper>
        <Select
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
          style={{ width: 245 }}
          clearable={false}
          searchable={false}
          options={options} />
      </StyledWrapper>
    );
  }
}
