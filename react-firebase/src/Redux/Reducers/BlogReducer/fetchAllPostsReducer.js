import {FETCH_ALL_POSTS} from "../../Actions/BlogActions/FechAllPost";
import {ERROR} from "../../Actions/MovieActions/FetchMovieById";
import {MESSAGE} from "../../Actions/TodoActions/createTodo";

const initState = {
    data: {},
    error: "",
    msg: '',
};

function fetchAllPostsReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_ALL_POSTS:
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
export default fetchAllPostsReducer;
