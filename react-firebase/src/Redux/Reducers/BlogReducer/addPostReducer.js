import {ADD_NEW_POST} from "../../Actions/BlogActions/AddNewPost";
import {ERROR} from "../../Actions/MovieActions/FetchMovieById";
import {MESSAGE} from "../../Actions/TodoActions/createTodo";

const initState = {
    data: {},
    error: "",
    msg: '',
};

function addPostReducer(state = initState, action) {
    switch (action.type) {
        case ADD_NEW_POST:
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
export default addPostReducer;
