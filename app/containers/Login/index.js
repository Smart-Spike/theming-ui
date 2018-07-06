/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';


const FieldContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 1rem;
`;

const Field = styled.input`
  border: 1px solid #aaa;
  border-radius: 3px;
`;


const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Login() {
  return (
    <Content>
      <FieldContainer>
        Email
        <Field/>

        Password
        <Field/>
      </FieldContainer>
    </Content>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });

export default compose(
  withReducer,
  withConnect,
)(Login);
