import {USER_REGISTER, ERROR} from "../actions/signUpAction";
import {FETCH_PROFILE_DATA} from "../../blog/profile/actions/getProfileAction";
import {USER_LOG_IN} from '../actions/signInAction';
import {RESET_PASSWORD} from "../actions/resetPassAction";
import {USER_PROFILE_UPDATE} from "../../blog/profile/actions/profileUpdateAction";
import {USER_LOG_OUT} from "../actions/signOutAction";

const initState = {
    data: {},
    error: "",
    message: '',
    isLogged: false
};

function authReducer(state = initState, action) {
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                data: action.data
            };
        case FETCH_PROFILE_DATA:
            return {
                ...state,
                data: action.data
            };
        case USER_PROFILE_UPDATE:
            return {
                ...state,
                data: action.data,
                message: action.message
            };
            case USER_LOG_IN:
            return {
                ...state,
                data: action.data,
                isLogged: action.isLogged
            };
        case USER_LOG_OUT:
            return {
                ...state,
                data: action.data,
                isLogged: action.isLogged
            };
            case RESET_PASSWORD:
            return {
                ...state,
                message: action.message
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
export default authReducer;
