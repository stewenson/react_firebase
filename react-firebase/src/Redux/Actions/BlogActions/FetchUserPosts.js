import app from "../../../config/base";

export const FETCH_USERS_POSTS = "FETCH_USERS_POSTS";
export const ERROR = "ERROR";

export const FetchUserPosts = (uid) => {
    return dispatch => {
        console.log(uid)
        app.firestore()
            .collection("blog")
            .where('userId', '==', uid)
            .orderBy('created', 'desc')
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_USERS_POSTS,
                    data: res.docs.map(doc => ({...doc.data(), id: doc.id}))
                });
            }).catch(function(error) {
            alert(error.message);
        });
    };
};
