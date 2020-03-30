import movieReducer from './MovieReducer/movieReducer';
import movieDetailReducer from './MovieReducer/movieDetailReducer';
import todoReducer from "./TodoReducer/todoReducer";
import authReducer from './AuthReducer/authReducer';
import addPostReducer from './BlogReducer/addPostReducer';
import fetchAllPostsReducer from './BlogReducer/fetchAllPostsReducer';
import fetchUserPostsReducer from './BlogReducer/fetchUserPostsReducer';
import updateLikeReducer from "./BlogReducer/updateLikeReducer";
import fetchDetailPostReducer from "./BlogReducer/fetchDetailPostReducer";
import addCommentReducer from "./BlogReducer/addCommentReducer";
import fetchAllCommentsReducer from "./BlogReducer/fetchAllCommentsReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    detailMovie: movieDetailReducer,
    todo: todoReducer,
    auth: authReducer,
    blog: addPostReducer,
    allBlogPosts: fetchAllPostsReducer,
    userBlogPosts: fetchUserPostsReducer,
    updateLike: updateLikeReducer,
    detailPost: fetchDetailPostReducer,
    comments: addCommentReducer,
    fetchAllComments: fetchAllCommentsReducer
});

export default rootReducer;