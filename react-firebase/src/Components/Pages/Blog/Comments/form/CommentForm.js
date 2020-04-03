import React, {useContext} from 'react';
import {useFormik} from "formik";
import {AddComment} from "../../../../../Redux/Actions/BlogActions/AddComment";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {TextareaAutosize} from "@material-ui/core";
import {AuthContext} from "../../../../Auth/Auth/Auth";
import FlashMessage from "react-flash-message";

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

export default function CommentForm(props) {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    const addComment = async values => {
        const data = [
            currentUser ? currentUser.uid : 'guest',
            currentUser ? currentUser.displayName : values.author,
            props.postId,
            values.comment,

        ];
        try {
            dispatch(AddComment(data));
        } catch (e) {
            alert(e.message);
        }
    };
    const validate = values => {

        const errors = {};
        if (!values.author) {
            errors.author = 'Required';
            // } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.firstName)) {
            //     errors.firstName = 'First Name must contain only text';
        }
        if (!values.comment) {
            errors.comment = 'Required';
            // } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.lastName)) {
            //     errors.lastName = 'Last Name must contain only text';
        }
        //
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            author: '',
            comment: '',
        },
        validate,
        onSubmit: addComment
    });

    let newComment;
    if (props.comment != null) {
        newComment = props.comment;
    }
    return (
        <Container component="main" maxWidth="xs" className="NewPostForm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Comments
                </Typography>
                <Typography component="h1" variant="h5">
                    <FlashMessage duration={5000}>
                        <strong>{newComment}</strong>
                    </FlashMessage>
                </Typography>
                <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                style={{ width: "100%"}}
                                autoComplete="author"
                                name="author"
                                variant="outlined"
                                id="author"
                                label="Enter name"
                                onChange={formik.handleChange}
                                value={currentUser ? currentUser.displayName : formik.values.author}
                            />
                            <strong>{formik.errors.author}</strong>
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                style={{ width: "100%"}}
                                variant="standard"
                                name="comment"
                                id="comment"
                                required
                                aria-label="minimum height"
                                rowsMin={10}
                                placeholder="Enter comment"
                                autoComplete="comment"
                                onChange={formik.handleChange}
                                value={formik.values.comment}
                            />
                            <strong>{formik.errors.comment}</strong>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Comment
                    </Button>
                </form>
            </div>
        </Container>
    );
}