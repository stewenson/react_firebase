import {GET_POPULAR_MOVIES, ERROR} from "../actions/getPopMovAction";
import {GET_POPULAR_SERIES} from "../actions/getPopSeriesAction";
import {GET_FAMILY_MOVIES} from "../actions/getFamilyMovAction";
import {GET_DOCUMENT_MOVIES} from "../actions/getDocumMovieAcrion";
import {GET_DETAIL_MOVIE} from "../actions/getDetailMovieAction";
import {GET_CREDITS} from "../actions/getCreditsAction";
import {GET_CREDITS_SEASON} from "../actions/getCreditsSeasonAction";
import {GET_VIDEO} from "../actions/getVideoAction";
import {GET_TOKEN} from "../actions/getTokenAction";
import {GET_REVIEWS} from "../actions/getReviewsAction";
import {SEARCH_ERROR, SEARCH_MOVIE} from "../actions/searchAction";
import {CLEAR_DATA} from "../actions/clearDetailAction";
import {GET_RECOMMANDATIONS} from "../actions/getRecommAction";

const initState = {
    movies: [],
    series: [],
    family: [],
    document: [],
    detail: [],
    credits: [],
    video: [],
    token: [],
    reviews: [],
    searchResult: [],
    recommendations: [],
    title: [],
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
        case CLEAR_DATA:
            return {
                ...state,
                detail: action.payload,
                movies: action.payload,
                series: action.payload,
                family: action.payload,
                document: action.payload,
                credits: action.payload,
                video: action.payload,
                token: action.payload,
                reviews: action.payload,
                searchResult: action.payload,
                title: action.payload,
                error: "",
            };
        case GET_CREDITS:
            return {
                ...state,
                credits: action.payload,
            };
        case GET_RECOMMANDATIONS:
            return {
                ...state,
                recommendations: action.payload,
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
            };
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
            };
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case SEARCH_MOVIE:
            return {
                ...state,
                searchResult: action.payload,
                title: action.title
            };
        case SEARCH_ERROR:
            return {
                ...state,
                error: action.payload,
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
