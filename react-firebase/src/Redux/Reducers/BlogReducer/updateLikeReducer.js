import {UPDATE_LIKE, ERROR} from "../../Actions/BlogActions/UpdateLike";
import {UPDATE_LIKE_WITHOUT_LOGIN} from "../../Actions/BlogActions/UpdateLikeWithoutLogin";

const initState = {
    data: {},
    error: "",
    message: '',
};

function updateLikeReducer(state = initState, action) {
    switch (action.type) {
        case UPDATE_LIKE:
            return {
                ...state,
                data: action.data
            };
            case UPDATE_LIKE_WITHOUT_LOGIN:
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
export default updateLikeReducer;
