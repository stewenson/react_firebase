import React, {useContext} from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {UserProfileUpdate} from '../../../../../Redux/Actions/AuthActions/UserProfileUpdate';
import {AuthContext} from "../../../../Auth/Auth/Auth";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../../../../Styles/ProfileStyle/UpdateProfileForm.scss';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
        const data = [
            values.email,
            values.firstName,
            values.lastName,
            values.nickName,
            values.city,
            values.State,
            values.phoneNumber,
            currentUser.uid,
            values.intro,
        ];
        try {
            dispatch(UserProfileUpdate(data))
        } catch (e) {
            alert(e.message);
        }
    };

    const validate = values => {

        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.firstName)) {
            errors.firstName = 'First Name must contain only text';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.lastName)) {
            errors.lastName = 'Last Name must contain only text';
        }
        if (!values.nickName) {
            errors.nickName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.nickName)) {
            errors.nickName = 'Nick Name must contain only text';
        }
        if (!values.city) {
            errors.city = 'Required';
        }
        if (!values.State) {
            errors.State = 'Required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            city: '',
            email: '',
            State: '',
            phoneNumber: '',
            intro: '',

        },
        validate,
        onSubmit: registerData
    });

    return (
        <Container component="main" maxWidth="xs" className="SignUpForm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Update profile info
                </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="phoneNumber"
                                label="phoneNumber"
                                type="number"
                                id="phoneNumber"
                                autoComplete="phoneNumber"
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
                            <strong>{formik.errors.phoneNumber}</strong>
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