import app from "../../../config/base";
export const USER_LOG_IN = "USER_LOG_IN";
export const ERROR = "ERROR";

export const UserLogin = query => {
    return async dispatch => {
        await app
            .auth()
            .signInWithEmailAndPassword(query[0], query[1])
            .then(
                dispatch({
                    type: USER_LOG_IN,
                    data: query
                }))
            .catch(e => {
                dispatch({
                    type: ERROR,
                    data: e.message
                })
            })

    };
};
