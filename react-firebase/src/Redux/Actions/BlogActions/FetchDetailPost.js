import app from "../../../config/base";
export const FETCH_DETAIL_POST = "FETCH_DETAIL_POST";
export const ERROR = "ERROR";


export const FetchDetailPost = query => {
        return  dispatch => {
            app.firestore()
                .collection("blog").doc(query.id)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        dispatch({
                            type: FETCH_DETAIL_POST,
                            data: {...doc.data(), id: doc.id}
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
