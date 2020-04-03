import app from "../../../config/base";
export const UPDATE_POST = "UPDATE_POST";
export const MESSAGE = "MESSAGE";
export const ERROR = "ERROR";

export const UpdatePost = (query) => {
    return async dispatch => {
        await app.firestore().collection('blog')
            .doc(query.id)
            .update({
                title: query.title,
                content: query.content,
                updatedAt: query.updatedAt
            }).then(() => {
                dispatch({
                    type: UPDATE_POST,
                    data: query,
                    msg: 'Post was updated'
                })
            }).then(() =>
                dispatch({
                    type: MESSAGE,
                    msg: "Comment added"
                })
            ).catch(e => {
                dispatch({
                    type: ERROR,
                    msg: e.message
                })
            })
    };
};