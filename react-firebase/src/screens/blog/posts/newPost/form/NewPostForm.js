import React from 'react';
import {useFormik} from "formik";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {CreatePostsAction} from '../../../actions/postAction/createPostsAction';
import SelectCategories from "./SelectCategories";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {TextareaAutosize} from "@material-ui/core";
import '../../../../../Styles/BlogStyles/NewPostForm.scss';
import FlashMessage from "react-flash-message";
import {ValidationSchema} from "./ValidationSchema";
import {Redirect} from "react-router-dom";
import {ClearMessageAction} from "../../../actions/postAction/clearMessageAction";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
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


export default function NewPostForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const addPost = async values => {
        const data = {
            userId: props.uID,
            title: values.title,
            content: values.content,
            like: values.like,
            author: props.displayName,
            category: values.category
        };
        try {
            dispatch(CreatePostsAction(data));
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            like: 0,
            category: 'history'
        },
        validationSchema: ValidationSchema,
        onSubmit: addPost
    });

    if (props.add) {
        dispatch(ClearMessageAction());
        return <Redirect to='/blog/allPosts' />
    }

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
                <Typography component="h1" variant="h5">
                    <FlashMessage duration={5000}>
                        <strong>{props.msg}</strong>
                    </FlashMessage>
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
                            <SelectCategories data={props.categories}
                                              value={formik.values.category}
                                              changed={formik.handleChange}
                                              onBlur={formik.handleBlur}
                            />
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
        </Container>
    );
}