import app from "../../../config/base";

export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const ERROR = "ERROR";

export const FetchAllPosts = () => {
    return dispatch => {
        app.firestore()
            .collection("blog")
            .orderBy('created', 'desc')
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_ALL_POSTS,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
