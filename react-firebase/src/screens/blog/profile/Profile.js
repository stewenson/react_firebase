import React, {useContext, useEffect, useRef} from "react";
import '../../../Styles/ProfileStyle/ProfileFormCard.scss';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ProfileInfoCard from "./Card/ProfileInfoCard";
import {useDispatch, useSelector} from "react-redux";
import {GetProfileAction} from "./actions/getProfileAction";
import {AuthContext} from "../../Auth/Auth/Auth";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Profile() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const {currentUser} = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const data = content.auth.data;

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
    useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Profile
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{maxWidth: '100%'}}
            >
                <DialogContent>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4} lg={5}>
                                <img src="https://ps.w.org/default-featured-image/assets/icon-256x256.jpg?rev=1058491"
                                     alt=""
                                     style={{ width: "50%"}}
                                />
                                <div>
                                    <FacebookIcon style={{ marginRight: "10%"}} fontSize="large"/>
                                    <InstagramIcon style={{ marginRight: "10%"}} fontSize="large"/>
                                    <LinkedInIcon style={{ marginRight: "10%"}} fontSize="large"/>
                                    <TwitterIcon style={{ marginRight: "10%"}} fontSize="large" />
                                </div>

                            </Grid>
                            <Grid item xs={12} md={8} lg={7}>
                                <Paper>
                                    <ProfileInfoCard header={"Prfile"} data={data}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    {data.intro}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}