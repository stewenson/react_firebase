import React, {useContext, useEffect, useRef} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import UpdateProfileForm from "../Form/UpdateProfileForm/UpdateProfileForm";
import DialogActions from "@material-ui/core/DialogActions";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../../Auth/Auth/Auth";
import {GetProfileAction} from "../actions/getProfileAction";

export default function UpdateProfile() {
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const loadData = (id) => {
            dispatch(GetProfileAction(id))
        };
        loadData(currentUser.uid);
    }, [content.auth.message, dispatch, currentUser.uid]);

    const descriptionElementRef = useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const data = content.auth.data;
    return (
        <div>
            <Button className="UpdateForm" color="primary" onClick={handleClickOpen}>
                Update profile
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{maxWidth: '1000%'}}
            >
                <DialogContent>
                    <UpdateProfileForm data={data} />
                </DialogContent>
                <DialogActions>
                    <Button fullWidth onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}