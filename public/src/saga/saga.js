import { takeEvery } from 'redux-saga/effects';
import * as TYPES from '../actions/types';
import {
    fetchGetTracks
} from '../actions/playerAction';

function* mySaga() {
    yield takeEvery(TYPES.GET_TRACKS_REQUEST, fetchGetTracks)
}

export default mySaga