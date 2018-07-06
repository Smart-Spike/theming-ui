import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the bookList state domain
 */

const selectBookListDomain = state => state.get('bookList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BookList
 */

const makeSelectBookList = () =>
  createSelector(selectBookListDomain, substate => substate.toJS());

export default makeSelectBookList;
export { selectBookListDomain };
