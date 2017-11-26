import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledPanel } from './styles';
import { fetchAllDetails } from './actions';

import Section from '../../components/Section/index';
import UserDetails from '../../components/UserDetails/index';
import Transcations from '../../components/Transcations/index';
import Summary from '../../components/Summary/index';
import TimeSelect from '../../components/TimeSelect/index';

const matchStateToProps = (state) => {
  const { list, summary, member } = state.details;

  return { list, summary, member };
};

const matchDispatchToProps = (dispatch) => {
  return {
    fetchDetails (params) {
      fetchAllDetails(params, dispatch);
    },
  };
};

class Details extends Component {
  componentWillMount () {
    this.getDetails(this.props.match.params);
  }

  getDetails (params) {
    this.props.fetchDetails(params);
  }

  getDetailsByDateRange (select, dateInveral = select.value) {
    if (!dateInveral) return this.getDetails(this.props.match.params);

    const end = new Date(); // today
    const start = new Date(end.getTime() - dateInveral);

    const params = {
      ...this.props.match.params,
      start,
      end,
    };

    return this.props.fetchDetails(params);
  }

  render () {
    return (
      <StyledPanel>
        <Section>
          <UserDetails member={this.props.member}/>
        </Section>
        <Section>
          <TimeSelect fetchDetails={this.getDetailsByDateRange.bind(this)}/>
        </Section>
        <Section>
          <Transcations>
            <Summary data={this.props.summary} />
          </Transcations>
        </Section>
      </StyledPanel>
    );
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Details);
