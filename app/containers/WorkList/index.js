/**
 *
 * WorkList
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, TextField, Container, CssBaseline, Avatar, Typography, Grid } from '@material-ui/core';
import { Event } from '@material-ui/icons';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import WorkItem from 'components/workItem';
// import makeSelectLogIn from 'containers/LogIn/selectors';
// import reducerLogIn from 'containers/LogIn/reducer';
import makeSelectWorkList from './selectors';
import reducer from './reducer';
import saga from './saga';
import useStyles from './style';
import { GetWorksListRequest, AddWorkRequest, RemoveWorkRequest } from './actions';

export function WorkList(props) {
  useInjectReducer({ key: 'workList', reducer });
  useInjectSaga({ key: 'workList', saga });
  // useInjectReducer({ key: 'logIn', reducerLogIn });
  const classes = useStyles();
  const [input, setInput] = useState('');

  const { dispatch, workList: { list } } = props;
  useEffect(() => {

    dispatch(GetWorksListRequest());
  }, []);

  function addItem() {
    dispatch(AddWorkRequest(input));
    setInput('');
  }

  function removeItem(id) {
    dispatch(RemoveWorkRequest(id));
  }

  return (
    <div>
      <Helmet>
        <title>WorkList</title>
        <meta name="description" content="Description of WorkList" />
      </Helmet>

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Event />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reminder
            </Typography>

          <Grid container>
            <Grid
              className={classes.formRowCell}
              item
              xs={12}
              md={6}
              sm={6}
              lg={6}
            >
              <TextField
                id="outlined-basic"
                label="Activity"
                variant="outlined"
                value={input}
                onChange={event => {
                  setInput(event.target.value);
                }}
              />
            </Grid>
            <Grid
              className={classes.button}
              item
              xs={12}
              md={6}
              sm={6}
              lg={6}
            >
              <Button variant="contained" color="primary" onClick={addItem}>
                Save
        </Button>
            </Grid>
          </Grid>
          {list && list.data && list.data.map((workListItem, index) => (
            <WorkItem key={workListItem} id={index} item={workListItem} onRemove={removeItem} />
          ))}
        </div>
      </Container>
    </div>
  );
}

WorkList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  workList: PropTypes.object,
  // logIn: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  workList: makeSelectWorkList(),
  // logIn: makeSelectLogIn(),
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
)(WorkList);
