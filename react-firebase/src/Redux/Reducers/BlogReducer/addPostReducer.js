import {ADD_NEW_POST, MESSAGE, ERROR} from "../../Actions/BlogActions/AddNewPost";

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
