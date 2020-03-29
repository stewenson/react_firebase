import movieReducer from './MovieReducer/movieReducer';
import movieDetailReducer from './MovieReducer/movieDetailReducer';
import todoReducer from "./TodoReducer/todoReducer";
import authReducer from './AuthReducer/authReducer';
import addPostReducer from './BlogReducer/addPostReducer';
import fetchAllPostsReducer from './BlogReducer/fetchAllPostsReducer';
import fetchUserPostsReducer from './BlogReducer/fetchUserPostsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    detailMovie: movieDetailReducer,
    todo: todoReducer,
    auth: authReducer,
    blog: addPostReducer,
    allBlogPosts: fetchAllPostsReducer,
    userBlogPosts: fetchUserPostsReducer
});

export default rootReducer;