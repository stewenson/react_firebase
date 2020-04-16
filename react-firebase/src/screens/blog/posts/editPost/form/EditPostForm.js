import React from 'react';
import {Redirect} from 'react-router-dom';
import { useFormik } from 'formik';
import {PostUpdateAction} from "../../../actions/postAction/postUpdateAction";
import {ValidationSchema} from "./ValidationSchema";
import {Button, Container, CssBaseline, TextareaAutosize} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FlashMessage from "react-flash-message";
import '../../../../../Styles/BlogStyles/EditPost.scss';
import {useDispatch} from "react-redux";
import {ClearAfterEdit} from "../../../actions/postAction/ClearAfterEdit";

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

export const EditPostForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const editPost = async values => {
        const data = {
            id: props.data.id,
            title: values.title,
            content: values.content,
            updatedAt: Date.now()
        };
        try {
            dispatch(PostUpdateAction(data));
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: props.data.title ? props.data.title : ' ',
            content: props.data.content ? props.data.content : ' ',
        },
        validationSchema: ValidationSchema,
        onSubmit: editPost
    });

    if (props.updated != null) {
        dispatch(ClearAfterEdit());
        return <Redirect to='/blog/allPosts' />
    }

    return (
        <Container component="main" maxWidth="lg" className="EditPost">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Edit Post
                </Typography>
                <Typography component="h1" variant="h5">
                    <FlashMessage duration={5000}>
                        <strong>{}</strong>
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
                        Edit Post
                    </Button>
                </form>
            </div>
        </Container>
    );
};