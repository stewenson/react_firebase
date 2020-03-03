import { FETCH_DETAIL_MOVIE, ERROR } from "../../Actions/MovieActions/FetchDetailMovie";

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
