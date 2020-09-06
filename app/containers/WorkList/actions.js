/*
 *
 * WorkList actions
 *
 */

import {
  ADD_WORK_REQUEST,
  GET_WORKS_LIST_REQUEST,
  GET_WORKS_LIST_SUCCESS,
  GET_WORKS_LIST_ERROR,
  REMOVE_WORK_REQUEST,
} from './constants';

export function AddWorkRequest(payload) {
  return {
    type: ADD_WORK_REQUEST,
    payload,
  };
}

export function RemoveWorkRequest(payload) {
  return {
    type: REMOVE_WORK_REQUEST,
    payload,
  };
}

export function GetWorksListRequest() {
  return {
    type: GET_WORKS_LIST_REQUEST,
  };
}

export function GetWorksListSuccess(payload) {
  return {
    type: GET_WORKS_LIST_SUCCESS,
    payload,
  };
}

export function GetWorksListError(payload) {
  return {
    type: GET_WORKS_LIST_ERROR,
    payload,
  };
}
