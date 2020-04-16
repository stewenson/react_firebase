import React from 'react';
import { useFormik } from 'formik';
import InputBase from "@material-ui/core/InputBase";
import {searchAction} from "../actions/searchAction";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {ValidationSchema} from "./ValidationSchema";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchForm (props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const SearchMovie = values => {
        try {
            dispatch(searchAction(values.title.trim()));
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: ValidationSchema,
        onSubmit: SearchMovie
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Paper elevation={3} onSubmit={formik.handleSubmit} className={classes.root}>
            <InputBase
                className={classes.input}
                name="title"
                type="text"
                placeholder="Search movie by title"
                inputProps={{ 'aria-label': 'Search movie by title' }}
                onChange={formik.handleChange}
                value={formik.values.title}

            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
                <strong className='ErrorMessage'>
                    {formik.errors.title ? <div>{formik.errors.title}</div> : null}
                </strong>
            </Paper>
        </form>
    );
};