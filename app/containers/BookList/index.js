/**
 *
 * BookList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import BookInfo from 'components/BookInfo';
import injectReducer from 'utils/injectReducer';
import makeSelectBookList from './selectors';
import reducer from './reducer';

const SBookList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function BookList(props) {
  const { booklist } = props;
  console.log(booklist);
  return (
    <SBookList>
      { booklist.map((book, index) => <div key={ index }> <BookInfo {...book} /> </div>) }
    </SBookList>
  );
}

BookList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  booklist: makeSelectBookList(),
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

const withReducer = injectReducer({ key: 'booklist', reducer });

export default compose(
  withReducer,
  withConnect,
)(BookList);
