import {USER_REGISTER, ERROR} from "../../Actions/AuthActions/UserRegistration";
import {FETCH_PROFILE_DATA} from "../../Actions/AuthActions/UserProfile";
import {USER_LOG_IN} from '../../Actions/AuthActions/UserLogIn';
import {RESET_PASSWORD} from "../../Actions/AuthActions/ResetPassword";
import {USER_PROFILE_UPDATE} from "../../Actions/AuthActions/UserProfileUpdate";

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
