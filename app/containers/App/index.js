/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import styled from 'styled-components';
import HomePage from 'containers/HomePage';

const App = styled.div`
  font-family: 'Helvetica Neue';
  font-weight: lighter;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
 flex: 1;
 display: flex;
`;

export default () => (
  <App>
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Content>
  </App>
);
