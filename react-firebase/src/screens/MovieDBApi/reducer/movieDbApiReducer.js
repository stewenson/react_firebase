import {GET_POPULAR_MOVIES, ERROR} from "../actions/getPopMovAction";
import {GET_POPULAR_SERIES} from "../actions/getPopSeriesAction";
import {GET_FAMILY_MOVIES} from "../actions/getFamilyMovAction";
import {GET_DOCUMENT_MOVIES} from "../actions/getDocumMovieAcrion";
import {GET_DETAIL_MOVIE} from "../actions/getDetailMovieAction";
import {GET_DETAIL_SERIES} from "../actions/getDetailSeriesAction";
import {GET_CREDITS} from "../actions/getCreditsAction";
import {GET_CREDITS_SEASON} from "../actions/getCreditsSeasonAction";
import {GET_VIDEO} from "../actions/getVideoAction";
import axios from "axios";

const initState = {
    movies: [],
    series: [],
    family: [],
    document: [],
    detail: [],
    credits: [],
    video: [],
    token: axios.defaults.headers.common['Authorization'] = [],
    error: "",
};

function movieDbApiReducer(state = initState, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case GET_POPULAR_SERIES:
            return {
                ...state,
                series: action.payload,
            };
        case GET_FAMILY_MOVIES:
            return {
                ...state,
                family: action.payload,
            };
        case GET_DOCUMENT_MOVIES:
            return {
                ...state,
                document: action.payload,
            };
        case GET_DETAIL_MOVIE:
            return {
                ...state,
                detail: action.payload,
            };
        case GET_DETAIL_SERIES:
            return {
                ...state,
                detail: action.payload,
            };
        case GET_CREDITS:
            return {
                ...state,
                credits: action.payload,
            };
        case GET_CREDITS_SEASON:
            return {
                ...state,
                credits: action.payload,
            };
        case GET_VIDEO:
            return {
                ...state,
                video: action.payload,
                token: action.token
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
export default movieDbApiReducer;
