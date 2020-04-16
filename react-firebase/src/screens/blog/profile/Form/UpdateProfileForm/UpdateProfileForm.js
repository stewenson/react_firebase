import React, {useContext} from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {ProfileUpdateAction} from '../../actions/profileUpdateAction';
import {AuthContext} from "../../../../Auth/Auth/Auth";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../../../../Styles/ProfileStyle/UpdateProfileForm.scss';
import {ValidationSchema} from "./ValidationSchema";
import {InitialValues} from "./InitialValues";
import Copyright from "../../../../../Components/Copyright/Copyright";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function UpdateProfileForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);

    const registerData = async values => {
        const data = {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            nickName: values.nickName,
            city: values.city,
            state: values.State,
            phoneNumber: values.phoneNumber,
            uid: currentUser.uid,
            intro: values.intro,
            photo: values.photoUrl,
        };
        try {
            dispatch(ProfileUpdateAction(data));
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: InitialValues(props),
        validationSchema: ValidationSchema,
        onSubmit: registerData,
    });

    return (
        <Container component="main" maxWidth="lg" className="SignUpForm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Update profile info
                </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                autoComplete="firstName"
                                name="firstName"
                                variant="standard"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            <strong>{formik.errors.firstName}</strong>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                            <strong>{formik.errors.lastName}</strong>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="nickName"
                                label="Nick Name"
                                name="nickName"
                                autoComplete="nickName"
                                onChange={formik.handleChange}
                                value={formik.values.nickName}
                            />
                            <strong>{formik.errors.nickName}</strong>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="text"
                                autoComplete="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <strong>{formik.errors.email}</strong>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="city"
                                label="city"
                                type="city"
                                id="city"
                                autoComplete="city"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                            />
                            <strong>{formik.errors.city}</strong>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="State"
                                label="State"
                                type="State"
                                id="State"
                                autoComplete="State"
                                onChange={formik.handleChange}
                                value={formik.values.State}
                            />
                            <strong>{formik.errors.State}</strong>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <TextField
                                autoComplete="phoneNumber"
                                name="phoneNumber"
                                variant="standard"
                                fullWidth
                                id="phoneNumber"
                                label="Enter Phone number"
                                autoFocus
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                            />
                            <strong>{formik.errors.phoneNumber}</strong>
                        </Grid>
                            <TextareaAutosize
                                variant="standard"
                                name="intro"
                                id="intro"
                                required
                                aria-label="minimum height"
                                rowsMin={3}
                                placeholder="Minimum 3 rows"
                                autoComplete="phoneNumber"
                                onChange={formik.handleChange}
                                value={formik.values.intro}
                            />
                            <strong>{formik.errors.intro}</strong>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}