import { put, takeLatest, call, all, fork } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDataSaga(action) {
    try {
        const response = yield call(axios.post, "https://tender-wig-dog.cyclic.app/manage/post", action.payload);
        yield put({ type: 'FETCH_DATA_SUCCESS', payload: response });
    } catch (error) {
        yield put({ type: 'FETCH_DATA_ERROR', error });
    }
}

function* fetchPostDataSaga(action) {
    try {
        const response = yield call(axios.get, "http://localhost:8000/manage/post");
        yield put({ type: 'FETCH_POST_DATA_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_POST_DATA_ERROR', error });
    }
}

function* watchFetchData() {
    yield takeLatest('FETCH_DATA', fetchDataSaga);
}

function* watchFetchPostData() {
    yield takeLatest('FETCH_POST_DATA', fetchPostDataSaga);
}

export default function* rootSaga() {
    yield all([
        fork(watchFetchData),
        fork(watchFetchPostData),
    ]);
}
