import firebase from "../../../../config/base";

export const FETCH_USERS_POSTS = "FETCH_USERS_POSTS";
export const ERROR = "ERROR";

export const GetMyPostsAction = (uid) => {
    return dispatch => {
        firebase.firestore()
            .collection("blog")
            .where('userId', '==', uid)
            .orderBy('created', 'desc')
            .get()
            .then(res =>
                dispatch({
                    type: FETCH_USERS_POSTS,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                })
            )
            .catch(function(error) {
            alert(error.message);
        });
    };
};
