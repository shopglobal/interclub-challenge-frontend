import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MemberList from '../../containers/MembersList/index';
import Details from '../../containers/Details/index';

import { StyledWrapper, StyledLogoLink } from './styles';

export default class App extends Component {
  render () {
    return (
      <StyledWrapper>
        <StyledLogoLink href='https://interclub.io' target='_blank'>
          <img src='/assets/inv_logo_48x48.png' />
        </StyledLogoLink>
        <Switch>
          <Route exact path="/" component={MemberList}/>
          <Route exact path="/details/:id" component={Details}/>
        </Switch>
      </StyledWrapper>
    );
  }
}
