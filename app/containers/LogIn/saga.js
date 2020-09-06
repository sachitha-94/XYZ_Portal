import { takeLatest, call, put } from 'redux-saga/effects';
import * as Api from './services';
import { GetUserInfoError, GetUserInfoSuccess } from './actions';
import { GET_USER_INFO_REQUEST } from './constants';

function* getUserInfo(payload) {
  try {

    const response = yield call(Api.getUserInfoURL, payload);

    if (
      response &&
      response.status === 200
    ) {

      yield put(GetUserInfoSuccess(response));
    } else {
      yield put(GetUserInfoError('error'));
    }
  } catch (error) {
    yield put(GetUserInfoError(error));
  }
}


export default function* logInSaga() {
  yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo);
}
