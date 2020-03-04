import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../Redux/Actions/MovieActions/FetchMovieById";
import TextField from "@material-ui/core/TextField";
import MovieList from "./MovieList";
import "../../../Styles/MovieStyle/MovieStyle.scss";


function Movie() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();
    
    const searchMovie = values => {
        try {
            dispatch(getData(values.title));
        } catch (e) {
            alert(e.message);
        }
    };


    const validate  = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        } else if (!/^[a-žA-Ž0-9 ]+(.+)*$/.test(values.title)) {
            errors.title = 'Wrong title';
        }
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
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        name="title"
                        type="text"
                        error={formik.errors.title ? true : null}
                        helperText={formik.errors.title}
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        label={"Enter movie Title"}
                    />
                </form>
            </div>
            <div className="MovieList">
                <MovieList
                    data ={content.movie.data}
                />
            </div>

        </div>
    );
}

export default Movie;