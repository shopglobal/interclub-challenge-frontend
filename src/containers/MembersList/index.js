/* eslint-disable no-console */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemberItem from '../../components/MemberItem/index';
import { fetchMembersList } from './actions';

import { StyledWrapper } from './styles';


function mapStateToProps (state) {
  return {
    members: state.membersList,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getMembersList () {
      fetchMembersList(dispatch);
    },
  };
}


class MemberList extends Component {
  componentWillMount () {
    this.props.getMembersList();
  }

  render () {
    if (this.props.error) {
      return (
        <StyledWrapper>
          {this.props.error}
        </StyledWrapper>
      );
    }

    const mappedMembers =
      this.props.members.list.map(member =>
          <MemberItem member={member} key={member.id} />);

    return (
      <StyledWrapper>
        {mappedMembers}
      </StyledWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
