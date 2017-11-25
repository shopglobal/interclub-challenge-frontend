import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledPanel } from './styles';

import Section from '../../components/Section/index';
import UserDetails from '../../components/UserDetails/index';
import Transcations from '../../components/Transcations/index';
import Summary from '../../components/Summary/index';

const matchStateToProps = (state) => {
  const { list, summary, member } = state.details;

  return { list, summary, member };
};


class Details extends Component {
  render () {
    return (
      <StyledPanel>
        <Section>
          <UserDetails member={this.props.member}/>
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

export default connect(matchStateToProps, () => {})(Details);
