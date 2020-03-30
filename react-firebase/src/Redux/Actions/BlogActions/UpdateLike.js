import app from "../../../config/base";
export const UPDATE_LIKE = "UPDATE_LIKE";
export const ERROR = "ERROR";

export const UpdateLike = query => {
    console.log(query)
    return async dispatch => {
        await app.firestore().collection('blog')
            .doc(query[0])
            .update({
                like: query[1] + 1,
            }).then(() => {
                dispatch({
                    type: UPDATE_LIKE,
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
