import firebase from "../../../../config/base";

export const FETCH_POSTS_BY_CATEGORY = "FETCH_POSTS_BY_CATEGORY";
export const ERROR = "ERROR";

export const filterPostsAction = (category) => {
    return dispatch => {
        firebase.firestore()
            .collection("blog")
            .where('category', '==', category)
            .orderBy('created', 'desc')
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_POSTS_BY_CATEGORY,
                    payload: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
