import React, {useContext, useEffect, useRef} from "react";
import UpdateProfileForm from "./Form/UpdateProfileForm/UpdateProfileForm";
import '../../../Styles/ProfileStyle/ProfileFormCard.scss';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProfileInfoCard from "./Card/ProfileInfoCard";
import {useDispatch, useSelector} from "react-redux";
import app from "../../../config/base";
import {UserProfile} from "../../../Redux/Actions/AuthActions/UserProfile";
import {AuthContext} from "../../Auth/Auth/Auth";


export default function Profile() {
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
            dispatch(UserProfile(id))
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
        <Container className="ProfileContainer" component="main" maxWidth="lg">
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <div>
                        <img src="https://ps.w.org/default-featured-image/assets/icon-256x256.jpg?rev=1058491" alt=""/>
                    </div>
                    <div>
                        <Button className="UpdateForm" variant="contained" color="primary" onClick={handleClickOpen}>
                            Update profile info
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            style={{maxWidth: '100%'}}
                        >
                            <DialogContent>
                                <UpdateProfileForm />
                            </DialogContent>
                            <DialogActions>
                                <Button fullWidth onClick={handleClose} color="primary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/*<ProfileGrid/>*/}
                    <ProfileInfoCard
                        header={"Profile"}
                        fName={data.firstName}
                        lName={data.lastName}
                        eMail={data.email}
                        nickName={data.nickName}
                        city={data.city}
                        state={data.state}
                        phone={data.phoneNumber}
                        photo={app.auth().currentUser.photoURL}
                    />
                </Grid>
                <Grid item xs={12}>
                    {data.intro}
                </Grid>
            </Grid>
        </Container>

    );
}