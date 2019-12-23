import ContentTable from "./ContentTable";
import {
    getTracksAll
} from "../../actions/playerAction";
import { connect } from "react-redux";

function mapStateToProps(state) {
    console.log(state);
    return {
        data: state.playerReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTracksAll: page => dispatch(getTracksAll(page, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentTable)