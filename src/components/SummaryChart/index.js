import React, { Component } from 'react';

import { StyledWrapper } from './styles';

import { CirclePie } from 'salad-ui.chart';

const chartSize = 175;

export default class SummaryChart extends Component {
  constructor (props) {
    super()
    this.state = {
      percent: 0,
    }
  }

  componentWillMount () {
    this.setState({
      ...this.state,
      percent: this.getPercent(this.props.data)
    })
  }

  getPercent ({ totalExpense, totalIncome }) {
    console.log({ totalExpense, totalIncome })
    const sum = totalExpense + totalIncome;
    return (100 * (totalIncome / sum)).toFixed(2);
  }

  render () {
    return (
      <StyledWrapper>
        <CirclePie
          width={chartSize}
          strokeWidth={7}
          percent={this.state.percent}
          strokeColor="#00D071"
          fillColor="#00000000" />
      </StyledWrapper>
    );
  }
}
