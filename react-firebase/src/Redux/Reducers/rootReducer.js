import movieReducer from './MovieReducer/movieReducer';
import movieDetailReducer from './MovieReducer/movieDetailReducer';
import todoReducer from "./TodoReducer/todoReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    detailMovie: movieDetailReducer,
    todo: todoReducer
});

export default rootReducer;