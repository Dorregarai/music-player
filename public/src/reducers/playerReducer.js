//import { PlayerAction } from '../actions';
import { GET_TRACKS_SUCCESS } from "../constants/constants";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case GET_TRACKS_SUCCESS:
            return {
                ...state,
                data: action.payload.tracks.result
            };
        default:
            return state;
    }
}