import {FETCH_DETAIL_POST} from "../../Actions/BlogActions/FetchDetailPost";
import {ERROR} from "../../Actions/MovieActions/FetchMovieById";
import {MESSAGE} from "../../Actions/TodoActions/createTodo";

const initState = {
    data: {},
    error: "",
    msg: '',
};

function fetchDetailPostReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_DETAIL_POST:
            return {
                ...state,
                data: action.data
            };
        case ERROR:
            return {
                ...state,
                error: action.msg
            };
        case MESSAGE:
            return {
                ...state,
                msg: action.msg
            };
        default:
            return state;
    }
}
export default fetchDetailPostReducer;
