import React, {useContext} from 'react';
import {useFormik} from "formik";
import {CreateCommentAction} from "../../actions/commentAction/createCommentAction";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {TextareaAutosize} from "@material-ui/core";
import {AuthContext} from "../../../Auth/Auth/Auth";
import FlashMessage from "react-flash-message";
import {ValidationSchema} from "./ValidationSchema";
import {InitialValues} from "./InitialValues";

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
            values.author,
            props.postId,
            values.comment,

        ];
        try {
            dispatch(CreateCommentAction(data));
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        initialValues: InitialValues(currentUser),
        validationSchema: ValidationSchema,
        onSubmit: addComment
    });


    return (
        <Container component="main" maxWidth="xs" className="NewPostForm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Comments
                </Typography>
                <Typography component="h1" variant="h5">
                    <FlashMessage duration={5000}>
                        <strong>{props.newComment}</strong>
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
                                value={formik.values.author}
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