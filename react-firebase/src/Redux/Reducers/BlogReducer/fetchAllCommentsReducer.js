import {FETCH_ALL_COMMENTS, ERROR} from "../../Actions/BlogActions/FetchAllComments";


const initState = {
    data: {},
    error: "",
    msg: '',
};

function fetchAllCommentsReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_ALL_COMMENTS:
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
export default fetchAllCommentsReducer;
