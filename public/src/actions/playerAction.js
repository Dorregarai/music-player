import axios from 'axios';
import * as TYPES from './types';
import { call, put } from 'redux-saga/effects';

const apiGetTracks = page => {
    return axios.get('http://localhost:3001/api/users/', {
        params: {
            page
        }
    })
        .then(response => response.data)
};

export function* fetchGetTracks(action) {
    try {
        const tracks = yield call(apiGetTracks, action.page);
        yield put({ type: TYPES.GET_TRACKS_SUCCESS, payload: tracks })
    } catch (error) {
        yield put({ type: TYPES.GET_TRACKS_FAILURE, payload: error })
    }
}
