import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  IconButton,
  List,
  Grid,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import useStyles from './style';

const WorkItem = ({ id, item, onRemove }) => {
  const classes = useStyles();
  return (
    <List>
      <ListItem>
        <Grid className={classes.item} item xs={12}>
          <ListItemText primary={item} />
        </Grid>
        <Grid className={classes.itemButton} item xs={12}>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              onRemove(id);
            }}
          >
            <Delete />
          </IconButton>
        </Grid>
      </ListItem>
    </List>
  );
};

WorkItem.propTypes = {
  id: PropTypes.any,
  item: PropTypes.string,
  onRemove: PropTypes.func,
};

export default WorkItem;
