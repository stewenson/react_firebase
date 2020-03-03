import { FETCH_DATA_BY_ID, ERROR } from "../../Actions/MovieActions/FetchMovieById";

const initState = {
    data: [],
    error: "",
};

function movieReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_DATA_BY_ID:
            return {
                ...state,
                data: action.data
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
export default movieReducer;
