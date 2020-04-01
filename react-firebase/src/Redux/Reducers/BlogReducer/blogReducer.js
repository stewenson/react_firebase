import {ADD_NEW_POST, MESSAGE, ERROR} from "../../Actions/BlogActions/AddNewPost";
import {FETCH_ALL_POSTS} from "../../Actions/BlogActions/FechAllPost";
import {FETCH_USERS_POSTS} from "../../Actions/BlogActions/FetchUserPosts";
import {UPDATE_LIKE} from "../../Actions/BlogActions/UpdateLike";
import {UPDATE_LIKE_WITHOUT_LOGIN} from "../../Actions/BlogActions/UpdateLikeWithoutLogin";
import {FETCH_DETAIL_POST} from "../../Actions/BlogActions/FetchDetailPost";
import {FETCH_ALL_COMMENTS} from "../../Actions/BlogActions/FetchAllComments";
import {ADD_NEW_COMMENT} from "../../Actions/BlogActions/AddComment";


const initState = {
    addPost: {},
    addComment: {},
    fetchAllPost: {},
    fetchAllComments: {},
    detailPost: {},
    userPosts: {},
    likePerPost: {},
    error: "",
    msg: '',
};

function blogReducer(state = initState, action) {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                addPost: action.data
            };
        case ADD_NEW_COMMENT:
            return {
                ...state,
                addComment: action.data
            };
        case FETCH_ALL_POSTS:
            return {
                ...state,
                fetchAllPost: action.data
            };
        case FETCH_USERS_POSTS:
            return {
                ...state,
                userPosts: action.data
            };
        case FETCH_DETAIL_POST:
            return {
                ...state,
                detailPost: action.data
            };
        case FETCH_ALL_COMMENTS:
            return {
                ...state,
                fetchAllComments: action.data
            };
        case UPDATE_LIKE:
            return {
                ...state,
                likePerPost: action.data
            };
        case UPDATE_LIKE_WITHOUT_LOGIN:
            return {
                ...state,
                likePerPost: action.data
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
export default blogReducer;
