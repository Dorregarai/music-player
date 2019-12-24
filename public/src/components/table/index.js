import ContentTable from "./ContentTable";
import * as TYPES from '../../actions/types';
import { connect } from "react-redux";

function mapStateToProps(state) {
    console.log(state.playerReducer.data);
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentTable)