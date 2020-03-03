import movieReducer from './MovieReducer/movieReducer';
import movieDetailReducer from './MovieReducer/movieReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    detailMovie: movieDetailReducer
});

export default rootReducer;