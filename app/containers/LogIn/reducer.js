/*
 *
 * LogIn reducer
 *
 */
import produce from 'immer';
import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  UPDAE_USER_IS_VALID,
} from './constants';

export const initialState = {
  user: {
    isLoading: false,
    isSuccess: false,
    isValid: false,
    error: '',
    data: {},
  },
};

/* eslint-disable default-case, no-param-reassign */
const logInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_INFO_REQUEST:
        draft.user.isLoading = true;
        draft.user.isSuccess = false;
        draft.user.error = '';
        draft.user.data = {};
        break;
      case GET_USER_INFO_SUCCESS:
        draft.user.isLoading = false;
        draft.user.isSuccess = true;
        draft.user.error = '';
        draft.user.data = action.payload.data;
        break;
      case GET_USER_INFO_ERROR:
        draft.user.isLoading = false;
        draft.user.isSuccess = false;
        draft.user.error = action.payload;
        draft.user.data = {};
        break;
      case UPDAE_USER_IS_VALID:
        draft.user.isValid = action.payload;
        break;
    }
  });

export default logInReducer;
