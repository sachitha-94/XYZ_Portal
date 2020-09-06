/*
 *
 * WorkList reducer
 *
 */
import produce from 'immer';
import {
  ADD_WORK_REQUEST,
  GET_WORKS_LIST_REQUEST,
  GET_WORKS_LIST_SUCCESS,
  REMOVE_WORK_REQUEST,
} from './constants';

export const initialState = {
  list: {
    isLoading: false,
    isSuccess: false,
    error: '',
    data: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const workListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_WORK_REQUEST:
        draft.list.data = [...state.list.data, action.payload];
        break;
      case REMOVE_WORK_REQUEST:
        draft.list.data = removeWork(state.list, action.payload);
        break;
      case GET_WORKS_LIST_REQUEST:
        draft.list.isLoading = true;
        draft.list.isSuccess = false;
        draft.list.error = '';
        draft.list.data = [];
        break;
      case GET_WORKS_LIST_SUCCESS:
        draft.list.isLoading = false;
        draft.list.isSuccess = true;
        draft.list.data = action.payload.data.data;
        draft.list.error = '';
        break;
    }
  });

const removeWork = (list, id) =>
  list.data.filter((item, index) => index !== id);

export default workListReducer;
