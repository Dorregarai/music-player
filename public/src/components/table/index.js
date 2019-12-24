import ContentTable from "./ContentTable";
import * as TYPES from '../../actions/types';
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        data: state.playerReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTracksAll: page => {
            dispatch({
                type: TYPES.GET_TRACKS_REQUEST,
                page
            })
        },
        userLogIn: () => {
            dispatch({
                type: TYPES.POST_USER_LOG_REQUEST
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentTable)