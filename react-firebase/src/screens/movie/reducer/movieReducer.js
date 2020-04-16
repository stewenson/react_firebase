import { FETCH_DATA_BY_ID, ERROR } from "../actions/searchAction";

const initState = {
    data: [],
    title: '',
    error: "",
};

function movieReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_DATA_BY_ID:
            return {
                ...state,
                data: action.data,
                title: action.title
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
export default movieReducer;
