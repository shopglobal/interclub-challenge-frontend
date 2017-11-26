import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import MemberList from '../../containers/MembersList/index';
import Details from '../../containers/Details/index';

import { StyledWrapper, StyledLogoLink } from './styles';

export default class App extends Component {
  render () {
    return (
      <StyledWrapper>
        <Link to="/">
          <StyledLogoLink>
            <img src='/assets/inv_logo_48x48.png' />
          </StyledLogoLink>
        </Link>
        <Switch>
          <Route exact path="/" component={MemberList}/>
          <Route exact path="/details/:id" component={Details}/>
        </Switch>
      </StyledWrapper>
    );
  }
}
