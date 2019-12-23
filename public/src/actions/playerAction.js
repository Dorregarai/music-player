import axios from 'axios';
import {
    GET_TRACKS_SUCCESS,
    GET_TRACKS_PENDING
} from '../constants/constants';

export const getTracksAll = (page, dispatch) => {
    axios
        .get('http://localhost:3001/api/users/', {
            params: {
                page
            }
    })
        .then((response) => {
            //console.log(response);
            dispatch(
                {
                type: GET_TRACKS_SUCCESS,
                payload: {
                    tracks: response.data
                }
            })
        });
    return {
        type: GET_TRACKS_PENDING
    }
};

