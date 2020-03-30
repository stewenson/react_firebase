import app from "../../../config/base";

export const FETCH_ALL_COMMENTS = "FETCH_ALL_COMMENTS";
export const ERROR = "ERROR";

export const FetchAllComments = (query) => {
    return dispatch => {
        app.firestore()
            .collection("comments")
            .where('postId', '==', query)
            .orderBy('created', 'desc')
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_ALL_COMMENTS,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
