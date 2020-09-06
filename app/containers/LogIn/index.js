/**
 *
 * LogIn
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Avatar,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import useStyles from './style';
import { GetUserInfoRequest, UpdateUserIsValid } from './actions';

export function LogIn(props) {
  useInjectReducer({ key: 'logIn', reducer });
  useInjectSaga({ key: 'logIn', saga });
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { dispatch, logIn: { user }, history } = props;

  const logInButtonOnClick = () => {
    if (email && password) {
      dispatch(GetUserInfoRequest(email));
    } else {
      setIsValid(false);
      setErrorMessage('Please enter Email & Password');
    }
  };

  const emailOnchange = (input) => {
    setEmail(input);
    setIsValid(true);
    setErrorMessage('');
  }

  const passwordOnchange = (input) => {
    setPassword(input);
    setIsValid(true);
    setErrorMessage('');
  }

  useEffect(() => {
    if (Object.keys(user.data).length !== 0) {
      if (email === user.data.email && password === user.data.password) {
        dispatch(UpdateUserIsValid(true));
        history.push('/reminder');
      } else {
        setIsValid(false);
        setErrorMessage('Please enter correct Email & Password');
        dispatch(UpdateUserIsValid(true));
      }
    }
  }, [user.data])

  return (
    <div>
      <Helmet>
        <title>LogIn</title>
        <meta name="description" content="Description of LogIn" />
      </Helmet>

      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              XYZ Portal
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => emailOnchange(e.target.value)}
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => passwordOnchange(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={logInButtonOnClick}
              value={password}
            >
              Sign In
            </Button>
            {!isValid && <Typography variant="caption" display="block" gutterBottom color='error'>
              {errorMessage}
            </Typography>}
          </div>
        </Container>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  logIn: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  logIn: makeSelectLogIn(),
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

export default compose(
  withConnect,
  memo,
)(LogIn);
