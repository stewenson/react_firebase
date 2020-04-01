import movieReducer from './MovieReducer/movieReducer';
import movieDetailReducer from './MovieReducer/movieDetailReducer';
import todoReducer from "./TodoReducer/todoReducer";
import authReducer from './AuthReducer/authReducer';
import blogReducer from "./BlogReducer/blogReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    detailMovie: movieDetailReducer,
    todo: todoReducer,
    auth: authReducer,
    blog: blogReducer,
});

export default rootReducer;