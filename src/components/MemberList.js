/* eslint-disable no-console */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MemberItem from './MemberItem';
import fetchMembersList from '../actions/fetchMembersList';


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

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px calc((100vw - 860px) / 2);
    justify-content: space-between;
`;

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
