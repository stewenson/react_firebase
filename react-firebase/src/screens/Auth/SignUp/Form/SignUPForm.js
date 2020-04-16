import React from 'react';
import {SignUpAction} from "../../actions/signUpAction";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ValidationSchema} from "./ValidationSchema";
import {InitialValues} from "./InitialValues";
import Copyright from "../../../../Components/Copyright/Copyright";

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

export default function SignUPForm() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const registerData = async values => {
        const data = {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            nickName: values.nickName,
        };
        try {
            dispatch(SignUpAction(data))
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        initialValues: InitialValues,
        validationSchema: ValidationSchema,
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
                    Sign up
                </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="firstName"
                                name="firstName"
                                variant="outlined"
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
                                variant="outlined"
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
                                variant="outlined"
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
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <strong>{formik.errors.email}</strong>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <strong>{formik.errors.password}</strong>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password_confirm"
                                label="Confirm Password"
                                type="password"
                                id="password_confirm"
                                autoComplete="current-password"
                                onChange={formik.handleChange}
                                value={formik.values.password_confirm}
                            />
                            <strong>{formik.errors.password_confirm}</strong>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item align="left">
                            <Link style={{ marginRight: 90 }} href="/" variant="body2">
                                Back to Home
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}