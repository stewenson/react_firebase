import app from "../../../config/base";
export const UPDATE_LIKE_WITHOUT_LOGIN = "UPDATE_LIKE_WITHOUT_LOGIN";
export const ERROR = "ERROR";


export const UpdateLikeWithoutLogin = query => {
    return async dispatch => {
        await app.firestore().collection('blog')
            .doc(query[0])
            .update({
                like: query[1] + 1,
            }).then(() => {
                dispatch({
                    type: UPDATE_LIKE_WITHOUT_LOGIN,
                    data: query
                });
            }).catch(e => {
                dispatch({
                    type: ERROR,
                    msg: e.message
                })
            })
    };
};
