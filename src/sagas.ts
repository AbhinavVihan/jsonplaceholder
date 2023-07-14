import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_DATA } from "./actions";
import axios, { AxiosResponse } from "axios";
import { DataItem } from "./actions";
import { fetchDataFailure, fetchDataSuccess } from "./reducer";

function* fetchDataSaga() {
  try {
    const response: AxiosResponse<DataItem[]> = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDataFailure(error));
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
