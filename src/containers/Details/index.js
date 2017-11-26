import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledPanel } from './styles';
import { fetchAllDetails } from './actions';

import Section from '../../components/Section/index';
import Title from '../../components/Title/index';
import UserDetails from '../../components/UserDetails/index';
import Transcations from '../../components/Transcations/index';
import Summary from '../../components/Summary/index';
import TimeSelect from '../../components/TimeSelect/index';
import TransactionsList from '../../components/TransactionsList/index';

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

  mapToList (item) {
    const date = new Date(item.date).toDateString();
    return {
      id: item.id,
      content: `${date} - ${item.type} - $${item.amount}`,
    };
  }

  render () {
    return (
      <StyledPanel>
        <Section>
          <UserDetails member={this.props.member}/>
        </Section>
        <Section>
          <Title />
        </Section>
        <Section>
          <TimeSelect fetchDetails={this.getDetailsByDateRange.bind(this)}/>
        </Section>
        <Section>
          <Transcations>
            <Summary data={this.props.summary} />
            <TransactionsList data={this.props.list} />
          </Transcations>
        </Section>
      </StyledPanel>
    );
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Details);
