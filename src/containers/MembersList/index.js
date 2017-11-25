/* eslint-disable no-console */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemberItem from '../../components/MemberItem/index';
import Details from '../../components/Details/index';
import { fetchMembersList, hideOtherMembers } from './actions';

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
    hideMembers (member) {
      hideOtherMembers(dispatch, member.id);
    },
  };
}

class MemberList extends Component {
  componentWillMount () {
    this.props.getMembersList();
  }

  memberClickHandler (member) {
    this.props.hideMembers(member);
  }

  render () {
    // if (this.props.error) {
    //   return (
    //     <StyledWrapper>
    //       {this.props.error}
    //     </StyledWrapper>
    //   );
    // }
    //
    // const mappedMembers =
    //   this.props.members.list.map(member =>
    //     <MemberItem
    //       clickHandler={this.memberClickHandler.bind(this)}
    //       member={member}
    //       key={member.id} />);
    //
    // return (
    //   <StyledWrapper>
    //     {mappedMembers}
    //   </StyledWrapper>
    // );
    return (
      <Details />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
