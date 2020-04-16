import firebase from "../../../../config/base";

export const FETCH_ALL_COMMENTS = "FETCH_ALL_COMMENTS";
export const ERROR = "ERROR";

export const GetCommentsAction = (query) => {
    return dispatch => {
        firebase.firestore()
            .collection('blog')
            .doc(query)
            .collection('comments')
            .orderBy('created', 'desc')
            .get()
            .then(doc => {
                dispatch({
                    type: FETCH_ALL_COMMENTS,
                    data: doc.docs.map(doc => ({...doc.data(), id: doc.id}))
                })
            }).catch(e =>  {
            dispatch({
                type: ERROR,
                msg: e.message
            })
        });
    };
};
