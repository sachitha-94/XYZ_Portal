/*
 *
 * LogIn actions
 *
 */

import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  UPDAE_USER_IS_VALID,
  GET_USER_INFO_ERROR,
} from './constants';

export function GetUserInfoRequest(payload) {
  return {
    type: GET_USER_INFO_REQUEST,
    payload,
  };
}

export function GetUserInfoSuccess(payload) {
  return {
    type: GET_USER_INFO_SUCCESS,
    payload,
  };
}

export function GetUserInfoError(payload) {
  return {
    type: GET_USER_INFO_ERROR,
    payload,
  };
}

export function UpdateUserIsValid(payload) {
  return {
    type: UPDAE_USER_IS_VALID,
    payload,
  };
}
