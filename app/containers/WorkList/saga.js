import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from './services';
import { GetWorksListSuccess, GetWorksListError } from './actions';
import { GET_WORKS_LIST_REQUEST } from './constants';

function* getWorksList() {
  try {
    const response = yield call(Api.getWorksListURL);
    if (
      response &&
      response.status === 200
    ) {
      yield put(GetWorksListSuccess(response));
    } else {
      yield put(GetWorksListError(''));
    }
  } catch (error) {
    yield put(GetWorksListError(error));
  }
}



export default function* workListSaga() {
  yield takeLatest(GET_WORKS_LIST_REQUEST, getWorksList);
}
