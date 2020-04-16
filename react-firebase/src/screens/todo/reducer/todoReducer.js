import {FETCH_ALL_TODO} from "../actions/getAllTodoAction";
import {COMPLETE_TODO} from "../actions/completeTodoAction";
import {DELETE_TODO} from "../actions/deleteTodoAction";
import {FETCH_COMPLETE_TODO} from "../actions/getCompleteAction";
import {ADD_TODO, MESSAGE, ERROR} from "../actions/addTodoAction";
import {CLEAR_MESSAGE} from "../actions/clearMessageAction";

const initState = {
    data: {},
    getAll: {},
    getComplete: {},
    complete: "",
    delete: "",
    error: "",
    msg: "",
};

function todoReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: action.payload
            };
        case FETCH_ALL_TODO:
            return {
                ...state,
                getAll: action.data
            };
        case FETCH_COMPLETE_TODO:
            return {
                ...state,
                getComplete: action.payload
            };
        case COMPLETE_TODO:
            return {
                ...state,
                complete: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                delete: action.payload
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        case MESSAGE:
            return {
                ...state,
                msg: action.payload
            };
        case CLEAR_MESSAGE:
            return {
                ...state,
                msg: action.payload
            };
        default:
            return state;
    }
}
export default todoReducer;
