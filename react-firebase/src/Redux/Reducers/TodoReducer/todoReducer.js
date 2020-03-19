import {ADD_TODO} from "../../Actions/TodoActions/createTodo";
import {ERROR} from "../../Actions/MovieActions/FetchMovieById";
import {MESSAGE} from "../../Actions/TodoActions/createTodo";
import {FETCH_ALL_TODO} from "../../Actions/TodoActions/FetchAllTodo";
import {COMPLETE_TODO} from "../../Actions/TodoActions/CompleteTodo";
import {DELETE_TODO} from "../../Actions/TodoActions/DeleteTodo";

const initState = {
    data: {},
    fetchData: {},
    complete: "",
    delete: "",
    error: "",
    msg: '',
};

function todoReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: action.data
            };
        case FETCH_ALL_TODO:
            return {
                ...state,
                fetchData: action.data
            };
        case COMPLETE_TODO:
            return {
                ...state,
                complete: action.data
            };
        case DELETE_TODO:
            return {
                ...state,
                delete: action.data
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
export default todoReducer;
