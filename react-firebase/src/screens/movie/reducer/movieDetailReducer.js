import {FETCH_DETAIL_MOVIE, ERROR,} from "../actions/getDetailAction";
import {CLEAR_DETAIL_MOVIE_DATA} from "../actions/clearAction";

const initState = {
    detailData: [],
    error: "",
};


function movieDetailReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_DETAIL_MOVIE:
            return {
                ...state,
                detailData: action.detailData
            };
        case CLEAR_DETAIL_MOVIE_DATA:
            return {
                ...state,
                detailData: action.detailData
            };
        case ERROR:
            return {
                ...state,
                error: action.msg
            };
        default:
            return state;
    }
}
export default movieDetailReducer;