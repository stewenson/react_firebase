import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../Redux/Actions/MovieActions/FetchMovieById";
import MovieList from "./MovieList";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import "../../../Styles/MovieStyle/MovieStyle.scss";
import Paper from '@material-ui/core/Paper';


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

export default function Movie() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const searchMovie = values => {
        try {
            dispatch(getData(values.title.trim()));
        } catch (e) {
            alert(e.message);
        }
    };

    const validate  = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        } else if (values.title.length <= 3) {
            errors.title = 'Title must have 3 or more characters.';
        } else if (!/^[a-žA-Ž0-9]+[a-žA-Ž0-9 ]+[a-žA-Ž0-9 ]+[a-žA-Ž0-9 ]+[a-žA-Ž0-9 ]*$/.test(values.title)) {
            errors.title = 'Wrong title';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validate,
        onSubmit: searchMovie
    });

    return (
        <div className="Movie">
            <div className="TextField">
                <Paper component="form" elevation={3} onSubmit={formik.handleSubmit} className={classes.root}>
                    <InputBase
                        className={classes.input}
                        name="title"
                        type="text"
                        placeholder="Search movie by title"
                        inputProps={{ 'aria-label': 'Search movie by title' }}
                        onChange={formik.handleChange}
                        value={formik.values.title}

                    />
                    <strong className='ErrorMessage'>
                        {formik.errors.title}
                    </strong>
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className="MovieList">
                <MovieList
                    data ={content.movie.data}
                />
            </div>
        </div>
    );
}