import firebase from "../../../config/base";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const ERROR = "ERROR";

export const ResetPassAction = query => {
    return async dispatch => {
        await firebase
            .auth()
            .sendPasswordResetEmail(query)
            .then(
                dispatch({
                    type: RESET_PASSWORD,
                    message: 'We have sen a reset password email. Please click the reset password link to set your new password'
                }))
            .catch(e => {
                dispatch({
                    type: ERROR,
                    data: e.message
                })
            })

    };
};
