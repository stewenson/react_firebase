import app from "../../../config/base";
export const FETCH_PROFILE_DATA = "FETCH_PROFILE_DATA";
export const ERROR = "ERROR";


export const UserProfile = query => {
    return  dispatch => {
        app.firestore()
            .collection("users").doc(query)
            .get()
            .then(doc => {
                if (doc.exists) {
                    dispatch({
                        type: FETCH_PROFILE_DATA,
                        data: doc.data()
                    })
                } else {
                    // doc.data() will be undefined in this case
                    dispatch ({
                        type: ERROR,
                        msg: 'Data doesnnt exist'
                    })
                }
            }).catch(e =>  {
            dispatch({
                type: ERROR,
                msg: e.message
            })
        });
    };
};
