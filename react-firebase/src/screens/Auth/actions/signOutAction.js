import firebase from "../../../config/base";
export const USER_LOG_OUT = "USER_LOG_OUT";
export const ERROR = "ERROR";

export const SignOutAction = () => {
    return async dispatch => {
        await firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: USER_LOG_OUT,
                    isLogged: false

                })
            })
            .catch(e => {
                dispatch({
                    type: ERROR,
                    data: e.message
                })
            })

    };
};
