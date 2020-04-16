import {ADD_NEW_POST, MESSAGE, ERROR} from "../actions/postAction/createPostsAction";
import {FETCH_ALL_POSTS} from "../actions/postAction/getAllPostsAction";
import {FETCH_USERS_POSTS} from "../actions/postAction/getMyPostsAction";
import {FETCH_CATEGORIES} from "../actions/getCategoriesAction";
import {UPDATE_LIKE} from "../actions/postAction/likeUpdateAction";
import {FETCH_DETAIL_POST} from "../actions/postAction/getDetailPostAction";
import {FETCH_ALL_COMMENTS} from "../actions/commentAction/getCommentsAction";
import {ADD_NEW_COMMENT} from "../actions/commentAction/createCommentAction";
import {DELETE_POST} from "../actions/postAction/deletePostsAction";
import {UPDATE_POST} from "../actions/postAction/postUpdateAction";
import {CLEAR_DATA_AFTER_EDIT} from "../actions/postAction/ClearAfterEdit";
import {CLEAR_MESSAGE} from '../actions/postAction/clearMessageAction'
import {FETCH_POSTS_BY_CATEGORY} from "../actions/postAction/filterPostsAction";


const initState = {
    addPost: {},
    addComment: {},
    fetchAllPost: {},
    fetchPostsByCategory: {},
    fetchAllComments: {},
    fetchCategories: {},
    detailPost: {},
    userPosts: {},
    likePerPost: {},
    deletedId: {},
    editPost: {},
    error: "",
    msg: "",
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
        case FETCH_POSTS_BY_CATEGORY:
            return {
                ...state,
                fetchPostsByCategory: action.payload
            };
        case UPDATE_POST:
            return {
                ...state,
                editPost: action.data
            };
        case CLEAR_DATA_AFTER_EDIT:
            return {
                ...state,
                editPost: action.data
            };
            case CLEAR_MESSAGE:
            return {
                ...state,
                msg: action.data
            };
        case DELETE_POST:
            return {
                ...state,
                deletedId: action.payload
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
            case FETCH_CATEGORIES:
            return {
                ...state,
                fetchCategories: action.data
            };
        case UPDATE_LIKE:
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
