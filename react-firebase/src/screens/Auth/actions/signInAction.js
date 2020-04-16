import firebase from "../../../config/base";
export const USER_LOG_IN = "USER_LOG_IN";
export const ERROR = "ERROR";

export const SignInAction = query => {
    return async dispatch => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(query[0], query[1])
            .then(
                dispatch({
                    type: USER_LOG_IN,
                    data: query,
                    isLogged: true
                }))
            .catch(e => {
                dispatch({
                    type: ERROR,
                    data: e.message
                })
            })

    };
};
