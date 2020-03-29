import React, {useContext} from 'react';
import {useFormik} from "formik";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {AddNewPost} from '../../../../../Redux/Actions/BlogActions/AddNewPost';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {TextareaAutosize} from "@material-ui/core";
import '../../../../../Styles/BlogStyles/NewPostForm.scss';
import {AuthContext} from "../../../../Auth/Auth/Auth";


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

export default function NewPostForm() {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    const addPost = async values => {
        const data = [
            currentUser.uid,
            values.title,
            values.content,
            values.like,
            currentUser.displayName
        ];
        try {
            dispatch(AddNewPost(data));
            // console.log(data)
        } catch (e) {
            alert(e.message);
        }
    };
    const validate = values => {

        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        // } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.firstName)) {
        //     errors.firstName = 'First Name must contain only text';
        }
        if (!values.content) {
            errors.content = 'Required';
        // } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.lastName)) {
        //     errors.lastName = 'Last Name must contain only text';
        }
        //
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            like: 0,
        },
        validate,
        onSubmit: addPost
    });

    return (
        <Container component="main" maxWidth="xs" className="NewPostForm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add new Post
                </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="title"
                                name="title"
                                variant="outlined"
                                fullWidth
                                id="title"
                                label="Enter Title"
                                autoFocus
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                            <strong>{formik.errors.title}</strong>
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                variant="standard"
                                name="content"
                                id="content"
                                required
                                aria-label="minimum height"
                                rowsMin={10}
                                placeholder="Enter text"
                                autoComplete="content"
                                onChange={formik.handleChange}
                                value={formik.values.content}
                            />
                            <strong>{formik.errors.content}</strong>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add new Post
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}