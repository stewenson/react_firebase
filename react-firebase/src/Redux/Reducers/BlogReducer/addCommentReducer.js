import {ADD_NEW_COMMENT, MESSAGE, ERROR} from "../../Actions/BlogActions/AddComment";

const initState = {
    data: {},
    error: "",
    msg: '',
};

function addCommentReducer(state = initState, action) {
    switch (action.type) {
        case ADD_NEW_COMMENT:
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
export default addCommentReducer;
