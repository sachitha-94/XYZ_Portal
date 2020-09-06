import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the logIn state domain
 */

const selectLogInDomain = state => state.logIn || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LogIn
 */

const makeSelectLogIn = () =>
  createSelector(
    selectLogInDomain,
    substate => substate,
  );

export default makeSelectLogIn;
export { selectLogInDomain };
