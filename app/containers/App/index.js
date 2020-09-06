/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import LogIn from 'containers/LogIn/Loadable';
import WorkList from 'containers/WorkList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/LogIn/reducer';
import saga from 'containers/LogIn/saga';
import makeSelectLogIn from 'containers/LogIn/selectors';

import GlobalStyle from '../../global-styles';

export function App(props) {
  useInjectReducer({ key: 'logIn', reducer });
  useInjectSaga({ key: 'logIn', saga });

  const {
    logIn: { user },
  } = props;

  return (
    <div>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route
          exact
          path="/reminder"
          component={() => {
            if (user && user.isValid) {
              return <WorkList />;
            }
            return <LogIn />;
          }}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  logIn: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  logIn: makeSelectLogIn(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(App);
