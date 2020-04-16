import movieReducer from '../../screens/movie/reducer/movieReducer';
import movieDetailReducer from '../../screens/movie/reducer/movieDetailReducer';
import todoReducer from "../../screens/todo/reducer/todoReducer";
import authReducer from '../../screens/Auth/reducer/authReducer';
import blogReducer from "../../screens/blog/reducer/blogReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    detailMovie: movieDetailReducer,
    auth: authReducer,
    blog: blogReducer,
    todo: todoReducer,
});

export default rootReducer;